const {
  MockRestClient,
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
} = require('../../../../../../lib');
const { CreateException } = require('../../../../../../lib/exceptions');
const { GetJsonAPIErrorsPayload, GetJsonAPIHeaders } = require('../jsonapi.test.helpers');

describe('Request should succeed when performing a GET on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200, data: '200 OK' });
    const response = await restClient.Get('https://httpstat.us/200', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toBe('200 OK');
  });

  it('201 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 201, data: '201 Created' });
    const response = await restClient.Get('https://httpstat.us/201', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(201);
    expect(response.data).toBe('201 Created');
  });

  it('202 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 202, data: '202 Accepted' });
    const response = await restClient.Get('https://httpstat.us/202', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(202);
    expect(response.data).toBe('202 Accepted');
  });

  it('203 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 203, data: '203 Non-Authoritative Information' });
    const response = await restClient.Get('https://httpstat.us/203', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(203);
    expect(response.data).toBe('203 Non-Authoritative Information');
  });

  it('206 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 206, data: '206 Partial Content' });
    const response = await restClient.Get('https://httpstat.us/206', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(206);
    expect(response.data).toBe('206 Partial Content');
  });

  it('299 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 299, data: '299 299 Unknown Code' });
    const response = await restClient.Get('https://httpstat.us/299', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(299);
    expect(response.data).toBe('299 299 Unknown Code');
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Get('https://httpstat.us/301', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Get('https://httpstat.us/302', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Get('https://httpstat.us/303', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Get('https://httpstat.us/305', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Get('https://httpstat.us/307', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Get('https://httpstat.us/308', { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });
});

describe('The MockRestClient should throw when a GET is performed', () => {
  it('without a response being mocked', async () => {
    try {
      const restClient = new MockRestClient();
      await restClient.Get('https://httpstat.us/301', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Please mock the Get() response document using MockResolve() or MockReject().');
    }
  });

  it('after a mocked result is reset', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 301,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(301, [301, 302]),
      }));
      restClient.reset();
      await restClient.Get('https://httpstat.us/301', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Please mock the Get() response document using MockResolve() or MockReject().');
    }
  });
});

describe('Request should fail and throw when performing a GET on an endpoint that returns a', () => {
  it('301 status code with no redirect', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 301,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(301, [301, 302]),
      }));
      await restClient.Get('https://httpstat.us/301', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 302,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(302, [302, 303]),
      }));
      await restClient.Get('https://httpstat.us/302', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 303,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(303, [303, 304]),
      }));
      await restClient.Get('https://httpstat.us/303', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 304,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(304, [304, 305]),
      }));
      await restClient.Get('https://httpstat.us/304', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      const errorCode = 304;
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

  it('305 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 305,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(305, [305, 306]),
      }));
      await restClient.Get('https://httpstat.us/305', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 306,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(306, [306, 307]),
      }));
      await restClient.Get('https://httpstat.us/306', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 307,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(307, [307, 308]),
      }));
      await restClient.Get('https://httpstat.us/307', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 308,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(308, [308, 309]),
      }));
      await restClient.Get('https://httpstat.us/308', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 399,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(399, [398, 399]),
      }));
      await restClient.Get('https://httpstat.us/399', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      const errorCode = 398;
      expect(error.status).toBe(300);
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

  it('400 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 400,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(400, [400, 401]),
      }));
      await restClient.Get('https://httpstat.us/400', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 401,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(401, [401, 402]),
      }));
      await restClient.Get('https://httpstat.us/401', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 402,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(402, [402, 403]),
      }));
      await restClient.Get('https://httpstat.us/402', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 403,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(403, [403, 404]),
      }));
      await restClient.Get('https://httpstat.us/403', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 404,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(404, [404, 405]),
      }));
      await restClient.Get('https://httpstat.us/404', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 405,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(405, [405, 406]),
      }));
      await restClient.Get('https://httpstat.us/405', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 406,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(406, [406, 407]),
      }));
      await restClient.Get('https://httpstat.us/406', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 407,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(407, [407, 408]),
      }));
      await restClient.Get('https://httpstat.us/407', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 408,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(408, [408, 409]),
      }));
      await restClient.Get('https://httpstat.us/408', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 409,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(409, [409, 410]),
      }));
      await restClient.Get('https://httpstat.us/409', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 410,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(410, [410, 411]),
      }));
      await restClient.Get('https://httpstat.us/410', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 411,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(411, [411, 412]),
      }));
      await restClient.Get('https://httpstat.us/411', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 412,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(412, [412, 413]),
      }));
      await restClient.Get('https://httpstat.us/412', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 413,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(413, [413, 414]),
      }));
      await restClient.Get('https://httpstat.us/413', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 414,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(414, [414, 415]),
      }));
      await restClient.Get('https://httpstat.us/414', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 415,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(415, [415, 416]),
      }));
      await restClient.Get('https://httpstat.us/415', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 416,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(416, [416, 417]),
      }));
      await restClient.Get('https://httpstat.us/416', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 417,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(417, [417, 418]),
      }));
      await restClient.Get('https://httpstat.us/417', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 418,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(418, [418, 419]),
      }));
      await restClient.Get('https://httpstat.us/418', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 421,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(421, [421, 422]),
      }));
      await restClient.Get('https://httpstat.us/421', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 422,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(422, [422, 423]),
      }));
      await restClient.Get('https://httpstat.us/422', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 428,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(428, [428, 429]),
      }));
      await restClient.Get('https://httpstat.us/428', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 429,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(429, [429, 430]),
      }));
      await restClient.Get('https://httpstat.us/429', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 431,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(431, [431, 432]),
      }));
      await restClient.Get('https://httpstat.us/431', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 451,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(451, [451, 452]),
      }));
      await restClient.Get('https://httpstat.us/451', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 499,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(499, [498, 499]),
      }));
      await restClient.Get('https://httpstat.us/499', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      const errorCode = 498;
      expect(error.status).toBe(400);
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

  it('500 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 500,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(500, [500, 501]),
      }));
      await restClient.Get('https://httpstat.us/500', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 501,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(501, [501, 502]),
      }));
      await restClient.Get('https://httpstat.us/501', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 502,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(502, [502, 503]),
      }));
      await restClient.Get('https://httpstat.us/502', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 503,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(503, [503, 504]),
      }));
      await restClient.Get('https://httpstat.us/503', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 504,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(504, [504, 505]),
      }));
      await restClient.Get('https://httpstat.us/504', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 505,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(505, [505, 506]),
      }));
      await restClient.Get('https://httpstat.us/505', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 511,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(511, [511, 512]),
      }));
      await restClient.Get('https://httpstat.us/511', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 520,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(520, [520, 521]),
      }));
      await restClient.Get('https://httpstat.us/520', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 522,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(522, [522, 523]),
      }));
      await restClient.Get('https://httpstat.us/522', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 524,
        headers: GetJsonAPIHeaders(),
        data: GetJsonAPIErrorsPayload(524, [524, 525]),
      }));
      await restClient.Get('https://httpstat.us/524', { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
