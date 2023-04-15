import { IUser } from './../types/auth.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  user: IUser | null;
}

const initialState: IAuthState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    }
  }
});

export const { setUser, logout } = authSlice.actions;
