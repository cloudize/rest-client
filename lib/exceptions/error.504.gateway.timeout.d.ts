import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error504GatewayTimeout extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
