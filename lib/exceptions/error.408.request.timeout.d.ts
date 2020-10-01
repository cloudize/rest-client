import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error408RequestTimeout extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
