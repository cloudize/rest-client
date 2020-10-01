import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error405MethodNotAllowed extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error405MethodNotAllowed';
  }
}
