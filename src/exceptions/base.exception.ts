export interface RestClientExceptionData {
  statusCode: number,
  statusText?: string,
  headers?: any,
  data?: any,
}

export default class RestClientBaseException extends Error {
  private _response: RestClientExceptionData;

  constructor(response: RestClientExceptionData) {
    super(`${response.statusCode.toString()} ${response.statusText}`);
    this.name = 'RestClientBaseException';
    this._response = response;
  }

  get statusCode(): number {
    return this._response.statusCode;
  }

  get statusText(): string {
    return this._response.statusText;
  }

  get headers(): any {
    return this._response.headers;
  }

  get data(): any {
    return this._response.data;
  }
}
