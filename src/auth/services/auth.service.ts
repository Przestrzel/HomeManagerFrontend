import { ILoginInputs, IUser } from '../types/auth.types';

const login = (data: ILoginInputs): Promise<IUser> => {
  return Promise.resolve({
    id: '1',
    ...data
  });
};

const authService = {
  login,
};
export default authService;