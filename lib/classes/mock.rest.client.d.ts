import { IMockRestClient, RestClientBaseException, RestClientOptions, RestClientResponse } from '..';
export default class MockRestClient implements IMockRestClient {
    private _responseQueue;
    constructor();
    mockResolve(value: RestClientResponse): this;
    mockReject(value: RestClientBaseException): this;
    delete(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    get(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    head(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    patch(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    post(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    put(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse>;
    reset(): void;
}
