import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error413RequestEntityTooLarge extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error413RequestEntityTooLarge';
  }
}
