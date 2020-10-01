import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error404NotFound extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
