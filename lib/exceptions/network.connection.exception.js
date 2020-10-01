"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NetworkConnectionException extends Error {
    constructor(uri) {
        super(`Failed to connect to ${uri}`);
        this.name = 'RestClientNetworkConnectionException';
    }
}
exports.default = NetworkConnectionException;
