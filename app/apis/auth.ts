import type { GoogleCheckAuthResponse } from "./types/auth.type";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ROUTE_PATH = {
  AUTH: {
    LOGIN: 'auth/google',
    LOGOUT: 'auth/logout',
    CHECK_AUTH: 'auth/login/check-auth'
  },
};

export const googleLogin = () => {
  window.open(`${API_BASE_URL}/${ROUTE_PATH.AUTH.LOGIN}`, '_self');
};

export const googleLogout = async () => {
  window.open(`${API_BASE_URL}/${ROUTE_PATH.AUTH.LOGOUT}`, '_self');
};

export const GoogleCheckAuth = async (): Promise<GoogleCheckAuthResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/${ROUTE_PATH.AUTH.CHECK_AUTH}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      },
    }
  );
  return response.json();
};
