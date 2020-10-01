import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error431RequestHeaderFieldsTooLarge extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
