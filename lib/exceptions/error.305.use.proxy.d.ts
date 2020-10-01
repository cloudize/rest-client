import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error305UseProxy extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
