import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error415UnsupportedMediaType extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
