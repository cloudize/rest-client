const {
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
} = require('../../../../../lib');

const payload = {};

describe('Request should succeed when performing a POST on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200, data: '200 OK' });
    const response = await restClient.Post('https://httpstat.us/200', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toBe('200 OK');
  });

  it('201 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 201, data: '201 Created' });
    const response = await restClient.Post('https://httpstat.us/201', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(201);
    expect(response.data).toBe('201 Created');
  });

  it('202 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 202, data: '202 Accepted' });
    const response = await restClient.Post('https://httpstat.us/202', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(202);
    expect(response.data).toBe('202 Accepted');
  });

  it('203 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 203, data: '203 Non-Authoritative Information' });
    const response = await restClient.Post('https://httpstat.us/203', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(203);
    expect(response.data).toBe('203 Non-Authoritative Information');
  });

  it('206 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 206, data: '206 Partial Content' });
    const response = await restClient.Post('https://httpstat.us/206', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(206);
    expect(response.data).toBe('206 Partial Content');
  });

  it('299 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 299, data: '299 299 Unknown Code' });
    const response = await restClient.Post('https://httpstat.us/299', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(299);
    expect(response.data).toBe('299 299 Unknown Code');
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Post('https://httpstat.us/301', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Post('https://httpstat.us/302', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Post('https://httpstat.us/303', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Post('https://httpstat.us/305', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Post('https://httpstat.us/307', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Post('https://httpstat.us/308', payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });
});

describe('The MockRestClient should throw when a POST is performed', () => {
  it('without a response being mocked', async () => {
    try {
      const restClient = new MockRestClient();
      await restClient.Post('https://httpstat.us/301', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Please mock the Post() response document using MockResolve() or MockReject().');
    }
  });

  it('after a mocked result is reset', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 301 }));
      restClient.reset();
      await restClient.Post('https://httpstat.us/301', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Please mock the Post() response document using MockResolve() or MockReject().');
    }
  });
});

describe('Request should fail and throw when performing a POST on an endpoint that returns a', () => {
  it('301 status code with no redirect', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 301 }));
      await restClient.Post('https://httpstat.us/301', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      expect(error.status).toBe(301);
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 302 }));
      await restClient.Post('https://httpstat.us/302', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      expect(error.status).toBe(302);
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 303 }));
      await restClient.Post('https://httpstat.us/303', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      expect(error.status).toBe(303);
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 304 }));
      await restClient.Post('https://httpstat.us/304', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect(error.status).toBe(304);
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 305 }));
      await restClient.Post('https://httpstat.us/305', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      expect(error.status).toBe(305);
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 306 }));
      await restClient.Post('https://httpstat.us/306', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      expect(error.status).toBe(306);
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 307 }));
      await restClient.Post('https://httpstat.us/307', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      expect(error.status).toBe(307);
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 308 }));
      await restClient.Post('https://httpstat.us/308', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      expect(error.status).toBe(308);
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 399 }));
      await restClient.Post('https://httpstat.us/399', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.status).toBe(399);
    }
  });

  it('400 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 400 }));
      await restClient.Post('https://httpstat.us/400', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      expect(error.status).toBe(400);
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 401 }));
      await restClient.Post('https://httpstat.us/401', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      expect(error.status).toBe(401);
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 402 }));
      await restClient.Post('https://httpstat.us/402', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      expect(error.status).toBe(402);
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 403 }));
      await restClient.Post('https://httpstat.us/403', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      expect(error.status).toBe(403);
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 404 }));
      await restClient.Post('https://httpstat.us/404', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      expect(error.status).toBe(404);
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 405 }));
      await restClient.Post('https://httpstat.us/405', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      expect(error.status).toBe(405);
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 406 }));
      await restClient.Post('https://httpstat.us/406', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      expect(error.status).toBe(406);
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 407 }));
      await restClient.Post('https://httpstat.us/407', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      expect(error.status).toBe(407);
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 408 }));
      await restClient.Post('https://httpstat.us/408', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      expect(error.status).toBe(408);
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 409 }));
      await restClient.Post('https://httpstat.us/409', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      expect(error.status).toBe(409);
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 410 }));
      await restClient.Post('https://httpstat.us/410', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      expect(error.status).toBe(410);
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 411 }));
      await restClient.Post('https://httpstat.us/411', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      expect(error.status).toBe(411);
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 412 }));
      await restClient.Post('https://httpstat.us/412', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      expect(error.status).toBe(412);
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 413 }));
      await restClient.Post('https://httpstat.us/413', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      expect(error.status).toBe(413);
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 414 }));
      await restClient.Post('https://httpstat.us/414', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      expect(error.status).toBe(414);
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 415 }));
      await restClient.Post('https://httpstat.us/415', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      expect(error.status).toBe(415);
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 416 }));
      await restClient.Post('https://httpstat.us/416', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      expect(error.status).toBe(416);
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 417 }));
      await restClient.Post('https://httpstat.us/417', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      expect(error.status).toBe(417);
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 418 }));
      await restClient.Post('https://httpstat.us/418', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      expect(error.status).toBe(418);
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 421 }));
      await restClient.Post('https://httpstat.us/421', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      expect(error.status).toBe(421);
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 422 }));
      await restClient.Post('https://httpstat.us/422', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      expect(error.status).toBe(422);
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 428 }));
      await restClient.Post('https://httpstat.us/428', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      expect(error.status).toBe(428);
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 429 }));
      await restClient.Post('https://httpstat.us/429', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      expect(error.status).toBe(429);
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 431 }));
      await restClient.Post('https://httpstat.us/431', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      expect(error.status).toBe(431);
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 451 }));
      await restClient.Post('https://httpstat.us/451', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      expect(error.status).toBe(451);
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 499 }));
      await restClient.Post('https://httpstat.us/499', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.status).toBe(499);
    }
  });

  it('500 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 500 }));
      await restClient.Post('https://httpstat.us/500', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      expect(error.status).toBe(500);
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 501 }));
      await restClient.Post('https://httpstat.us/501', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      expect(error.status).toBe(501);
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 502 }));
      await restClient.Post('https://httpstat.us/502', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      expect(error.status).toBe(502);
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 503 }));
      await restClient.Post('https://httpstat.us/503', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      expect(error.status).toBe(503);
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 504 }));
      await restClient.Post('https://httpstat.us/504', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      expect(error.status).toBe(504);
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 505 }));
      await restClient.Post('https://httpstat.us/505', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      expect(error.status).toBe(505);
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 511 }));
      await restClient.Post('https://httpstat.us/511', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      expect(error.status).toBe(511);
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 520 }));
      await restClient.Post('https://httpstat.us/520', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.status).toBe(520);
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 522 }));
      await restClient.Post('https://httpstat.us/522', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      expect(error.status).toBe(522);
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 524 }));
      await restClient.Post('https://httpstat.us/524', payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      expect(error.status).toBe(524);
    }
  });
});
