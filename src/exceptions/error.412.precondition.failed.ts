import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error412PreconditionFailed extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error412PreconditionFailed';
  }
}
