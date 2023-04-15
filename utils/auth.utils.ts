import Cookies from 'js-cookie';

const FAMILY_COOKIE = '__family_id__'

export const setFamily = (family: string) => {
  Cookies.set(FAMILY_COOKIE, family);
}

export const getFamily = () => {
  return Cookies.get(FAMILY_COOKIE);
}

const TOKEN = '__token__'
const REFRESH_TOKEN = '__refresh_token__'

export const setToken = (token: string) => {
  localStorage.set(TOKEN, token);
}

export const getToken = () => {
  return localStorage.get(TOKEN);
}

export const setRefreshToken = (token: string) => {
  localStorage.set(REFRESH_TOKEN, token);
}

export const getRefreshToken = () => {
  return localStorage.get(REFRESH_TOKEN);
}

export const resetTokens = () => {
  localStorage.remove(TOKEN);
  localStorage.remove(REFRESH_TOKEN);
  setFamily('');
}
