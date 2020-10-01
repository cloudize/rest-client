import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error304NotModified extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
