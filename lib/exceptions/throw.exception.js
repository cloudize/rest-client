"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_301_moved_permanently_1 = __importDefault(require("./error.301.moved.permanently"));
const error_302_found_1 = __importDefault(require("./error.302.found"));
const error_303_see_other_1 = __importDefault(require("./error.303.see.other"));
const error_304_not_modified_1 = __importDefault(require("./error.304.not.modified"));
const error_305_use_proxy_1 = __importDefault(require("./error.305.use.proxy"));
const error_306_unused_1 = __importDefault(require("./error.306.unused"));
const error_307_temporary_redirect_1 = __importDefault(require("./error.307.temporary.redirect"));
const error_308_permanent_redirect_1 = __importDefault(require("./error.308.permanent.redirect"));
const error_400_bad_request_1 = __importDefault(require("./error.400.bad.request"));
const error_401_unauthorized_1 = __importDefault(require("./error.401.unauthorized"));
const error_402_payment_required_1 = __importDefault(require("./error.402.payment.required"));
const error_403_forbidden_1 = __importDefault(require("./error.403.forbidden"));
const error_404_not_found_1 = __importDefault(require("./error.404.not.found"));
const error_405_method_not_allowed_1 = __importDefault(require("./error.405.method.not.allowed"));
const error_406_not_acceptable_1 = __importDefault(require("./error.406.not.acceptable"));
const error_407_proxy_authentication_required_1 = __importDefault(require("./error.407.proxy.authentication.required"));
const error_408_request_timeout_1 = __importDefault(require("./error.408.request.timeout"));
const error_409_conflict_1 = __importDefault(require("./error.409.conflict"));
const error_410_gone_1 = __importDefault(require("./error.410.gone"));
const error_411_length_required_1 = __importDefault(require("./error.411.length.required"));
const error_412_precondition_failed_1 = __importDefault(require("./error.412.precondition.failed"));
const error_413_request_entity_too_large_1 = __importDefault(require("./error.413.request.entity.too.large"));
const error_414_request_uri_too_long_1 = __importDefault(require("./error.414.request.uri.too.long"));
const error_415_unsupported_media_type_1 = __importDefault(require("./error.415.unsupported.media.type"));
const error_416_requested_range_not_satisfiable_1 = __importDefault(require("./error.416.requested.range.not.satisfiable"));
const error_417_expectation_failed_1 = __importDefault(require("./error.417.expectation.failed"));
const error_418_im_a_teapot_1 = __importDefault(require("./error.418.im.a.teapot"));
const error_421_misdirected_request_1 = __importDefault(require("./error.421.misdirected.request"));
const error_422_unprocessable_entity_1 = __importDefault(require("./error.422.unprocessable.entity"));
const error_428_precondition_required_1 = __importDefault(require("./error.428.precondition.required"));
const error_429_too_many_requests_1 = __importDefault(require("./error.429.too.many.requests"));
const error_431_request_headers_fields_too_large_1 = __importDefault(require("./error.431.request.headers.fields.too.large"));
const error_451_unavailable_for_legal_reasons_1 = __importDefault(require("./error.451.unavailable.for.legal.reasons"));
const error_500_internal_server_error_1 = __importDefault(require("./error.500.internal.server.error"));
const error_501_not_implemented_1 = __importDefault(require("./error.501.not.implemented"));
const error_502_bad_gateway_1 = __importDefault(require("./error.502.bad.gateway"));
const error_503_service_unavailable_1 = __importDefault(require("./error.503.service.unavailable"));
const error_504_gateway_timeout_1 = __importDefault(require("./error.504.gateway.timeout"));
const error_505_http_version_not_supported_1 = __importDefault(require("./error.505.http.version.not.supported"));
const error_511_network_authentication_required_1 = __importDefault(require("./error.511.network.authentication.required"));
const error_520_web_server_is_returning_an_unknown_error_1 = __importDefault(require("./error.520.web.server.is.returning.an.unknown.error"));
const error_522_connection_timed_out_1 = __importDefault(require("./error.522.connection.timed.out"));
const error_524_a_timeout_occurred_1 = __importDefault(require("./error.524.a.timeout.occurred"));
function ThrowException(statusCode, exceptionData) {
    switch (statusCode) {
        case 301:
            throw new error_301_moved_permanently_1.default(exceptionData);
        case 302:
            throw new error_302_found_1.default(exceptionData);
        case 303:
            throw new error_303_see_other_1.default(exceptionData);
        case 304:
            throw new error_304_not_modified_1.default(exceptionData);
        case 305:
            throw new error_305_use_proxy_1.default(exceptionData);
        case 306:
            throw new error_306_unused_1.default(exceptionData);
        case 307:
            throw new error_307_temporary_redirect_1.default(exceptionData);
        case 308:
            throw new error_308_permanent_redirect_1.default(exceptionData);
        case 400:
            throw new error_400_bad_request_1.default(exceptionData);
        case 401:
            throw new error_401_unauthorized_1.default(exceptionData);
        case 402:
            throw new error_402_payment_required_1.default(exceptionData);
        case 403:
            throw new error_403_forbidden_1.default(exceptionData);
        case 404:
            throw new error_404_not_found_1.default(exceptionData);
        case 405:
            throw new error_405_method_not_allowed_1.default(exceptionData);
        case 406:
            throw new error_406_not_acceptable_1.default(exceptionData);
        case 407:
            throw new error_407_proxy_authentication_required_1.default(exceptionData);
        case 408:
            throw new error_408_request_timeout_1.default(exceptionData);
        case 409:
            throw new error_409_conflict_1.default(exceptionData);
        case 410:
            throw new error_410_gone_1.default(exceptionData);
        case 411:
            throw new error_411_length_required_1.default(exceptionData);
        case 412:
            throw new error_412_precondition_failed_1.default(exceptionData);
        case 413:
            throw new error_413_request_entity_too_large_1.default(exceptionData);
        case 414:
            throw new error_414_request_uri_too_long_1.default(exceptionData);
        case 415:
            throw new error_415_unsupported_media_type_1.default(exceptionData);
        case 416:
            throw new error_416_requested_range_not_satisfiable_1.default(exceptionData);
        case 417:
            throw new error_417_expectation_failed_1.default(exceptionData);
        case 418:
            throw new error_418_im_a_teapot_1.default(exceptionData);
        case 421:
            throw new error_421_misdirected_request_1.default(exceptionData);
        case 422:
            throw new error_422_unprocessable_entity_1.default(exceptionData);
        case 428:
            throw new error_428_precondition_required_1.default(exceptionData);
        case 429:
            throw new error_429_too_many_requests_1.default(exceptionData);
        case 431:
            throw new error_431_request_headers_fields_too_large_1.default(exceptionData);
        case 451:
            throw new error_451_unavailable_for_legal_reasons_1.default(exceptionData);
        case 500:
            throw new error_500_internal_server_error_1.default(exceptionData);
        case 501:
            throw new error_501_not_implemented_1.default(exceptionData);
        case 502:
            throw new error_502_bad_gateway_1.default(exceptionData);
        case 503:
            throw new error_503_service_unavailable_1.default(exceptionData);
        case 504:
            throw new error_504_gateway_timeout_1.default(exceptionData);
        case 505:
            throw new error_505_http_version_not_supported_1.default(exceptionData);
        case 511:
            throw new error_511_network_authentication_required_1.default(exceptionData);
        case 522:
            throw new error_522_connection_timed_out_1.default(exceptionData);
        case 524:
            throw new error_524_a_timeout_occurred_1.default(exceptionData);
        default:
            throw new error_520_web_server_is_returning_an_unknown_error_1.default(exceptionData);
    }
}
exports.default = ThrowException;
