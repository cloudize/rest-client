import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error502BadGateway extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error502BadGateway';
  }
}
