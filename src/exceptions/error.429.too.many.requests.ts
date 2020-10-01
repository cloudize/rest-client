import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error429TooManyRequests extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error429TooManyRequests';
  }
}
