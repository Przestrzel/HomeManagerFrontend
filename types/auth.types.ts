
export interface IPerson {
  id: number;
  family: string;
}

export interface IUser {
  id: number;
  email: string;
  person: IPerson;
}

export interface IAuthCredentials {
  email: string;
  password: string;
}
