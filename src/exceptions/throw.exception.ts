import { RestClientExceptionData } from './base.exception';
import CreateException from './create.exception';

export default function ThrowException(exceptionData: RestClientExceptionData) {
  throw CreateException(exceptionData);
}
