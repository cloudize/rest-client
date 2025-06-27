import {
  CreateException,
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
} from '../../../../../src';
import {GetJsonAPIErrorsPayload, GetJsonAPIHeaders} from '../jsonapi.test.helpers';

describe('Request should succeed when performing a HEAD on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200, data: '200 OK' });
    const response = await restClient.Head('https://httpstat.us/200', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toBe('200 OK');
  });

  it('201 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 201, data: '201 Created' });
    const response = await restClient.Head('https://httpstat.us/201', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(201);
    expect(response.data).toBe('201 Created');
  });

  it('202 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 202, data: '202 Accepted' });
    const response = await restClient.Head('https://httpstat.us/202', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(202);
    expect(response.data).toBe('202 Accepted');
  });

  it('203 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 203, data: '203 Non-Authoritative Information' });
    const response = await restClient.Head('https://httpstat.us/203', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(203);
    expect(response.data).toBe('203 Non-Authoritative Information');
  });

  it('206 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 206, data: '206 Partial Content' });
    const response = await restClient.Head('https://httpstat.us/206', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(206);
    expect(response.data).toBe('206 Partial Content');
  });

  it('299 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 299, data: '299 299 Unknown Code' });
    const response = await restClient.Head('https://httpstat.us/299', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(299);
    expect(response.data).toBe('299 299 Unknown Code');
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/301', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/302', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/303', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/305', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/307', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/308', { accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
  });
});

describe('The MockRestClient should throw when a HEAD is performed', () => {
  it('without a response being mocked', async () => {
    try {
      const restClient = new MockRestClient();
      await restClient.Head('https://httpstat.us/301', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Please mock the Head() response document using MockResolve() or MockReject().');
    }
  });

  it('after a mocked result is reset', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 301,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      restClient.reset();
      await restClient.Head('https://httpstat.us/301', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Please mock the Head() response document using MockResolve() or MockReject().');
    }
  });
});

describe('Request should fail and throw when performing a HEAD on an endpoint that returns a', () => {
  it('301 status code with no redirect', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 301,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/301', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      expect((error as Error301MovedPermanently).status).toBe(301);
      expect((error as Error301MovedPermanently).errorCount).toBe(0);
      expect((error as Error301MovedPermanently).data).toBeNull();
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 302,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/302', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      expect((error as Error302Found).status).toBe(302);
      expect((error as Error302Found).errorCount).toBe(0);
      expect((error as Error302Found).data).toBeNull();
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 303,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/303', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      expect((error as Error303SeeOther).status).toBe(303);
      expect((error as Error303SeeOther).errorCount).toBe(0);
      expect((error as Error303SeeOther).data).toBeNull();
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 304,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/304', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect((error as Error304NotModified).status).toBe(304);
      expect((error as Error304NotModified).errorCount).toBe(0);
      expect((error as Error304NotModified).data).toBeNull();
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 305,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/305', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      expect((error as Error305UseProxy).status).toBe(305);
      expect((error as Error305UseProxy).errorCount).toBe(0);
      expect((error as Error305UseProxy).data).toBeNull();
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 306,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/306', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      expect((error as Error306Unused).status).toBe(306);
      expect((error as Error306Unused).errorCount).toBe(0);
      expect((error as Error306Unused).data).toBeNull();
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 307,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/307', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      expect((error as Error307TemporaryRedirect).status).toBe(307);
      expect((error as Error307TemporaryRedirect).errorCount).toBe(0);
      expect((error as Error307TemporaryRedirect).data).toBeNull();
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 308,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/308', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      expect((error as Error308PermanentRedirect).status).toBe(308);
      expect((error as Error308PermanentRedirect).errorCount).toBe(0);
      expect((error as Error308PermanentRedirect).data).toBeNull();
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 399,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/399', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(399);
      expect((error as Error520WebServerIsReturningAnUnknownError).errorCount).toBe(0);
      expect((error as Error520WebServerIsReturningAnUnknownError).data).toBeNull();
    }
  });

  it('400 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 400,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/400', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      expect((error as Error400BadRequest).status).toBe(400);
      expect((error as Error400BadRequest).errorCount).toBe(0);
      expect((error as Error400BadRequest).data).toBeNull();
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 401,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/401', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      expect((error as Error401Unauthorized).status).toBe(401);
      expect((error as Error401Unauthorized).errorCount).toBe(0);
      expect((error as Error401Unauthorized).data).toBeNull();
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 402,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/402', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      expect((error as Error402PaymentRequired).status).toBe(402);
      expect((error as Error402PaymentRequired).errorCount).toBe(0);
      expect((error as Error402PaymentRequired).data).toBeNull();
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 403,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/403', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      expect((error as Error403Forbidden).status).toBe(403);
      expect((error as Error403Forbidden).errorCount).toBe(0);
      expect((error as Error403Forbidden).data).toBeNull();
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 404,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/404', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      expect((error as Error404NotFound).status).toBe(404);
      expect((error as Error404NotFound).errorCount).toBe(0);
      expect((error as Error404NotFound).data).toBeNull();
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 405,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/405', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      expect((error as Error405MethodNotAllowed).status).toBe(405);
      expect((error as Error405MethodNotAllowed).errorCount).toBe(0);
      expect((error as Error405MethodNotAllowed).data).toBeNull();
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 406,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/406', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      expect((error as Error406NotAcceptable).status).toBe(406);
      expect((error as Error406NotAcceptable).errorCount).toBe(0);
      expect((error as Error406NotAcceptable).data).toBeNull();
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 407,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/407', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      expect((error as Error407ProxyAuthenticationRequired).status).toBe(407);
      expect((error as Error407ProxyAuthenticationRequired).errorCount).toBe(0);
      expect((error as Error407ProxyAuthenticationRequired).data).toBeNull();
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 408,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/408', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      expect((error as Error408RequestTimeout).status).toBe(408);
      expect((error as Error408RequestTimeout).errorCount).toBe(0);
      expect((error as Error408RequestTimeout).data).toBeNull();
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 409,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/409', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      expect((error as Error409Conflict).status).toBe(409);
      expect((error as Error409Conflict).errorCount).toBe(0);
      expect((error as Error409Conflict).data).toBeNull();
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 410,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/410', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      expect((error as Error410Gone).status).toBe(410);
      expect((error as Error410Gone).errorCount).toBe(0);
      expect((error as Error410Gone).data).toBeNull();
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 411,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/411', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      expect((error as Error411LengthRequired).status).toBe(411);
      expect((error as Error411LengthRequired).errorCount).toBe(0);
      expect((error as Error411LengthRequired).data).toBeNull();
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 412,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/412', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      expect((error as Error412PreconditionFailed).status).toBe(412);
      expect((error as Error412PreconditionFailed).errorCount).toBe(0);
      expect((error as Error412PreconditionFailed).data).toBeNull();
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 413,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/413', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      expect((error as Error413RequestEntityTooLarge).status).toBe(413);
      expect((error as Error413RequestEntityTooLarge).errorCount).toBe(0);
      expect((error as Error413RequestEntityTooLarge).data).toBeNull();
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 414,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/414', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      expect((error as Error414RequestURITooLong).status).toBe(414);
      expect((error as Error414RequestURITooLong).errorCount).toBe(0);
      expect((error as Error414RequestURITooLong).data).toBeNull();
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 415,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/415', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      expect((error as Error415UnsupportedMediaType).status).toBe(415);
      expect((error as Error415UnsupportedMediaType).errorCount).toBe(0);
      expect((error as Error415UnsupportedMediaType).data).toBeNull();
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 416,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/416', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      expect((error as Error416RequestedRangeNotSatisfiable).status).toBe(416);
      expect((error as Error416RequestedRangeNotSatisfiable).errorCount).toBe(0);
      expect((error as Error416RequestedRangeNotSatisfiable).data).toBeNull();
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 417,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/417', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      expect((error as Error417ExpectationFailed).status).toBe(417);
      expect((error as Error417ExpectationFailed).errorCount).toBe(0);
      expect((error as Error417ExpectationFailed).data).toBeNull();
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 418,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/418', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      expect((error as Error418ImaTeapot).status).toBe(418);
      expect((error as Error418ImaTeapot).errorCount).toBe(0);
      expect((error as Error418ImaTeapot).data).toBeNull();
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 421,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/421', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      expect((error as Error421MisdirectedRequest).status).toBe(421);
      expect((error as Error421MisdirectedRequest).errorCount).toBe(0);
      expect((error as Error421MisdirectedRequest).data).toBeNull();
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 422,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/422', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      expect((error as Error422UnprocessableEntity).status).toBe(422);
      expect((error as Error422UnprocessableEntity).errorCount).toBe(0);
      expect((error as Error422UnprocessableEntity).data).toBeNull();
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 428,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/428', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      expect((error as Error428PreconditionRequired).status).toBe(428);
      expect((error as Error428PreconditionRequired).errorCount).toBe(0);
      expect((error as Error428PreconditionRequired).data).toBeNull();
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 429,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/429', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      expect((error as Error429TooManyRequests).status).toBe(429);
      expect((error as Error429TooManyRequests).errorCount).toBe(0);
      expect((error as Error429TooManyRequests).data).toBeNull();
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 431,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/431', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      expect((error as Error431RequestHeaderFieldsTooLarge).status).toBe(431);
      expect((error as Error431RequestHeaderFieldsTooLarge).errorCount).toBe(0);
      expect((error as Error431RequestHeaderFieldsTooLarge).data).toBeNull();
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 451,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/451', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      expect((error as Error451UnavailableForLegalReasons).status).toBe(451);
      expect((error as Error451UnavailableForLegalReasons).errorCount).toBe(0);
      expect((error as Error451UnavailableForLegalReasons).data).toBeNull();
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 499,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/499', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(499);
      expect((error as Error520WebServerIsReturningAnUnknownError).errorCount).toBe(0);
      expect((error as Error520WebServerIsReturningAnUnknownError).data).toBeNull();
    }
  });

  it('500 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 500,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/500', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      expect((error as Error500InternalServerError).status).toBe(500);
      expect((error as Error500InternalServerError).errorCount).toBe(0);
      expect((error as Error500InternalServerError).data).toBeNull();
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 501,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/501', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      expect((error as Error501NotImplemented).status).toBe(501);
      expect((error as Error501NotImplemented).errorCount).toBe(0);
      expect((error as Error501NotImplemented).data).toBeNull();
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 502,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/502', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      expect((error as Error502BadGateway).status).toBe(502);
      expect((error as Error502BadGateway).errorCount).toBe(0);
      expect((error as Error502BadGateway).data).toBeNull();
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 503,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/503', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      expect((error as Error503ServiceUnavailable).status).toBe(503);
      expect((error as Error503ServiceUnavailable).errorCount).toBe(0);
      expect((error as Error503ServiceUnavailable).data).toBeNull();
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 504,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/504', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      expect((error as Error504GatewayTimeout).status).toBe(504);
      expect((error as Error504GatewayTimeout).errorCount).toBe(0);
      expect((error as Error504GatewayTimeout).data).toBeNull();
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 505,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/505', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      expect((error as Error505HTTPVersionNotSupported).status).toBe(505);
      expect((error as Error505HTTPVersionNotSupported).errorCount).toBe(0);
      expect((error as Error505HTTPVersionNotSupported).data).toBeNull();
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 511,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/511', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      expect((error as Error511NetworkAuthenticationRequired).status).toBe(511);
      expect((error as Error511NetworkAuthenticationRequired).errorCount).toBe(0);
      expect((error as Error511NetworkAuthenticationRequired).data).toBeNull();
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 520,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/520', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(520);
      expect((error as Error520WebServerIsReturningAnUnknownError).errorCount).toBe(0);
      expect((error as Error520WebServerIsReturningAnUnknownError).data).toBeNull();
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 522,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/522', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      expect((error as Error522ConnectionTimedOut).status).toBe(522);
      expect((error as Error522ConnectionTimedOut).errorCount).toBe(0);
      expect((error as Error522ConnectionTimedOut).data).toBeNull();
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({
        statusCode: 524,
        headers: GetJsonAPIHeaders(),
        data: null,
      }));
      await restClient.Head('https://httpstat.us/524', { accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      expect((error as Error524ATimeoutOccurred).status).toBe(524);
      expect((error as Error524ATimeoutOccurred).errorCount).toBe(0);
      expect((error as Error524ATimeoutOccurred).data).toBeNull();
    }
  });
});
