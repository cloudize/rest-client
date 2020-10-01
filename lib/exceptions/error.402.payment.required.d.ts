import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error402PaymentRequired extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
