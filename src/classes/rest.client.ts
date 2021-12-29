import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
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

  // eslint-disable-next-line consistent-return
  async Delete(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    const axiosConfig: AxiosRequestConfig = {
      url: uri,
      method: 'GET',
      headers,
    };

    if (isDefined(options)) {
      if (isDefined(options.queryParams)) axiosConfig.params = options.queryParams;
      if (isDefined(options.maxRedirects)) axiosConfig.maxRedirects = options.maxRedirects;
    }

    try {
      const axiosResponse: AxiosResponse = await axios.delete(uri, axiosConfig);
      return {
        statusCode: axiosResponse.status,
        statusText: axiosResponse.statusText,
        headers: axiosResponse.headers,
        data: axiosResponse.data === '' ? undefined : axiosResponse.data,
      };
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
    const axiosConfig: AxiosRequestConfig = {
      url: uri,
      method: 'GET',
      headers,
    };

    if (isDefined(options)) {
      if (isDefined(options.queryParams)) axiosConfig.params = options.queryParams;
      if (isDefined(options.maxRedirects)) axiosConfig.maxRedirects = options.maxRedirects;
    }

    try {
      const axiosResponse: AxiosResponse = await axios.get(uri, axiosConfig);
      return {
        statusCode: axiosResponse.status,
        statusText: axiosResponse.statusText,
        headers: axiosResponse.headers,
        data: axiosResponse.data === '' ? undefined : axiosResponse.data,
      };
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
    const axiosConfig: AxiosRequestConfig = {
      url: uri,
      method: 'HEAD',
      headers,
    };

    if (isDefined(options)) {
      if (isDefined(options.queryParams)) axiosConfig.params = options.queryParams;
      if (isDefined(options.maxRedirects)) axiosConfig.maxRedirects = options.maxRedirects;
    }

    try {
      const axiosResponse: AxiosResponse = await axios.head(uri, axiosConfig);
      return {
        statusCode: axiosResponse.status,
        statusText: axiosResponse.statusText,
        headers: axiosResponse.headers,
        data: axiosResponse.data === '' ? undefined : axiosResponse.data,
      };
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
    const axiosConfig: AxiosRequestConfig = {
      url: uri,
      method: 'PATCH',
      headers,
    };

    if (isDefined(options)) {
      if (isDefined(options.queryParams)) axiosConfig.params = options.queryParams;
      if (isDefined(options.maxRedirects)) axiosConfig.maxRedirects = options.maxRedirects;
    }

    try {
      const axiosResponse: AxiosResponse = await axios.patch(uri, payload, axiosConfig);
      return {
        statusCode: axiosResponse.status,
        statusText: axiosResponse.statusText,
        headers: axiosResponse.headers,
        data: axiosResponse.data === '' ? undefined : axiosResponse.data,
      };
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
    const axiosConfig: AxiosRequestConfig = {
      url: uri,
      method: 'POST',
      headers,
    };

    if (isDefined(options)) {
      if (isDefined(options.queryParams)) axiosConfig.params = options.queryParams;
      if (isDefined(options.maxRedirects)) axiosConfig.maxRedirects = options.maxRedirects;
    }

    try {
      const axiosResponse: AxiosResponse = await axios.post(uri, payload, axiosConfig);
      return {
        statusCode: axiosResponse.status,
        statusText: axiosResponse.statusText,
        headers: axiosResponse.headers,
        data: axiosResponse.data === '' ? undefined : axiosResponse.data,
      };
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
    const axiosConfig: AxiosRequestConfig = {
      url: uri,
      method: 'PUT',
      headers,
    };

    if (isDefined(options)) {
      if (isDefined(options.queryParams)) axiosConfig.params = options.queryParams;
      if (isDefined(options.maxRedirects)) axiosConfig.maxRedirects = options.maxRedirects;
    }

    try {
      const axiosResponse: AxiosResponse = await axios.put(uri, payload, axiosConfig);
      return {
        statusCode: axiosResponse.status,
        statusText: axiosResponse.statusText,
        headers: axiosResponse.headers,
        data: axiosResponse.data === '' ? undefined : axiosResponse.data,
      };
    } catch (error) {
      if (this.IsAxiosError(error)) {
        this.HandleError(uri, error.response);
      } else {
        throw error;
      }
    }
  }
}
