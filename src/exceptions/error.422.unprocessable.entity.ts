import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error422UnprocessableEntity extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error422UnprocessableEntity';
  }
}
