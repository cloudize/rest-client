/* eslint-disable import/no-cycle */
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
  RawAxiosResponseHeaders,
} from 'axios';
import {
  hasProperty, isDefined, isDefinedAndNotNull, isTrue,
} from '@apigames/json';
import {
  IRestClient,
  RestClientOptions,
  RestClientResponse,
  ThrowException,
  ThrowNetworkConnectionException,
} from '..';

export default class RestClient implements IRestClient {
  private readonly throwOnError: boolean;

  constructor(throwOnError: boolean = true) {
    this.throwOnError = throwOnError;
  }

  // eslint-disable-next-line class-methods-use-this
  private IsAxiosError(error: any): error is AxiosError {
    return (error as AxiosError).isAxiosError !== undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  private PrepareRequestConfig(
    uri: string,
    method: Method,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ) :AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      url: uri,
      method,
      headers,
    };

    if (isDefined(options)) {
      if (isDefined(options.queryParams)) config.params = options.queryParams;
      if (isDefined(options.maxRedirects)) config.maxRedirects = options.maxRedirects;
      if (isDefined(options.timeoutMs)) config.timeout = options.timeoutMs;
    }

    return config;
  }

  // eslint-disable-next-line class-methods-use-this
  private serializeHeaders(headers: RawAxiosResponseHeaders): any {
    const result: any = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key in headers) {
      if (hasProperty(headers, key)) {
        result[key.toLowerCase()] = headers[key];
      }
    }

    return result;
  }

  private ProcessError(uri: string, error: any): RestClientResponse {
    if (this.IsAxiosError(error)) {
      if (isDefinedAndNotNull(error.response)) {
        if (isTrue(this.throwOnError)) {
          ThrowException({
            statusCode: error.response.status,
            statusText: error.response.statusText,
            headers: this.serializeHeaders(error.response.headers),
            data: error.response.data,
          });
          return undefined;
        }

        return {
          statusCode: error.response.status,
          statusText: error.response.statusText,
          headers: this.serializeHeaders(error.response.headers),
          data: error.response.data === '' ? undefined : error.response.data,
        };
      }
      ThrowNetworkConnectionException(uri);
      return undefined;
    }
    throw error;
  }

  // eslint-disable-next-line class-methods-use-this
  private ProcessResponse(axiosResponse: AxiosResponse): RestClientResponse {
    return {
      statusCode: axiosResponse.status,
      statusText: axiosResponse.statusText,
      headers: this.serializeHeaders(axiosResponse.headers),
      data: axiosResponse.data === '' ? undefined : axiosResponse.data,
    };
  }

  // eslint-disable-next-line consistent-return
  async Delete(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    try {
      return this.ProcessResponse(await axios.delete(
        uri,
        this.PrepareRequestConfig(uri, 'DELETE', headers, options),
      ));
    } catch (error) {
      return this.ProcessError(uri, error);
    }
  }

  // eslint-disable-next-line consistent-return
  async Get(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    try {
      return this.ProcessResponse(await axios.get(
        uri,
        this.PrepareRequestConfig(uri, 'GET', headers, options),
      ));
    } catch (error) {
      return this.ProcessError(uri, error);
    }
  }

  // eslint-disable-next-line consistent-return
  async Head(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    try {
      return this.ProcessResponse(await axios.head(
        uri,
        this.PrepareRequestConfig(uri, 'HEAD', headers, options),
      ));
    } catch (error) {
      return this.ProcessError(uri, error);
    }
  }

  // eslint-disable-next-line consistent-return
  async Patch(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    try {
      return this.ProcessResponse(await axios.patch(
        uri,
        payload,
        this.PrepareRequestConfig(uri, 'PATCH', headers, options),
      ));
    } catch (error) {
      return this.ProcessError(uri, error);
    }
  }

  // eslint-disable-next-line consistent-return
  async Post(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    try {
      return this.ProcessResponse(await axios.post(
        uri,
        payload,
        this.PrepareRequestConfig(uri, 'POST', headers, options),
      ));
    } catch (error) {
      return this.ProcessError(uri, error);
    }
  }

  // eslint-disable-next-line consistent-return
  async Put(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    try {
      return this.ProcessResponse(await axios.put(
        uri,
        payload,
        this.PrepareRequestConfig(uri, 'PUT', headers, options),
      ));
    } catch (error) {
      return this.ProcessError(uri, error);
    }
  }
}
