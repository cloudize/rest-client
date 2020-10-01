import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error504GatewayTimeout extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error504GatewayTimeout';
  }
}
