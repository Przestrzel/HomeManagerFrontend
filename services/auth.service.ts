import { IAuthCredentials, IUser } from "@/types/auth.types";
import endpoints from "./endpoints";
import { httpNoInterceptors } from "./fetcher";

export const login = async (data: IAuthCredentials) => {
  return httpNoInterceptors.post<IUser>(endpoints.auth.login, data);
}

export const logout = async () => {
  return httpNoInterceptors.post(endpoints.auth.logout);
}
