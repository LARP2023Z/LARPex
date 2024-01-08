/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserDetailResponse {
  /** @format uuid */
  id?: string;
  alias?: string;
  name?: string;
  surname?: string;
  /** @format date */
  birthDate?: string;
  email?: string;
}

export type EventListResponse = {
  /** @format uuid */
  eventId?: string;
  name?: string;
  hostname?: string;
  startDate?: string;
}[];

export interface EventDetailsResponse {
  /** @format uuid */
  eventId?: string;
  name?: string;
  hostname?: string;
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
  status?: string;
  isCurrentUserParticipating?: boolean;
  games?: {
    /** @format uuid */
    id?: string;
  }[];
}

export interface SignUpResponse {
  status?: string;
}

export interface InteractCommand {
  /** @format uuid */
  userId?: string;
  qrCode?: string;
}

export interface InteractResponse {
  interactionType?: 'OPEN_DOOR' | 'OPEN_CHEST';
}

export interface InitializePaymentCommand {
  /** @format double */
  amount?: number;
  /** @format uuid */
  userId?: string;
  /** @format uuid */
  eventId?: string;
  paymentMethod?: 'BLIK' | 'TRANSFER';
}

export interface InitializePaymentResponse {
  redirectUri?: string;
}

export interface ConfirmPaymentCommand {
  /** @format uuid */
  eventId?: string;
  /** @format uuid */
  userId?: string;
}

export interface ConfirmPaymentResponse {
  exists?: boolean;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '/',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title Larpex
 * @version 0.0.1
 * @baseUrl /
 *
 * Larpex API
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  payments = {
    /**
     * No description
     *
     * @tags IPayments
     * @name GetConfirm
     * @summary Confirm payment
     * @request GET:/payments
     * @response `200` `ConfirmPaymentResponse` OK
     */
    getConfirm: (query: ConfirmPaymentCommand, params: RequestParams = {}) =>
      this.request<ConfirmPaymentResponse, any>({
        path: `/payments`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags IPayments
     * @name PostConfirm
     * @summary Initialize payment
     * @request POST:/payments
     * @response `200` `InitializePaymentResponse` OK
     */
    postConfirm: (
      query: InitializePaymentCommand,
      params: RequestParams = {}
    ) =>
      this.request<InitializePaymentResponse, any>({
        path: `/payments`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags UserService
     * @name GetUserDetails
     * @summary Get user details
     * @request GET:/users/{id}
     * @response `200` `UserDetailResponse` User details
     * @response `404` `void` User not found
     */
    getUserDetails: (id: string, params: RequestParams = {}) =>
      this.request<UserDetailResponse, void>({
        path: `/users/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  events = {
    /**
     * @description Retrieve a list of events.
     *
     * @name EventsList
     * @summary Get Events List
     * @request GET:/events
     * @response `200` `(EventListResponse)[]` Successful response
     * @response `400` `void` Bad Request
     */
    eventsList: (params: RequestParams = {}) =>
      this.request<EventListResponse[], void>({
        path: `/events`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Retrieve details of a specific event.
     *
     * @name EventsDetail
     * @summary Get Event Details
     * @request GET:/events/{id}
     * @response `200` `EventDetailsResponse` Successful response
     * @response `400` `void` Bad Request
     */
    eventsDetail: (id: string, params: RequestParams = {}) =>
      this.request<EventDetailsResponse, void>({
        path: `/events/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Sign up a user for a specific event.
     *
     * @name EventsCreate
     * @summary Sign Up for Event
     * @request POST:/events/{uid}/{eid}
     * @response `200` `SignUpResponse` Successful response
     * @response `400` `void` Bad Request
     */
    eventsCreate: (uid: string, eid: string, params: RequestParams = {}) =>
      this.request<SignUpResponse, void>({
        path: `/events/${uid}/${eid}`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  };
  interactions = {
    /**
     * No description
     *
     * @tags interaction-controller
     * @name PostInteract
     * @request POST:/interactions
     * @response `200` `InteractResponse` Interaction performed
     * @response `400` `InteractResponse` Interaction not performed due to malformed qr code
     */
    postInteract: (data: InteractCommand, params: RequestParams = {}) =>
      this.request<InteractResponse, InteractResponse>({
        path: `/interactions`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
