import { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

export const requestSuccessInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  //   TODO: const token = AuthStorage.getAccessToken();
  const token = null;
  if (token) {
    return {
      ...config,
      withCredentials: true,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders,
    };
  }
  return config;
};
