import { AxiosError, AxiosResponse } from 'axios';
import { IRestClient, RestClientOptions, RestClientResponse } from '..';
export default class RestClient implements IRestClient {
    handleError(uri: string, response: AxiosResponse<any>): void;
    isAxiosError(error: any): error is AxiosError;
    delete(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    get(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    head(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    patch(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    post(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    put(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
}
