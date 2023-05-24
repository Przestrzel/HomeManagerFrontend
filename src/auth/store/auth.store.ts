import { create } from 'zustand';
import { IAuthStore, IUser } from '../types/auth.types';

const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  setUser: (user: IUser) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
