import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error403Forbidden extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error403Forbidden';
  }
}
