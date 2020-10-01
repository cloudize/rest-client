import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error428PreconditionRequired extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error428PreconditionRequired';
  }
}
