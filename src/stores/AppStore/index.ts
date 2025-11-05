import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { AppState, PreferenceState } from './types';

const initialPreference: PreferenceState = {
  type: null,
  address: undefined,
  carDescription: undefined,
  date: undefined,
  time: undefined,
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      auth: { email: null },
      preference: initialPreference,
      signIn: (email) => set({ auth: { email } }),
      signOut: () =>
        set({ auth: { email: null }, preference: initialPreference }),
      setPreference: (p) =>
        set((state) => ({ preference: { ...state.preference, ...p } })),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ auth: state.auth, preference: state.preference }),
    }
  )
);
