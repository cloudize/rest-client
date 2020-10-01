import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error302Found extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error302Found';
  }
}
