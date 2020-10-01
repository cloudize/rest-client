import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error416RequestedRangeNotSatisfiable extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error416RequestedRangeNotSatisfiable';
  }
}
