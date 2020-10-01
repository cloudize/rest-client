import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error301MovedPermanently extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
