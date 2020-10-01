import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error522ConnectionTimedOut extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error522ConnectionTimedOut';
  }
}
