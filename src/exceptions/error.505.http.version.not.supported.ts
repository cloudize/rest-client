import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error505HTTPVersionNotSupported extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error505HTTPVersionNotSupported';
  }
}
