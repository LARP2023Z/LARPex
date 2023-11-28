import { AxiosResponse } from "axios";

export const responseSuccessInterceptor = (response: AxiosResponse) => response;

export const responseFailureInterceptor = async (error: unknown) =>
  Promise.reject(error);
