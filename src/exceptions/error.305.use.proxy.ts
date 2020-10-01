import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error305UseProxy extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error305UseProxy';
  }
}
