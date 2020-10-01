import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error411LengthRequired extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
