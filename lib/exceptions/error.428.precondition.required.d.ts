import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error428PreconditionRequired extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
