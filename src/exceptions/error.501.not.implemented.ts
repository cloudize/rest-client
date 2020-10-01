import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error501NotImplemented extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error501NotImplemented';
  }
}
