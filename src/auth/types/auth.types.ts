export interface ILoginInputs {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
}

export interface IAuthStore {
  user: IUser | null;
  setUser: (user: IUser) => void;
  logout: () => void;
}