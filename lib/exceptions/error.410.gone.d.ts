import RestClientBaseException, { RestClientExceptionData } from './base.exception';
export default class Error410Gone extends RestClientBaseException {
    constructor(response: RestClientExceptionData);
}
