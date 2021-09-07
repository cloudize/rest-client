const {
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
} = require('../../../../../lib');

const payload = 'Sample payload.';

const hostName = 'http://127.0.0.1:3000';

function ExpectedPayload(status) {
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
      self: `${hostName}/${status.toString()}`,
    },
  };
}

describe('Request should succeed when performing a PUT on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/200`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('201 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/201`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(201);
    expect(response.data).toEqual(ExpectedPayload(201));
  });

  it('202 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/202`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(202);
    expect(response.data).toEqual(ExpectedPayload(202));
  });

  it('203 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/203`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(203);
    expect(response.data).toEqual(ExpectedPayload(203));
  });

  it('206 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/206`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(206);
    expect(response.data).toEqual(ExpectedPayload(206));
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/301`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/302`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/303`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/305`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/307`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(ExpectedPayload(200));
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/308`, payload, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(ExpectedPayload(200));
  });
});

describe('Request should fail and throw when performing a PUT on an endpoint that returns a', () => {
  it('299 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/299`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.status).toBe(520);
      expect(error.errorCount).toBe(0);
    }
  });

  it('301 status code with no redirect', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/301`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      const errorCode = 301;
      expect(error.status).toBe(300);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/302`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      const errorCode = 302;
      expect(error.status).toBe(300);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/303`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      const errorCode = 303;
      expect(error.status).toBe(300);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/304`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect(error.status).toBe(304);
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/305`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      const errorCode = 305;
      expect(error.status).toBe(300);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/306`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      const errorCode = 306;
      expect(error.status).toBe(300);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/307`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      const errorCode = 307;
      expect(error.status).toBe(300);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/308`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      const errorCode = 308;
      expect(error.status).toBe(300);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/399`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.status).toBe(520);
      expect(error.errorCount).toBe(0);
    }
  });

  it('400 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/400`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      const errorCode = 400;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/401`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      const errorCode = 401;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/402`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      const errorCode = 402;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/403`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      const errorCode = 403;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/404`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      const errorCode = 404;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/405`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      const errorCode = 405;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/406`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      const errorCode = 406;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/407`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      const errorCode = 407;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/408`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      const errorCode = 408;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/409`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      const errorCode = 409;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/410`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      const errorCode = 410;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/411`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      const errorCode = 411;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/412`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      const errorCode = 412;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/413`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      const errorCode = 413;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/414`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      const errorCode = 414;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/415`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      const errorCode = 415;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/416`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      const errorCode = 416;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/417`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      const errorCode = 417;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/418`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      const errorCode = 418;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/421`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      const errorCode = 421;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/422`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      const errorCode = 422;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/428`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      const errorCode = 428;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/429`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      const errorCode = 429;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/431`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      const errorCode = 431;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/451`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      const errorCode = 451;
      expect(error.status).toBe(400);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/499`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.status).toBe(520);
      expect(error.errorCount).toBe(0);
    }
  });

  it('500 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/500`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      const errorCode = 500;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/501`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      const errorCode = 501;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/502`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      const errorCode = 502;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/503`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      const errorCode = 503;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/504`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      const errorCode = 504;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/505`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      const errorCode = 505;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/511`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      const errorCode = 511;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/520`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      const errorCode = 520;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1)
        .toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/522`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      const errorCode = 522;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/524`, payload, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      const errorCode = 524;
      expect(error.status).toBe(500);
      expect(error.errorCount).toBe(2);
      expect(error.errors[0].code).toBe(`ERROR-${errorCode}`);
      expect(error.errors[0].title)
        .toBe(`This is the detail of the ${errorCode.toString(10)} error.`);
      expect(error.errors[0].status).toBe(errorCode);
      expect(error.errors[1].code).toBe(`ERROR-${(errorCode + 1).toString(10)}`);
      expect(error.errors[1].title)
        .toBe(`This is the detail of the ${(errorCode + 1).toString(10)} error.`);
      expect(error.errors[1].status).toBe(errorCode + 1);
    }
  });
});
