import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse, Method,
} from 'axios';
import { isDefined, isDefinedAndNotNull } from '@apigames/json';
import {
  IRestClient,
  RestClientOptions,
  RestClientResponse,
  ThrowException,
  ThrowNetworkConnectionException,
} from '..';

export default class RestClient implements IRestClient {
  // eslint-disable-next-line class-methods-use-this
  private HandleError(uri: string, response: AxiosResponse<any>) {
    if (isDefinedAndNotNull(response)) {
      ThrowException({
        statusCode: response.status,
        statusText: response.statusText,
        headers: response.headers,
        data: response.data,
      });
    } else {
      ThrowNetworkConnectionException(uri);
    }
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
    }

    return config;
  }

  // eslint-disable-next-line class-methods-use-this
  private ProcessResponse(axiosResponse: AxiosResponse): RestClientResponse {
    return {
      statusCode: axiosResponse.status,
      statusText: axiosResponse.statusText,
      headers: axiosResponse.headers,
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
      if (this.IsAxiosError(error)) {
        this.HandleError(uri, error.response);
      } else {
        throw error;
      }
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
      if (this.IsAxiosError(error)) {
        this.HandleError(uri, error.response);
      } else {
        throw error;
      }
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
      if (this.IsAxiosError(error)) {
        this.HandleError(uri, error.response);
      } else {
        throw error;
      }
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
      if (this.IsAxiosError(error)) {
        this.HandleError(uri, error.response);
      } else {
        throw error;
      }
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
      if (this.IsAxiosError(error)) {
        this.HandleError(uri, error.response);
      } else {
        throw error;
      }
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
      if (this.IsAxiosError(error)) {
        this.HandleError(uri, error.response);
      } else {
        throw error;
      }
    }
  }
}
