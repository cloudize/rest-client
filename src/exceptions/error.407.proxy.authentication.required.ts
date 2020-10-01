import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error407ProxyAuthenticationRequired extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error407ProxyAuthenticationRequired';
  }
}
