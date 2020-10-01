import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error306Unused extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error306Unused';
  }
}
