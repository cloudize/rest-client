import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error307TemporaryRedirect extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error307TemporaryRedirect';
  }
}
