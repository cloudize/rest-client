import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error406NotAcceptable extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
