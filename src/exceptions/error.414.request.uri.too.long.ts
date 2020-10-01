import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error414RequestURITooLong extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error414RequestURITooLong';
  }
}
