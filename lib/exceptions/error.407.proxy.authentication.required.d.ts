import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error407ProxyAuthenticationRequired extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
