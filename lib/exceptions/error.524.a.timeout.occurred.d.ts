import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error524ATimeoutOccurred extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
