import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error520WebServerIsReturningAnUnknownError extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
