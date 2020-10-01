import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error401Unauthorized extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error401Unauthorized';
  }
}
