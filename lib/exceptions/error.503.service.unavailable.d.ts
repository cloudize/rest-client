import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error503ServiceUnavailable extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
