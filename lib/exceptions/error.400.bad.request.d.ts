import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error400BadRequest extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
