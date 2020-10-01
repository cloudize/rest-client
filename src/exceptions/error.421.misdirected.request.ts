import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error421MisdirectedRequest extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error421MisdirectedRequest';
  }
}
