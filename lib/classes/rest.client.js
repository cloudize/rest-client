"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const json_1 = require("@apigames/json");
const __1 = require("..");
class RestClient {
    handleError(uri, response) {
        if (response) {
            __1.ThrowException(response.status, {
                statusCode: response.status, statusText: response.statusText, headers: response.headers, data: response.data,
            });
        }
        else {
            __1.ThrowNetworkConnectionException(uri);
        }
    }
    isAxiosError(error) {
        return error.isAxiosError !== undefined;
    }
    delete(uri, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosConfig = {
                url: uri,
                method: 'GET',
                headers,
            };
            if (json_1.isDefined(options)) {
                if (json_1.isDefined(options.queryParams))
                    axiosConfig.params = options.queryParams;
                if (json_1.isDefined(options.maxRedirects))
                    axiosConfig.maxRedirects = options.maxRedirects;
            }
            try {
                const axiosResponse = yield axios_1.default.delete(uri, axiosConfig);
                return {
                    statusCode: axiosResponse.status,
                    statusText: axiosResponse.statusText,
                    headers: axiosResponse.headers,
                    data: axiosResponse.data === '' ? undefined : axiosResponse.data,
                };
            }
            catch (error) {
                if (this.isAxiosError(error)) {
                    this.handleError(uri, error.response);
                }
                else {
                    throw error;
                }
            }
        });
    }
    get(uri, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosConfig = {
                url: uri,
                method: 'GET',
                headers,
            };
            if (json_1.isDefined(options)) {
                if (json_1.isDefined(options.queryParams))
                    axiosConfig.params = options.queryParams;
                if (json_1.isDefined(options.maxRedirects))
                    axiosConfig.maxRedirects = options.maxRedirects;
            }
            try {
                const axiosResponse = yield axios_1.default.get(uri, axiosConfig);
                return {
                    statusCode: axiosResponse.status,
                    statusText: axiosResponse.statusText,
                    headers: axiosResponse.headers,
                    data: axiosResponse.data === '' ? undefined : axiosResponse.data,
                };
            }
            catch (error) {
                if (this.isAxiosError(error)) {
                    this.handleError(uri, error.response);
                }
                else {
                    throw error;
                }
            }
        });
    }
    head(uri, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosConfig = {
                url: uri,
                method: 'HEAD',
                headers,
            };
            if (json_1.isDefined(options)) {
                if (json_1.isDefined(options.queryParams))
                    axiosConfig.params = options.queryParams;
                if (json_1.isDefined(options.maxRedirects))
                    axiosConfig.maxRedirects = options.maxRedirects;
            }
            try {
                const axiosResponse = yield axios_1.default.head(uri, axiosConfig);
                return {
                    statusCode: axiosResponse.status,
                    statusText: axiosResponse.statusText,
                    headers: axiosResponse.headers,
                    data: axiosResponse.data === '' ? undefined : axiosResponse.data,
                };
            }
            catch (error) {
                if (this.isAxiosError(error)) {
                    this.handleError(uri, error.response);
                }
                else {
                    throw error;
                }
            }
        });
    }
    patch(uri, payload, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosConfig = {
                url: uri,
                method: 'PATCH',
                headers,
            };
            if (json_1.isDefined(options)) {
                if (json_1.isDefined(options.queryParams))
                    axiosConfig.params = options.queryParams;
                if (json_1.isDefined(options.maxRedirects))
                    axiosConfig.maxRedirects = options.maxRedirects;
            }
            try {
                const axiosResponse = yield axios_1.default.patch(uri, payload, axiosConfig);
                return {
                    statusCode: axiosResponse.status,
                    statusText: axiosResponse.statusText,
                    headers: axiosResponse.headers,
                    data: axiosResponse.data === '' ? undefined : axiosResponse.data,
                };
            }
            catch (error) {
                if (this.isAxiosError(error)) {
                    this.handleError(uri, error.response);
                }
                else {
                    throw error;
                }
            }
        });
    }
    post(uri, payload, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosConfig = {
                url: uri,
                method: 'POST',
                headers,
            };
            if (json_1.isDefined(options)) {
                if (json_1.isDefined(options.queryParams))
                    axiosConfig.params = options.queryParams;
                if (json_1.isDefined(options.maxRedirects))
                    axiosConfig.maxRedirects = options.maxRedirects;
            }
            try {
                const axiosResponse = yield axios_1.default.post(uri, payload, axiosConfig);
                return {
                    statusCode: axiosResponse.status,
                    statusText: axiosResponse.statusText,
                    headers: axiosResponse.headers,
                    data: axiosResponse.data === '' ? undefined : axiosResponse.data,
                };
            }
            catch (error) {
                if (this.isAxiosError(error)) {
                    this.handleError(uri, error.response);
                }
                else {
                    throw error;
                }
            }
        });
    }
    put(uri, payload, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosConfig = {
                url: uri,
                method: 'PUT',
                headers,
            };
            if (json_1.isDefined(options)) {
                if (json_1.isDefined(options.queryParams))
                    axiosConfig.params = options.queryParams;
                if (json_1.isDefined(options.maxRedirects))
                    axiosConfig.maxRedirects = options.maxRedirects;
            }
            try {
                const axiosResponse = yield axios_1.default.put(uri, payload, axiosConfig);
                return {
                    statusCode: axiosResponse.status,
                    statusText: axiosResponse.statusText,
                    headers: axiosResponse.headers,
                    data: axiosResponse.data === '' ? undefined : axiosResponse.data,
                };
            }
            catch (error) {
                if (this.isAxiosError(error)) {
                    this.handleError(uri, error.response);
                }
                else {
                    throw error;
                }
            }
        });
    }
}
exports.default = RestClient;
