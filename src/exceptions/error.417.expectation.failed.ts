import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error417ExpectationFailed extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error417ExpectationFailed';
  }
}
