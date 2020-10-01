import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error308PermanentRedirect extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error308PermanentRedirect';
  }
}
