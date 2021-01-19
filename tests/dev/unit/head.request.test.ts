import {
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
} from '../../../src';

describe('Request should succeed when performing a HEAD on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200, data: '200 OK' });
    const response = await restClient.Head('https://httpstat.us/200', { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toBe('200 OK');
  });

  it('201 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 201, data: '201 Created' });
    const response = await restClient.Head('https://httpstat.us/201', { Accept: '*/*' });
    expect(response.statusCode).toBe(201);
    expect(response.data).toBe('201 Created');
  });

  it('202 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 202, data: '202 Accepted' });
    const response = await restClient.Head('https://httpstat.us/202', { Accept: '*/*' });
    expect(response.statusCode).toBe(202);
    expect(response.data).toBe('202 Accepted');
  });

  it('203 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 203, data: '203 Non-Authoritative Information' });
    const response = await restClient.Head('https://httpstat.us/203', { Accept: '*/*' });
    expect(response.statusCode).toBe(203);
    expect(response.data).toBe('203 Non-Authoritative Information');
  });

  it('206 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 206, data: '206 Partial Content' });
    const response = await restClient.Head('https://httpstat.us/206', { Accept: '*/*' });
    expect(response.statusCode).toBe(206);
    expect(response.data).toBe('206 Partial Content');
  });

  it('299 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 299, data: '299 299 Unknown Code' });
    const response = await restClient.Head('https://httpstat.us/299', { Accept: '*/*' });
    expect(response.statusCode).toBe(299);
    expect(response.data).toBe('299 299 Unknown Code');
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/301', { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/302', { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/303', { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/305', { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/307', { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/308', { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });
});

describe('The MockRestClient should throw when a HEAD is performed', () => {
  it('without a response being mocked', async () => {
    try {
      const restClient = new MockRestClient();
      await restClient.Head('https://httpstat.us/301', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Please mock the Head() response document using MockResolve() or MockReject().');
    }
  });

  it('after a mocked result is reset', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error301MovedPermanently({ statusCode: 301 }));
      restClient.reset();
      await restClient.Head('https://httpstat.us/301', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Please mock the Head() response document using MockResolve() or MockReject().');
    }
  });
});

describe('Request should fail and throw when performing a HEAD on an endpoint that returns a', () => {
  it('301 status code with no redirect', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error301MovedPermanently({ statusCode: 301 }));
      await restClient.Head('https://httpstat.us/301', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      expect(error.statusCode).toBe(301);
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error302Found({ statusCode: 302 }));
      await restClient.Head('https://httpstat.us/302', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      expect(error.statusCode).toBe(302);
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error303SeeOther({ statusCode: 303 }));
      await restClient.Head('https://httpstat.us/303', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      expect(error.statusCode).toBe(303);
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error304NotModified({ statusCode: 304 }));
      await restClient.Head('https://httpstat.us/304', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect(error.statusCode).toBe(304);
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error305UseProxy({ statusCode: 305 }));
      await restClient.Head('https://httpstat.us/305', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      expect(error.statusCode).toBe(305);
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error306Unused({ statusCode: 306 }));
      await restClient.Head('https://httpstat.us/306', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      expect(error.statusCode).toBe(306);
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error307TemporaryRedirect({ statusCode: 307 }));
      await restClient.Head('https://httpstat.us/307', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      expect(error.statusCode).toBe(307);
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error308PermanentRedirect({ statusCode: 308 }));
      await restClient.Head('https://httpstat.us/308', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      expect(error.statusCode).toBe(308);
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error520WebServerIsReturningAnUnknownError({ statusCode: 399 }));
      await restClient.Head('https://httpstat.us/399', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.statusCode).toBe(399);
    }
  });

  it('400 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error400BadRequest({ statusCode: 400 }));
      await restClient.Head('https://httpstat.us/400', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      expect(error.statusCode).toBe(400);
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error401Unauthorized({ statusCode: 401 }));
      await restClient.Head('https://httpstat.us/401', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      expect(error.statusCode).toBe(401);
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error402PaymentRequired({ statusCode: 402 }));
      await restClient.Head('https://httpstat.us/402', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      expect(error.statusCode).toBe(402);
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error403Forbidden({ statusCode: 403 }));
      await restClient.Head('https://httpstat.us/403', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      expect(error.statusCode).toBe(403);
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error404NotFound({ statusCode: 404 }));
      await restClient.Head('https://httpstat.us/404', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      expect(error.statusCode).toBe(404);
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error405MethodNotAllowed({ statusCode: 405 }));
      await restClient.Head('https://httpstat.us/405', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      expect(error.statusCode).toBe(405);
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error406NotAcceptable({ statusCode: 406 }));
      await restClient.Head('https://httpstat.us/406', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      expect(error.statusCode).toBe(406);
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error407ProxyAuthenticationRequired({ statusCode: 407 }));
      await restClient.Head('https://httpstat.us/407', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      expect(error.statusCode).toBe(407);
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error408RequestTimeout({ statusCode: 408 }));
      await restClient.Head('https://httpstat.us/408', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      expect(error.statusCode).toBe(408);
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error409Conflict({ statusCode: 409 }));
      await restClient.Head('https://httpstat.us/409', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      expect(error.statusCode).toBe(409);
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error410Gone({ statusCode: 410 }));
      await restClient.Head('https://httpstat.us/410', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      expect(error.statusCode).toBe(410);
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error411LengthRequired({ statusCode: 411 }));
      await restClient.Head('https://httpstat.us/411', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      expect(error.statusCode).toBe(411);
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error412PreconditionFailed({ statusCode: 412 }));
      await restClient.Head('https://httpstat.us/412', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      expect(error.statusCode).toBe(412);
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error413RequestEntityTooLarge({ statusCode: 413 }));
      await restClient.Head('https://httpstat.us/413', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      expect(error.statusCode).toBe(413);
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error414RequestURITooLong({ statusCode: 414 }));
      await restClient.Head('https://httpstat.us/414', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      expect(error.statusCode).toBe(414);
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error415UnsupportedMediaType({ statusCode: 415 }));
      await restClient.Head('https://httpstat.us/415', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      expect(error.statusCode).toBe(415);
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error416RequestedRangeNotSatisfiable({ statusCode: 416 }));
      await restClient.Head('https://httpstat.us/416', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      expect(error.statusCode).toBe(416);
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error417ExpectationFailed({ statusCode: 417 }));
      await restClient.Head('https://httpstat.us/417', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      expect(error.statusCode).toBe(417);
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error418ImaTeapot({ statusCode: 418 }));
      await restClient.Head('https://httpstat.us/418', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      expect(error.statusCode).toBe(418);
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error421MisdirectedRequest({ statusCode: 421 }));
      await restClient.Head('https://httpstat.us/421', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      expect(error.statusCode).toBe(421);
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error422UnprocessableEntity({ statusCode: 422 }));
      await restClient.Head('https://httpstat.us/422', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      expect(error.statusCode).toBe(422);
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error428PreconditionRequired({ statusCode: 428 }));
      await restClient.Head('https://httpstat.us/428', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      expect(error.statusCode).toBe(428);
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error429TooManyRequests({ statusCode: 429 }));
      await restClient.Head('https://httpstat.us/429', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      expect(error.statusCode).toBe(429);
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error431RequestHeaderFieldsTooLarge({ statusCode: 431 }));
      await restClient.Head('https://httpstat.us/431', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      expect(error.statusCode).toBe(431);
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error451UnavailableForLegalReasons({ statusCode: 451 }));
      await restClient.Head('https://httpstat.us/451', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      expect(error.statusCode).toBe(451);
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error520WebServerIsReturningAnUnknownError({ statusCode: 499 }));
      await restClient.Head('https://httpstat.us/499', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.statusCode).toBe(499);
    }
  });

  it('500 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error500InternalServerError({ statusCode: 500 }));
      await restClient.Head('https://httpstat.us/500', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      expect(error.statusCode).toBe(500);
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error501NotImplemented({ statusCode: 501 }));
      await restClient.Head('https://httpstat.us/501', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      expect(error.statusCode).toBe(501);
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error502BadGateway({ statusCode: 502 }));
      await restClient.Head('https://httpstat.us/502', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      expect(error.statusCode).toBe(502);
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error503ServiceUnavailable({ statusCode: 503 }));
      await restClient.Head('https://httpstat.us/503', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      expect(error.statusCode).toBe(503);
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error504GatewayTimeout({ statusCode: 504 }));
      await restClient.Head('https://httpstat.us/504', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      expect(error.statusCode).toBe(504);
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error505HTTPVersionNotSupported({ statusCode: 505 }));
      await restClient.Head('https://httpstat.us/505', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      expect(error.statusCode).toBe(505);
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error511NetworkAuthenticationRequired({ statusCode: 511 }));
      await restClient.Head('https://httpstat.us/511', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      expect(error.statusCode).toBe(511);
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error520WebServerIsReturningAnUnknownError({ statusCode: 520 }));
      await restClient.Head('https://httpstat.us/520', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.statusCode).toBe(520);
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error522ConnectionTimedOut({ statusCode: 522 }));
      await restClient.Head('https://httpstat.us/522', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      expect(error.statusCode).toBe(522);
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(new Error524ATimeoutOccurred({ statusCode: 524 }));
      await restClient.Head('https://httpstat.us/524', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      expect(error.statusCode).toBe(524);
    }
  });
});
