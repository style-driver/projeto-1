import { create } from "zustand";

interface AuthState {
  user: any | null;
  session: any | null;
  loading: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  signIn: async (credentials: { email: string; password: string }) => {
    // Simulação de login com atraso
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Em um app real, aqui faríamos a chamada à API
    // Por enquanto, aceitamos qualquer e-mail/senha para demonstração
    const fakeUser = { id: "1", email: credentials.email };
    const fakeSession = { access_token: "__PULSE_REDACTED_CREDENTIAL_ASSIGNMENT__" };
    set({ user: fakeUser, session: fakeSession, loading: false });
  },
  signUp: async (credentials: { email: string; password: string }) => {
    // Simulação de cadastro com atraso
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Em um app real, aqui faríamos a chamada à API
    // Por enquanto, aceitamos qualquer e-mail/senha para demonstração
    const fakeUser = { id: "2", email: credentials.email };
    const fakeSession = { access_token: "__PULSE_REDACTED_CREDENTIAL_ASSIGNMENT__" };
    set({ user: fakeUser, session: fakeSession, loading: false });
  },
  logout: () => {
    set({ user: null, session: null, loading: false });
  }
}));