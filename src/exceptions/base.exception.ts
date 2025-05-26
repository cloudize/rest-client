import {
  hasProperty, isArrayOfObjects, isDefined, isDefinedAndNotNull, isObject, isString, isTrue,
} from '@apigames/json';
import JsonAPIError from './jsonapi.error';

export interface RestClientExceptionData {
  statusCode: number,
  statusText?: string,
  headers?: any,
  data?: any,
}

export default class RestClientBaseException extends Error {
  private _errors: Array<JsonAPIError> = [];

  private _response: RestClientExceptionData;

  constructor(response: RestClientExceptionData) {
    super(`${response.statusCode.toString()} ${response.statusText}`);
    this.name = 'RestClientBaseException';
    this._response = response;
    if (this.HasJsonAPIErrors()) this.LoadJsonAPIErrors();
  }

  private HasJsonAPIErrors(): boolean {
    return isTrue(this.isJsonAPIError()) && (isDefined(this._response.data)
        && hasProperty(this._response.data, 'errors') && isArrayOfObjects(this._response.data.errors)
    );
  }

  private LoadJsonAPIErrors() {
    // eslint-disable-next-line no-restricted-syntax
    for (const error of this._response.data.errors) {
      if (hasProperty(error, 'code') && isString(error.code)
          && hasProperty(error, 'title') && isString(error.title)
          && hasProperty(error, 'status') && isString(error.status)) {
        let detail: string;
        if (hasProperty(error, 'detail') && isString(error.detail)) detail = error.detail;

        let source: any;
        if (hasProperty(error, 'source')) source = error.source;

        this._errors.push(new JsonAPIError(error.code, error.title, parseInt(error.status, 10), detail, source));
      }
    }
  }

  private hasJsonAPIContentType(): boolean {
    return !!(isDefinedAndNotNull(this._response.headers)
      && hasProperty(this._response.headers, 'content-type')
      && isString(this._response.headers['content-type'])
      && (this._response.headers['content-type'].includes('application/vnd.api+json')));
  }

  isJsonAPIError(): boolean {
    return isTrue(this.hasJsonAPIContentType()) && isDefinedAndNotNull(this._response.data)
      && hasProperty(this._response.data, 'jsonapi') && isObject(this._response.data.jsonapi)
      && hasProperty(this._response.data.jsonapi, 'version') && isString(this._response.data.jsonapi.version);
  }

  get data(): any {
    return this._response.data;
  }

  get errorCount(): number {
    return this._errors.length;
  }

  get errors(): Array<JsonAPIError> {
    return this._errors;
  }

  get status(): number {
    if (this.errorCount <= 1) return this._response.statusCode;

    let combinedStatusCode = 200;

    // eslint-disable-next-line no-restricted-syntax
    for (const error of this.errors) {
      if (error.status > combinedStatusCode) {
        combinedStatusCode = error.status;
      }
    }

    if ((combinedStatusCode >= 200) && (combinedStatusCode <= 299)) {
      combinedStatusCode = 200;
    } else if ((combinedStatusCode >= 300) && (combinedStatusCode <= 399)) {
      combinedStatusCode = 300;
    } else if ((combinedStatusCode >= 400) && (combinedStatusCode <= 499)) {
      combinedStatusCode = 400;
    } else {
      combinedStatusCode = 500;
    }

    return combinedStatusCode;
  }
}
