export interface RestClientExceptionData {
    statusCode: number;
    statusText?: string;
    headers?: any;
    data?: any;
}
export default class RestClientBaseException extends Error {
    private _response;
    constructor(response: RestClientExceptionData);
    get statusCode(): number;
    get statusText(): string;
    get headers(): any;
    get data(): any;
}
