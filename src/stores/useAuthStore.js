import { create } from "zustand";
import { listenAuth, signInGoogle, signOutGoogle } from "../services/firebase";

export const useAuthStore = create(() => ({
  user: null,
  loading: true,
  signIn: async () => {
    await signInGoogle();
  },
  signOut: async () => {
    await signOutGoogle();
  },
}));

// 앱 시작 시 인증 상태 구독(한번만)
listenAuth((u) => {
  useAuthStore.setState({ user: u, loading: false });
});
