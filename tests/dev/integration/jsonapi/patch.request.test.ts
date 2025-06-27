import {isEmpty, isString} from '@apigames/json';
import {
  RestClient,
  Error301MovedPermanently,
  Error302Found,
  Error303SeeOther,
  Error304NotModified,
  Error305UseProxy,
  Error306Unused,
  Error307TemporaryRedirect,
  Error308PermanentRedirect,
  Error400BadRequest,
  Error401Unauthorized,
  Error402PaymentRequired,
  Error403Forbidden,
  Error404NotFound,
  Error405MethodNotAllowed,
  Error406NotAcceptable,
  Error407ProxyAuthenticationRequired,
  Error408RequestTimeout,
  Error409Conflict,
  Error410Gone,
  Error411LengthRequired,
  Error412PreconditionFailed,
  Error413RequestEntityTooLarge,
  Error414RequestURITooLong,
  Error415UnsupportedMediaType,
  Error416RequestedRangeNotSatisfiable,
  Error417ExpectationFailed,
  Error418ImaTeapot,
  Error421MisdirectedRequest,
  Error422UnprocessableEntity,
  Error428PreconditionRequired,
  Error429TooManyRequests,
  Error431RequestHeaderFieldsTooLarge,
  Error451UnavailableForLegalReasons,
  Error500InternalServerError,
  Error501NotImplemented,
  Error502BadGateway,
  Error503ServiceUnavailable,
  Error504GatewayTimeout,
  Error505HTTPVersionNotSupported,
  Error511NetworkAuthenticationRequired,
  Error520WebServerIsReturningAnUnknownError,
  Error522ConnectionTimedOut,
  Error524ATimeoutOccurred,
  NetworkConnectionException,
} from '../../../../src';

const payload = 'Sample payload.';

const hostName = 'http://127.0.0.1:3000';

function ExpectedPayload(status: number | string): any {
  return {
    jsonapi: { version: '1.0' },
    data: {
      type: 'ResourceType',
      id: 'abc123',
      attributes: {
        name: 'value',
      },
    },
    links: {
      self: `${hostName}/${isString(status) ? status : status.toString()}`,
    },
  };
}

describe('Request should succeed when performing a PATCH on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/200`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('200 status code from a slow endpoint when the timeout option allows', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(
      `${hostName}/slow`,
      payload,
      { accept: 'application/vnd.api+json' },
      { timeoutMs: 5000 },
    );
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload('slow'));
  });

  it('201 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/201`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(201);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(201));
  });

  it('202 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/202`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(202);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(202));
  });

  it('203 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/203`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(203);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(203));
  });

  it('206 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/206`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(206);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(206));
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/301`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/302`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/303`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/305`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/307`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Patch(`${hostName}/308`, payload, { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toEqual(ExpectedPayload(200));
  });
});

describe('Request should fail and throw when performing a PATCH on an endpoint that returns a', () => {
  it('200 status code from a slow endpoint when the timeout is set to a low value', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(
        `${hostName}/slow`,
        payload,
        { accept: 'application/vnd.api+json' },
        { maxRedirects: 0, timeoutMs: 1000 },
      );
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(NetworkConnectionException);
    }
  });

  it('299 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/299`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(520);
      expect((error as Error520WebServerIsReturningAnUnknownError).errorCount).toBe(0);
    }
  });

  it('301 status code with no redirect', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/301`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      const errorCode = 301;
      expect((error as Error301MovedPermanently).status).toBe(300);
      expect((error as Error301MovedPermanently).errorCount).toBe(2);
      expect((error as Error301MovedPermanently).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error301MovedPermanently).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error301MovedPermanently).errors[0].status).toBe(errorCode);
      expect((error as Error301MovedPermanently).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error301MovedPermanently).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error301MovedPermanently).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/302`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      const errorCode = 302;
      expect((error as Error302Found).status).toBe(300);
      expect((error as Error302Found).errorCount).toBe(2);
      expect((error as Error302Found).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error302Found).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error302Found).errors[0].status).toBe(errorCode);
      expect((error as Error302Found).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error302Found).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error302Found).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/303`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      const errorCode = 303;
      expect((error as Error303SeeOther).status).toBe(300);
      expect((error as Error303SeeOther).errorCount).toBe(2);
      expect((error as Error303SeeOther).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error303SeeOther).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error303SeeOther).errors[0].status).toBe(errorCode);
      expect((error as Error303SeeOther).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error303SeeOther).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error303SeeOther).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/304`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect((error as Error304NotModified).status).toBe(304);
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/305`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      const errorCode = 305;
      expect((error as Error305UseProxy).status).toBe(300);
      expect((error as Error305UseProxy).errorCount).toBe(2);
      expect((error as Error305UseProxy).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error305UseProxy).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error305UseProxy).errors[0].status).toBe(errorCode);
      expect((error as Error305UseProxy).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error305UseProxy).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error305UseProxy).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/306`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      const errorCode = 306;
      expect((error as Error306Unused).status).toBe(300);
      expect((error as Error306Unused).errorCount).toBe(2);
      expect((error as Error306Unused).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error306Unused).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error306Unused).errors[0].status).toBe(errorCode);
      expect((error as Error306Unused).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error306Unused).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error306Unused).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/307`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      const errorCode = 307;
      expect((error as Error307TemporaryRedirect).status).toBe(300);
      expect((error as Error307TemporaryRedirect).errorCount).toBe(2);
      expect((error as Error307TemporaryRedirect).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error307TemporaryRedirect).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error307TemporaryRedirect).errors[0].status).toBe(errorCode);
      expect((error as Error307TemporaryRedirect).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error307TemporaryRedirect).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error307TemporaryRedirect).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/308`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      const errorCode = 308;
      expect((error as Error308PermanentRedirect).status).toBe(300);
      expect((error as Error308PermanentRedirect).errorCount).toBe(2);
      expect((error as Error308PermanentRedirect).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error308PermanentRedirect).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error308PermanentRedirect).errors[0].status).toBe(errorCode);
      expect((error as Error308PermanentRedirect).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error308PermanentRedirect).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error308PermanentRedirect).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/399`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(520);
      expect((error as Error520WebServerIsReturningAnUnknownError).errorCount).toBe(0);
    }
  });

  it('400 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/400`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      const errorCode = 400;
      expect((error as Error400BadRequest).status).toBe(400);
      expect((error as Error400BadRequest).errorCount).toBe(2);
      expect((error as Error400BadRequest).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error400BadRequest).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error400BadRequest).errors[0].status).toBe(errorCode);
      expect((error as Error400BadRequest).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error400BadRequest).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error400BadRequest).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/401`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      const errorCode = 401;
      expect((error as Error401Unauthorized).status).toBe(400);
      expect((error as Error401Unauthorized).errorCount).toBe(2);
      expect((error as Error401Unauthorized).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error401Unauthorized).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error401Unauthorized).errors[0].status).toBe(errorCode);
      expect((error as Error401Unauthorized).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error401Unauthorized).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error401Unauthorized).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/402`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      const errorCode = 402;
      expect((error as Error402PaymentRequired).status).toBe(400);
      expect((error as Error402PaymentRequired).errorCount).toBe(2);
      expect((error as Error402PaymentRequired).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error402PaymentRequired).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error402PaymentRequired).errors[0].status).toBe(errorCode);
      expect((error as Error402PaymentRequired).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error402PaymentRequired).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error402PaymentRequired).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/403`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      const errorCode = 403;
      expect((error as Error403Forbidden).status).toBe(400);
      expect((error as Error403Forbidden).errorCount).toBe(2);
      expect((error as Error403Forbidden).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error403Forbidden).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error403Forbidden).errors[0].status).toBe(errorCode);
      expect((error as Error403Forbidden).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error403Forbidden).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error403Forbidden).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/404`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      const errorCode = 404;
      expect((error as Error404NotFound).status).toBe(400);
      expect((error as Error404NotFound).errorCount).toBe(2);
      expect((error as Error404NotFound).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error404NotFound).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error404NotFound).errors[0].status).toBe(errorCode);
      expect((error as Error404NotFound).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error404NotFound).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error404NotFound).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/405`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      const errorCode = 405;
      expect((error as Error405MethodNotAllowed).status).toBe(400);
      expect((error as Error405MethodNotAllowed).errorCount).toBe(2);
      expect((error as Error405MethodNotAllowed).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error405MethodNotAllowed).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error405MethodNotAllowed).errors[0].status).toBe(errorCode);
      expect((error as Error405MethodNotAllowed).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error405MethodNotAllowed).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error405MethodNotAllowed).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/406`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      const errorCode = 406;
      expect((error as Error406NotAcceptable).status).toBe(400);
      expect((error as Error406NotAcceptable).errorCount).toBe(2);
      expect((error as Error406NotAcceptable).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error406NotAcceptable).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error406NotAcceptable).errors[0].status).toBe(errorCode);
      expect((error as Error406NotAcceptable).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error406NotAcceptable).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error406NotAcceptable).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/407`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      const errorCode = 407;
      expect((error as Error407ProxyAuthenticationRequired).status).toBe(400);
      expect((error as Error407ProxyAuthenticationRequired).errorCount).toBe(2);
      expect((error as Error407ProxyAuthenticationRequired).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error407ProxyAuthenticationRequired).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error407ProxyAuthenticationRequired).errors[0].status).toBe(errorCode);
      expect((error as Error407ProxyAuthenticationRequired).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error407ProxyAuthenticationRequired).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error407ProxyAuthenticationRequired).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/408`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      const errorCode = 408;
      expect((error as Error408RequestTimeout).status).toBe(400);
      expect((error as Error408RequestTimeout).errorCount).toBe(2);
      expect((error as Error408RequestTimeout).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error408RequestTimeout).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error408RequestTimeout).errors[0].status).toBe(errorCode);
      expect((error as Error408RequestTimeout).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error408RequestTimeout).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error408RequestTimeout).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/409`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      const errorCode = 409;
      expect((error as Error409Conflict).status).toBe(400);
      expect((error as Error409Conflict).errorCount).toBe(2);
      expect((error as Error409Conflict).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error409Conflict).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error409Conflict).errors[0].status).toBe(errorCode);
      expect((error as Error409Conflict).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error409Conflict).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error409Conflict).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/410`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      const errorCode = 410;
      expect((error as Error410Gone).status).toBe(400);
      expect((error as Error410Gone).errorCount).toBe(2);
      expect((error as Error410Gone).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error410Gone).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error410Gone).errors[0].status).toBe(errorCode);
      expect((error as Error410Gone).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error410Gone).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error410Gone).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/411`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      const errorCode = 411;
      expect((error as Error411LengthRequired).status).toBe(400);
      expect((error as Error411LengthRequired).errorCount).toBe(2);
      expect((error as Error411LengthRequired).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error411LengthRequired).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error411LengthRequired).errors[0].status).toBe(errorCode);
      expect((error as Error411LengthRequired).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error411LengthRequired).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error411LengthRequired).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/412`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      const errorCode = 412;
      expect((error as Error412PreconditionFailed).status).toBe(400);
      expect((error as Error412PreconditionFailed).errorCount).toBe(2);
      expect((error as Error412PreconditionFailed).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error412PreconditionFailed).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error412PreconditionFailed).errors[0].status).toBe(errorCode);
      expect((error as Error412PreconditionFailed).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error412PreconditionFailed).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error412PreconditionFailed).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/413`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      const errorCode = 413;
      expect((error as Error413RequestEntityTooLarge).status).toBe(400);
      expect((error as Error413RequestEntityTooLarge).errorCount).toBe(2);
      expect((error as Error413RequestEntityTooLarge).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error413RequestEntityTooLarge).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error413RequestEntityTooLarge).errors[0].status).toBe(errorCode);
      expect((error as Error413RequestEntityTooLarge).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error413RequestEntityTooLarge).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error413RequestEntityTooLarge).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/414`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      const errorCode = 414;
      expect((error as Error414RequestURITooLong).status).toBe(400);
      expect((error as Error414RequestURITooLong).errorCount).toBe(2);
      expect((error as Error414RequestURITooLong).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error414RequestURITooLong).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error414RequestURITooLong).errors[0].status).toBe(errorCode);
      expect((error as Error414RequestURITooLong).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error414RequestURITooLong).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error414RequestURITooLong).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/415`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      const errorCode = 415;
      expect((error as Error415UnsupportedMediaType).status).toBe(400);
      expect((error as Error415UnsupportedMediaType).errorCount).toBe(2);
      expect((error as Error415UnsupportedMediaType).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error415UnsupportedMediaType).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error415UnsupportedMediaType).errors[0].status).toBe(errorCode);
      expect((error as Error415UnsupportedMediaType).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error415UnsupportedMediaType).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error415UnsupportedMediaType).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/416`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      const errorCode = 416;
      expect((error as Error416RequestedRangeNotSatisfiable).status).toBe(400);
      expect((error as Error416RequestedRangeNotSatisfiable).errorCount).toBe(2);
      expect((error as Error416RequestedRangeNotSatisfiable).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error416RequestedRangeNotSatisfiable).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error416RequestedRangeNotSatisfiable).errors[0].status).toBe(errorCode);
      expect((error as Error416RequestedRangeNotSatisfiable).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error416RequestedRangeNotSatisfiable).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error416RequestedRangeNotSatisfiable).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/417`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      const errorCode = 417;
      expect((error as Error417ExpectationFailed).status).toBe(400);
      expect((error as Error417ExpectationFailed).errorCount).toBe(2);
      expect((error as Error417ExpectationFailed).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error417ExpectationFailed).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error417ExpectationFailed).errors[0].status).toBe(errorCode);
      expect((error as Error417ExpectationFailed).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error417ExpectationFailed).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error417ExpectationFailed).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/418`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      const errorCode = 418;
      expect((error as Error418ImaTeapot).status).toBe(400);
      expect((error as Error418ImaTeapot).errorCount).toBe(2);
      expect((error as Error418ImaTeapot).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error418ImaTeapot).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error418ImaTeapot).errors[0].status).toBe(errorCode);
      expect((error as Error418ImaTeapot).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error418ImaTeapot).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error418ImaTeapot).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/421`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      const errorCode = 421;
      expect((error as Error421MisdirectedRequest).status).toBe(400);
      expect((error as Error421MisdirectedRequest).errorCount).toBe(2);
      expect((error as Error421MisdirectedRequest).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error421MisdirectedRequest).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error421MisdirectedRequest).errors[0].status).toBe(errorCode);
      expect((error as Error421MisdirectedRequest).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error421MisdirectedRequest).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error421MisdirectedRequest).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/422`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      const errorCode = 422;
      expect((error as Error422UnprocessableEntity).status).toBe(400);
      expect((error as Error422UnprocessableEntity).errorCount).toBe(2);
      expect((error as Error422UnprocessableEntity).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error422UnprocessableEntity).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error422UnprocessableEntity).errors[0].status).toBe(errorCode);
      expect((error as Error422UnprocessableEntity).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error422UnprocessableEntity).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error422UnprocessableEntity).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/428`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      const errorCode = 428;
      expect((error as Error428PreconditionRequired).status).toBe(400);
      expect((error as Error428PreconditionRequired).errorCount).toBe(2);
      expect((error as Error428PreconditionRequired).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error428PreconditionRequired).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error428PreconditionRequired).errors[0].status).toBe(errorCode);
      expect((error as Error428PreconditionRequired).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error428PreconditionRequired).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error428PreconditionRequired).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/429`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      const errorCode = 429;
      expect((error as Error429TooManyRequests).status).toBe(400);
      expect((error as Error429TooManyRequests).errorCount).toBe(2);
      expect((error as Error429TooManyRequests).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error429TooManyRequests).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error429TooManyRequests).errors[0].status).toBe(errorCode);
      expect((error as Error429TooManyRequests).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error429TooManyRequests).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error429TooManyRequests).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/431`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      const errorCode = 431;
      expect((error as Error431RequestHeaderFieldsTooLarge).status).toBe(400);
      expect((error as Error431RequestHeaderFieldsTooLarge).errorCount).toBe(2);
      expect((error as Error431RequestHeaderFieldsTooLarge).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error431RequestHeaderFieldsTooLarge).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error431RequestHeaderFieldsTooLarge).errors[0].status).toBe(errorCode);
      expect((error as Error431RequestHeaderFieldsTooLarge).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error431RequestHeaderFieldsTooLarge).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error431RequestHeaderFieldsTooLarge).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/451`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      const errorCode = 451;
      expect((error as Error451UnavailableForLegalReasons).status).toBe(400);
      expect((error as Error451UnavailableForLegalReasons).errorCount).toBe(2);
      expect((error as Error451UnavailableForLegalReasons).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error451UnavailableForLegalReasons).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error451UnavailableForLegalReasons).errors[0].status).toBe(errorCode);
      expect((error as Error451UnavailableForLegalReasons).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error451UnavailableForLegalReasons).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error451UnavailableForLegalReasons).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/499`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(520);
      expect((error as Error520WebServerIsReturningAnUnknownError).errorCount).toBe(0);
    }
  });

  it('500 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/500`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      const errorCode = 500;
      expect((error as Error500InternalServerError).status).toBe(500);
      expect((error as Error500InternalServerError).errorCount).toBe(2);
      expect((error as Error500InternalServerError).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error500InternalServerError).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error500InternalServerError).errors[0].status).toBe(errorCode);
      expect((error as Error500InternalServerError).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error500InternalServerError).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error500InternalServerError).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/501`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      const errorCode = 501;
      expect((error as Error501NotImplemented).status).toBe(500);
      expect((error as Error501NotImplemented).errorCount).toBe(2);
      expect((error as Error501NotImplemented).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error501NotImplemented).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error501NotImplemented).errors[0].status).toBe(errorCode);
      expect((error as Error501NotImplemented).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error501NotImplemented).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error501NotImplemented).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/502`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      const errorCode = 502;
      expect((error as Error502BadGateway).status).toBe(500);
      expect((error as Error502BadGateway).errorCount).toBe(2);
      expect((error as Error502BadGateway).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error502BadGateway).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error502BadGateway).errors[0].status).toBe(errorCode);
      expect((error as Error502BadGateway).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error502BadGateway).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error502BadGateway).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/503`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      const errorCode = 503;
      expect((error as Error503ServiceUnavailable).status).toBe(500);
      expect((error as Error503ServiceUnavailable).errorCount).toBe(2);
      expect((error as Error503ServiceUnavailable).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error503ServiceUnavailable).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error503ServiceUnavailable).errors[0].status).toBe(errorCode);
      expect((error as Error503ServiceUnavailable).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error503ServiceUnavailable).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error503ServiceUnavailable).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/504`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      const errorCode = 504;
      expect((error as Error504GatewayTimeout).status).toBe(500);
      expect((error as Error504GatewayTimeout).errorCount).toBe(2);
      expect((error as Error504GatewayTimeout).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error504GatewayTimeout).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error504GatewayTimeout).errors[0].status).toBe(errorCode);
      expect((error as Error504GatewayTimeout).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error504GatewayTimeout).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error504GatewayTimeout).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/505`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      const errorCode = 505;
      expect((error as Error505HTTPVersionNotSupported).status).toBe(500);
      expect((error as Error505HTTPVersionNotSupported).errorCount).toBe(2);
      expect((error as Error505HTTPVersionNotSupported).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error505HTTPVersionNotSupported).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error505HTTPVersionNotSupported).errors[0].status).toBe(errorCode);
      expect((error as Error505HTTPVersionNotSupported).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error505HTTPVersionNotSupported).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error505HTTPVersionNotSupported).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/511`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      const errorCode = 511;
      expect((error as Error511NetworkAuthenticationRequired).status).toBe(500);
      expect((error as Error511NetworkAuthenticationRequired).errorCount).toBe(2);
      expect((error as Error511NetworkAuthenticationRequired).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error511NetworkAuthenticationRequired).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error511NetworkAuthenticationRequired).errors[0].status).toBe(errorCode);
      expect((error as Error511NetworkAuthenticationRequired).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error511NetworkAuthenticationRequired).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error511NetworkAuthenticationRequired).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/520`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      const errorCode = 520;
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(500);
      expect((error as Error520WebServerIsReturningAnUnknownError).errorCount).toBe(2);
      expect((error as Error520WebServerIsReturningAnUnknownError).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error520WebServerIsReturningAnUnknownError).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error520WebServerIsReturningAnUnknownError).errors[0].status).toBe(errorCode);
      expect((error as Error520WebServerIsReturningAnUnknownError).errors[1].code).toBe(`ERROR-${(errorCode + 1)
        .toString(10)}`);
      expect((error as Error520WebServerIsReturningAnUnknownError).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error520WebServerIsReturningAnUnknownError).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/522`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      const errorCode = 522;
      expect((error as Error522ConnectionTimedOut).status).toBe(500);
      expect((error as Error522ConnectionTimedOut).errorCount).toBe(2);
      expect((error as Error522ConnectionTimedOut).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error522ConnectionTimedOut).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error522ConnectionTimedOut).errors[0].status).toBe(errorCode);
      expect((error as Error522ConnectionTimedOut).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error522ConnectionTimedOut).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error522ConnectionTimedOut).errors[1].status).toBe(errorCode + 1);
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Patch(`${hostName}/524`, payload, { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      const errorCode = 524;
      expect((error as Error524ATimeoutOccurred).status).toBe(500);
      expect((error as Error524ATimeoutOccurred).errorCount).toBe(2);
      expect((error as Error524ATimeoutOccurred).errors[0].code).toBe(`ERROR-${errorCode}`);
      expect((error as Error524ATimeoutOccurred).errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect((error as Error524ATimeoutOccurred).errors[0].status).toBe(errorCode);
      expect((error as Error524ATimeoutOccurred).errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect((error as Error524ATimeoutOccurred).errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect((error as Error524ATimeoutOccurred).errors[1].status).toBe(errorCode + 1);
    }
  });
});
