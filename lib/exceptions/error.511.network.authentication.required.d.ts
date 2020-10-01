import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error511NetworkAuthenticationRequired extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
