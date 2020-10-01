import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { isDefined } from '@apigames/json';
import {
  IRestClient,
  RestClientOptions,
  RestClientResponse,
  ThrowException,
  ThrowNetworkConnectionException,
} from '..';

export default class RestClient implements IRestClient {
  handleError(uri: string, response: AxiosResponse<any>) {
    if (response) {
      ThrowException(response.status, {
        statusCode: response.status, statusText: response.statusText, headers: response.headers, data: response.data,
      });
    } else {
      ThrowNetworkConnectionException(uri);
    }
  }

  isAxiosError(error: any): error is AxiosError {
    return (error as AxiosError).isAxiosError !== undefined;
  }

  async delete(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
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
      if (this.isAxiosError(error)) {
        this.handleError(uri, error.response);
      } else {
        throw error;
      }
    }
  }

  async get(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
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
      if (this.isAxiosError(error)) {
        this.handleError(uri, error.response);
      } else {
        throw error;
      }
    }
  }

  async head(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
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
      if (this.isAxiosError(error)) {
        this.handleError(uri, error.response);
      } else {
        throw error;
      }
    }
  }

  async patch(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
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
      if (this.isAxiosError(error)) {
        this.handleError(uri, error.response);
      } else {
        throw error;
      }
    }
  }

  async post(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
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
      if (this.isAxiosError(error)) {
        this.handleError(uri, error.response);
      } else {
        throw error;
      }
    }
  }

  async put(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
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
      if (this.isAxiosError(error)) {
        this.handleError(uri, error.response);
      } else {
        throw error;
      }
    }
  }
}
