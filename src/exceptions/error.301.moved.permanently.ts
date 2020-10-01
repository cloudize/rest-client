import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error301MovedPermanently extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error301MovedPermanently';
  }
}
