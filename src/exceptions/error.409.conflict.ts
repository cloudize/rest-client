import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error409Conflict extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error409Conflict';
  }
}
