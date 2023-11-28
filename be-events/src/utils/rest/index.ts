import axios from "axios";
import { requestSuccessInterceptor } from "./inceptors/onRequest";
import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from "./inceptors/onResponse";

const restClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "",
});

restClient.interceptors.request.use(requestSuccessInterceptor);
restClient.interceptors.response.use(
  responseSuccessInterceptor,
  responseFailureInterceptor
);

export default restClient;
