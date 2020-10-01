import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error410Gone extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error410Gone';
  }
}
