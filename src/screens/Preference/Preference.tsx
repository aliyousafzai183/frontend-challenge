import { AddressAutocomplete } from "@/src/components/AddressAutocomplete";
import { Button } from "@/src/components/Button";
import { DateTimeField } from "@/src/components/DateTimeField";
import { FormField } from "@/src/components/FormField";
import { RadioGroup } from "@/src/components/RadioGroup";
import { Screen } from "@/src/components/Screen";
import { useAuthGuard } from "@/src/hooks/useAuthGuard";
import type { RootStackParamList } from "@/src/navigation/RootNavigator/RootNavigator";
import { useAppStore } from "@/src/stores/AppStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import {
  curbsideSchema,
  deliverySchema,
  inStoreSchema,
} from "./Preference.validations";

type Props = NativeStackScreenProps<RootStackParamList, "Preference">;

function PreferenceScreen({ route, navigation }: Props) {
  useAuthGuard();
  const pref = useAppStore((s) => s.preference);
  const setPreference = useAppStore((s) => s.setPreference);

  const [type, setType] = useState<"in_store" | "delivery" | "curbside" | null>(
    route.params?.type ?? pref.type ?? "in_store"
  );
  const [address, setAddress] = useState(pref.address || "");
  const [carDescription, setCarDescription] = useState(
    pref.carDescription || ""
  );
  const [date, setDate] = useState(pref.date);
  const [time, setTime] = useState(pref.time);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const isValid = useMemo(() => {
    try {
      if (type === "in_store")
        inStoreSchema.validateSync({ type, date, time }, { abortEarly: false });
      if (type === "delivery")
        deliverySchema.validateSync(
          { type, address, date, time },
          { abortEarly: false }
        );
      if (type === "curbside")
        curbsideSchema.validateSync(
          { type, carDescription, date, time },
          { abortEarly: false }
        );
      return Boolean(type);
    } catch {
      return false;
    }
  }, [type, address, carDescription, date, time]);

  const submit = async () => {
    if (!type) return;
    setSubmitting(true);
    try {
      if (type === "in_store")
        await inStoreSchema.validate(
          { type, date, time },
          { abortEarly: false }
        );
      if (type === "delivery")
        await deliverySchema.validate(
          { type, address, date, time },
          { abortEarly: false }
        );
      if (type === "curbside")
        await curbsideSchema.validate(
          { type, carDescription, date, time },
          { abortEarly: false }
        );

      setPreference({
        type,
        address: type === "delivery" ? address : undefined,
        carDescription: type === "curbside" ? carDescription : undefined,
        date,
        time,
      });
      navigation.navigate("Summary");
    } catch (e: any) {
      const next: Record<string, string> = {};
      e?.inner?.forEach((err: any) => {
        if (err.path) next[err.path] = err.message;
      });
      setErrors(next);
    } finally {
      setSubmitting(false);
    }
  };

  const validateDeliveryAddress = async () => {
    if (type !== 'delivery') return;
    try {
      await deliverySchema.validateAt('address', { type, address, date, time });
      setErrors((e) => ({ ...e, address: '' }));
    } catch (e: any) {
      setErrors((prev) => ({ ...prev, address: e?.message as string }));
    }
  };

  const validateCurbsideCar = async () => {
    if (type !== 'curbside') return;
    try {
      await curbsideSchema.validateAt('carDescription', { type, carDescription, date, time });
      setErrors((e) => ({ ...e, carDescription: '' }));
    } catch (e: any) {
      setErrors((prev) => ({ ...prev, carDescription: e?.message as string }));
    }
  };

  return (
    <Screen
      bottomContent={
        <Button
          title="Continue"
          onPress={submit}
          disabled={!isValid}
          loading={submitting}
        />
      }
    >
      <RadioGroup
        options={[
          { label: "In-store", value: "in_store" },
          { label: "Delivery", value: "delivery" },
          { label: "Curbside", value: "curbside" },
        ]}
        value={type}
        onChange={setType as any}
      />

      {type === "delivery" ? (
        <AddressAutocomplete
          value={address}
          onChange={setAddress}
          error={errors.address}
          onBlur={validateDeliveryAddress}
        />
      ) : null}

      {type === "curbside" ? (
        <FormField
          label="Car description"
          value={carDescription}
          onChangeText={setCarDescription}
          onBlur={validateCurbsideCar}
          placeholder="e.g., Blue Honda Civic"
          error={errors.carDescription}
        />
      ) : null}

      {type ? (
        <>
          <DateTimeField
            date={date}
            time={time}
            onChange={(next) => {
              if (next.date) setDate(next.date);
              if (next.time) setTime(next.time);
            }}
          />
          {errors.time ? (
            <FormField
              label=""
              value=""
              onChangeText={() => {}}
              error={errors.time}
            />
          ) : null}
        </>
      ) : null}
    </Screen>
  );
}

export default PreferenceScreen;
