import RestClientBaseException, { RestClientExceptionData } from './base.exception';
import Error301MovedPermanently from './error.301.moved.permanently';
import Error302Found from './error.302.found';
import Error303SeeOther from './error.303.see.other';
import Error304NotModified from './error.304.not.modified';
import Error305UseProxy from './error.305.use.proxy';
import Error306Unused from './error.306.unused';
import Error307TemporaryRedirect from './error.307.temporary.redirect';
import Error308PermanentRedirect from './error.308.permanent.redirect';
import Error400BadRequest from './error.400.bad.request';
import Error401Unauthorized from './error.401.unauthorized';
import Error402PaymentRequired from './error.402.payment.required';
import Error403Forbidden from './error.403.forbidden';
import Error404NotFound from './error.404.not.found';
import Error405MethodNotAllowed from './error.405.method.not.allowed';
import Error406NotAcceptable from './error.406.not.acceptable';
import Error407ProxyAuthenticationRequired from './error.407.proxy.authentication.required';
import Error408RequestTimeout from './error.408.request.timeout';
import Error409Conflict from './error.409.conflict';
import Error410Gone from './error.410.gone';
import Error411LengthRequired from './error.411.length.required';
import Error412PreconditionFailed from './error.412.precondition.failed';
import Error413RequestEntityTooLarge from './error.413.request.entity.too.large';
import Error414RequestURITooLong from './error.414.request.uri.too.long';
import Error415UnsupportedMediaType from './error.415.unsupported.media.type';
import Error416RequestedRangeNotSatisfiable from './error.416.requested.range.not.satisfiable';
import Error417ExpectationFailed from './error.417.expectation.failed';
import Error418ImaTeapot from './error.418.im.a.teapot';
import Error421MisdirectedRequest from './error.421.misdirected.request';
import Error422UnprocessableEntity from './error.422.unprocessable.entity';
import Error428PreconditionRequired from './error.428.precondition.required';
import Error429TooManyRequests from './error.429.too.many.requests';
import Error431RequestHeaderFieldsTooLarge from './error.431.request.headers.fields.too.large';
import Error451UnavailableForLegalReasons from './error.451.unavailable.for.legal.reasons';
import Error500InternalServerError from './error.500.internal.server.error';
import Error501NotImplemented from './error.501.not.implemented';
import Error502BadGateway from './error.502.bad.gateway';
import Error503ServiceUnavailable from './error.503.service.unavailable';
import Error504GatewayTimeout from './error.504.gateway.timeout';
import Error505HTTPVersionNotSupported from './error.505.http.version.not.supported';
import Error511NetworkAuthenticationRequired from './error.511.network.authentication.required';
import Error522ConnectionTimedOut from './error.522.connection.timed.out';
import Error524ATimeoutOccurred from './error.524.a.timeout.occurred';
import Error520WebServerIsReturningAnUnknownError from './error.520.web.server.is.returning.an.unknown.error';

export default function CreateException(exceptionData: RestClientExceptionData): RestClientBaseException {
  switch (exceptionData.statusCode) {
    case 301:
      return new Error301MovedPermanently(exceptionData);
    case 302:
      return new Error302Found(exceptionData);
    case 303:
      return new Error303SeeOther(exceptionData);
    case 304:
      return new Error304NotModified(exceptionData);
    case 305:
      return new Error305UseProxy(exceptionData);
    case 306:
      return new Error306Unused(exceptionData);
    case 307:
      return new Error307TemporaryRedirect(exceptionData);
    case 308:
      return new Error308PermanentRedirect(exceptionData);
    case 400:
      return new Error400BadRequest(exceptionData);
    case 401:
      return new Error401Unauthorized(exceptionData);
    case 402:
      return new Error402PaymentRequired(exceptionData);
    case 403:
      return new Error403Forbidden(exceptionData);
    case 404:
      return new Error404NotFound(exceptionData);
    case 405:
      return new Error405MethodNotAllowed(exceptionData);
    case 406:
      return new Error406NotAcceptable(exceptionData);
    case 407:
      return new Error407ProxyAuthenticationRequired(exceptionData);
    case 408:
      return new Error408RequestTimeout(exceptionData);
    case 409:
      return new Error409Conflict(exceptionData);
    case 410:
      return new Error410Gone(exceptionData);
    case 411:
      return new Error411LengthRequired(exceptionData);
    case 412:
      return new Error412PreconditionFailed(exceptionData);
    case 413:
      return new Error413RequestEntityTooLarge(exceptionData);
    case 414:
      return new Error414RequestURITooLong(exceptionData);
    case 415:
      return new Error415UnsupportedMediaType(exceptionData);
    case 416:
      return new Error416RequestedRangeNotSatisfiable(exceptionData);
    case 417:
      return new Error417ExpectationFailed(exceptionData);
    case 418:
      return new Error418ImaTeapot(exceptionData);
    case 421:
      return new Error421MisdirectedRequest(exceptionData);
    case 422:
      return new Error422UnprocessableEntity(exceptionData);
    case 428:
      return new Error428PreconditionRequired(exceptionData);
    case 429:
      return new Error429TooManyRequests(exceptionData);
    case 431:
      return new Error431RequestHeaderFieldsTooLarge(exceptionData);
    case 451:
      return new Error451UnavailableForLegalReasons(exceptionData);
    case 500:
      return new Error500InternalServerError(exceptionData);
    case 501:
      return new Error501NotImplemented(exceptionData);
    case 502:
      return new Error502BadGateway(exceptionData);
    case 503:
      return new Error503ServiceUnavailable(exceptionData);
    case 504:
      return new Error504GatewayTimeout(exceptionData);
    case 505:
      return new Error505HTTPVersionNotSupported(exceptionData);
    case 511:
      return new Error511NetworkAuthenticationRequired(exceptionData);
    case 522:
      return new Error522ConnectionTimedOut(exceptionData);
    case 524:
      return new Error524ATimeoutOccurred(exceptionData);
    default:
      return new Error520WebServerIsReturningAnUnknownError(exceptionData);
  }
}
