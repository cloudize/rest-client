export type RestClientOptions = {
  queryParams?: any;
  maxRedirects?: number;
  timeoutMs?: number;
}

export type RestClientResponseHeaders = {
  [index: string]: string;
}

export type RestClientResponse = {
  statusCode: number,
  statusText?: string,
  headers?: RestClientResponseHeaders,
  data?: any
}

export interface IRestClient {
  Head(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  Get(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  Post(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  Put(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  Patch(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
  Delete(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
}

export interface IMockRestClient extends IRestClient {
}
