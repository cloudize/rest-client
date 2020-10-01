"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RestClientBaseException extends Error {
    constructor(response) {
        super(`${response.statusCode.toString()} ${response.statusText}`);
        this.name = 'RestClientBaseException';
        this._response = response;
    }
    get statusCode() {
        return this._response.statusCode;
    }
    get statusText() {
        return this._response.statusText;
    }
    get headers() {
        return this._response.headers;
    }
    get data() {
        return this._response.data;
    }
}
exports.default = RestClientBaseException;
