export type RestClientOptions = {
  queryParams?: any;
  maxRedirects?: number;
}

export type RestClientResponse = {
  statusCode: number,
  statusText?: string,
  headers?: object,
  data?: any
}

export interface IRestClient {
  head(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  get(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  post(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  put(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  patch(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  delete(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
}

export interface IMockRestClient extends IRestClient {
}
