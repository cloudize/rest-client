import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error408RequestTimeout extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error408RequestTimeout';
  }
}
