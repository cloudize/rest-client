import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error417ExpectationFailed extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
