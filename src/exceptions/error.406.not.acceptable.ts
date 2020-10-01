import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error406NotAcceptable extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error406NotAcceptable';
  }
}
