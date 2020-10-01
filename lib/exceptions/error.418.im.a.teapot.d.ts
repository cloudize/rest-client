import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error418ImaTeapot extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
