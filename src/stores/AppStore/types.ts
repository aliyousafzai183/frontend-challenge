export type PreferenceType = 'in_store' | 'delivery' | 'curbside';

export interface PreferenceState {
  type: PreferenceType | null;
  address?: string;
  carDescription?: string;
  date?: string; // ISO yyyy-mm-dd
  time?: string; // HH:mm (24h)
}

export interface AppState {
  auth: { email: string | null };
  preference: PreferenceState;
  signIn: (email: string) => void;
  signOut: () => void;
  setPreference: (p: Partial<PreferenceState>) => void;
}
