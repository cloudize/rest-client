import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error412PreconditionFailed extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
