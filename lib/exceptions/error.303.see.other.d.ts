import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error303SeeOther extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
