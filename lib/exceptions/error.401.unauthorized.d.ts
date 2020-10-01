import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error401Unauthorized extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
