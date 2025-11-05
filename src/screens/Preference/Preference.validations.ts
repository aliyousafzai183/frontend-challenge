import { combineDateTimeToISO } from '@/src/utils/date';
import { isFutureISO, withinStoreHours } from '@/src/utils/validation';
import * as yup from 'yup';

const base = {
  date: yup.string().required('Date is required'),
  time: yup
    .string()
    .required('Time is required')
    .test('hours', 'Outside store hours (09:00–21:00)', (t) => (t ? withinStoreHours(t) : false)),
};

export const inStoreSchema = yup.object({
  type: yup.mixed<'in_store'>().oneOf(['in_store']).required(),
  ...base,
}).test('future', 'Select a future date/time', (v) => {
  const iso = combineDateTimeToISO(v.date, v.time);
  return iso ? isFutureISO(iso) : false;
});

export const deliverySchema = yup.object({
  type: yup.mixed<'delivery'>().oneOf(['delivery']).required(),
  address: yup.string().min(8).max(120).required('Address is required'),
  ...base,
}).test('future', 'Select a future date/time', (v) => {
  const iso = combineDateTimeToISO(v.date, v.time);
  return iso ? isFutureISO(iso) : false;
});

export const curbsideSchema = yup.object({
  type: yup.mixed<'curbside'>().oneOf(['curbside']).required(),
  carDescription: yup.string().min(5).max(120).required('Car description is required'),
  ...base,
}).test('future', 'Select a future date/time', (v) => {
  const iso = combineDateTimeToISO(v.date, v.time);
  return iso ? isFutureISO(iso) : false;
});

export type InStoreValues = yup.InferType<typeof inStoreSchema>;
export type DeliveryValues = yup.InferType<typeof deliverySchema>;
export type CurbsideValues = yup.InferType<typeof curbsideSchema>;
