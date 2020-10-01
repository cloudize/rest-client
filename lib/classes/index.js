"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestClient = exports.MockRestClient = void 0;
var mock_rest_client_1 = require("./mock.rest.client");
Object.defineProperty(exports, "MockRestClient", { enumerable: true, get: function () { return __importDefault(mock_rest_client_1).default; } });
var rest_client_1 = require("./rest.client");
Object.defineProperty(exports, "RestClient", { enumerable: true, get: function () { return __importDefault(rest_client_1).default; } });
