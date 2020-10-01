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
Object.defineProperty(exports, "__esModule", { value: true });
var MockResponseType;
(function (MockResponseType) {
    MockResponseType[MockResponseType["Resolve"] = 0] = "Resolve";
    MockResponseType[MockResponseType["Reject"] = 1] = "Reject";
})(MockResponseType || (MockResponseType = {}));
class MockRestClient {
    constructor() {
        this._responseQueue = [];
    }
    mockResolve(value) {
        const params = {
            action: MockResponseType.Resolve,
            value,
        };
        this._responseQueue.push(params);
        return this;
    }
    mockReject(value) {
        const params = {
            action: MockResponseType.Reject,
            value,
        };
        this._responseQueue.push(params);
        return this;
    }
    delete(uri, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._responseQueue.length > 0) {
                const actionParams = this._responseQueue.shift();
                if (actionParams.action === MockResponseType.Resolve) {
                    return actionParams.value;
                }
                throw actionParams.value;
            }
            else {
                throw new Error('Please mock the delete() response document using mockResolve() or mockReject().');
            }
        });
    }
    get(uri, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._responseQueue.length > 0) {
                const actionParams = this._responseQueue.shift();
                if (actionParams.action === MockResponseType.Resolve) {
                    return actionParams.value;
                }
                throw actionParams.value;
            }
            else {
                throw new Error('Please mock the get() response document using mockResolve() or mockReject().');
            }
        });
    }
    head(uri, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._responseQueue.length > 0) {
                const actionParams = this._responseQueue.shift();
                if (actionParams.action === MockResponseType.Resolve) {
                    return actionParams.value;
                }
                throw actionParams.value;
            }
            else {
                throw new Error('Please mock the head() response document using mockResolve() or mockReject().');
            }
        });
    }
    patch(uri, payload, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._responseQueue.length > 0) {
                const actionParams = this._responseQueue.shift();
                if (actionParams.action === MockResponseType.Resolve) {
                    return actionParams.value;
                }
                throw actionParams.value;
            }
            else {
                throw new Error('Please mock the patch() response document using mockResolve() or mockReject().');
            }
        });
    }
    post(uri, payload, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._responseQueue.length > 0) {
                const actionParams = this._responseQueue.shift();
                if (actionParams.action === MockResponseType.Resolve) {
                    return actionParams.value;
                }
                throw actionParams.value;
            }
            else {
                throw new Error('Please mock the post() response document using mockResolve() or mockReject().');
            }
        });
    }
    put(uri, payload, headers, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._responseQueue.length > 0) {
                const actionParams = this._responseQueue.shift();
                if (actionParams.action === MockResponseType.Resolve) {
                    return actionParams.value;
                }
                throw actionParams.value;
            }
            else {
                throw new Error('Please mock the put() response document using mockResolve() or mockReject().');
            }
        });
    }
    reset() {
        this._responseQueue = [];
    }
}
exports.default = MockRestClient;
