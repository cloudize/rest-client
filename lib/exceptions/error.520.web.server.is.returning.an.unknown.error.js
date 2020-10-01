"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_exception_1 = __importDefault(require("./base.exception"));
class Error520WebServerIsReturningAnUnknownError extends base_exception_1.default {
    constructor(response) {
        super(response);
        this.name = 'Error520WebServerIsReturningAnUnknownError';
    }
}
exports.default = Error520WebServerIsReturningAnUnknownError;
