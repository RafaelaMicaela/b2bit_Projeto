const TOKEN: string = "token";
const REFRESH_TOKEN_KEY: string = "REFRESH_TOKEN_KEY";

export const getToken = () => localStorage.getItem(TOKEN);
export const setToken = (token: string) => localStorage.setItem(TOKEN, token);
export const removeToken = (): void => localStorage.removeItem(TOKEN);

export const setRefreshToken = (refresh_token: string) =>
  localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const SERVICE_URL = "https://api.homologation.cliqdrive.com.br/";
