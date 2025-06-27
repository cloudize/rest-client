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
} from '../../../../src';

describe('Request should succeed when performing a HEAD on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200, data: '200 OK' });
    const response = await restClient.Head('https://httpstat.us/200', { accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toBe('200 OK');
  });

  it('201 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 201, data: '201 Created' });
    const response = await restClient.Head('https://httpstat.us/201', { accept: '*/*' });
    expect(response.statusCode).toBe(201);
    expect(response.data).toBe('201 Created');
  });

  it('202 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 202, data: '202 Accepted' });
    const response = await restClient.Head('https://httpstat.us/202', { accept: '*/*' });
    expect(response.statusCode).toBe(202);
    expect(response.data).toBe('202 Accepted');
  });

  it('203 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 203, data: '203 Non-Authoritative Information' });
    const response = await restClient.Head('https://httpstat.us/203', { accept: '*/*' });
    expect(response.statusCode).toBe(203);
    expect(response.data).toBe('203 Non-Authoritative Information');
  });

  it('206 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 206, data: '206 Partial Content' });
    const response = await restClient.Head('https://httpstat.us/206', { accept: '*/*' });
    expect(response.statusCode).toBe(206);
    expect(response.data).toBe('206 Partial Content');
  });

  it('299 status code', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 299, data: '299 299 Unknown Code' });
    const response = await restClient.Head('https://httpstat.us/299', { accept: '*/*' });
    expect(response.statusCode).toBe(299);
    expect(response.data).toBe('299 299 Unknown Code');
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/301', { accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/302', { accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/303', { accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/305', { accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/307', { accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new MockRestClient();
    restClient.MockResolve({ statusCode: 200 });
    const response = await restClient.Head('https://httpstat.us/308', { accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });
});

describe('The MockRestClient should throw when a HEAD is performed', () => {
  it('without a response being mocked', async () => {
    try {
      const restClient = new MockRestClient();
      await restClient.Head('https://httpstat.us/301', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Please mock the Head() response document using MockResolve() or MockReject().');
    }
  });

  it('after a mocked result is reset', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 301 }));
      restClient.reset();
      await restClient.Head('https://httpstat.us/301', { accept: '*/*' }, { maxRedirects: 0 });
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
      restClient.MockReject(CreateException({ statusCode: 301 }));
      await restClient.Head('https://httpstat.us/301', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      expect((error as Error301MovedPermanently).status).toBe(301);
      expect((error as Error301MovedPermanently).data).toBeUndefined();
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 302 }));
      await restClient.Head('https://httpstat.us/302', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      expect((error as Error302Found).status).toBe(302);
      expect((error as Error302Found).data).toBeUndefined();
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 303 }));
      await restClient.Head('https://httpstat.us/303', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      expect((error as Error303SeeOther).status).toBe(303);
      expect((error as Error303SeeOther).data).toBeUndefined();
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 304 }));
      await restClient.Head('https://httpstat.us/304', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect((error as Error304NotModified).status).toBe(304);
      expect((error as Error304NotModified).data).toBeUndefined();
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 305 }));
      await restClient.Head('https://httpstat.us/305', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      expect((error as Error305UseProxy).status).toBe(305);
      expect((error as Error305UseProxy).data).toBeUndefined();
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 306 }));
      await restClient.Head('https://httpstat.us/306', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      expect((error as Error306Unused).status).toBe(306);
      expect((error as Error306Unused).data).toBeUndefined();
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 307 }));
      await restClient.Head('https://httpstat.us/307', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      expect((error as Error307TemporaryRedirect).status).toBe(307);
      expect((error as Error307TemporaryRedirect).data).toBeUndefined();
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 308 }));
      await restClient.Head('https://httpstat.us/308', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      expect((error as Error308PermanentRedirect).status).toBe(308);
      expect((error as Error308PermanentRedirect).data).toBeUndefined();
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 399 }));
      await restClient.Head('https://httpstat.us/399', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(399);
      expect((error as Error520WebServerIsReturningAnUnknownError).data).toBeUndefined();
    }
  });

  it('400 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 400 }));
      await restClient.Head('https://httpstat.us/400', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      expect((error as Error400BadRequest).status).toBe(400);
      expect((error as Error400BadRequest).data).toBeUndefined();
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 401 }));
      await restClient.Head('https://httpstat.us/401', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      expect((error as Error401Unauthorized).status).toBe(401);
      expect((error as Error401Unauthorized).data).toBeUndefined();
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 402 }));
      await restClient.Head('https://httpstat.us/402', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      expect((error as Error402PaymentRequired).status).toBe(402);
      expect((error as Error402PaymentRequired).data).toBeUndefined();
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 403 }));
      await restClient.Head('https://httpstat.us/403', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      expect((error as Error403Forbidden).status).toBe(403);
      expect((error as Error403Forbidden).data).toBeUndefined();
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 404 }));
      await restClient.Head('https://httpstat.us/404', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      expect((error as Error404NotFound).status).toBe(404);
      expect((error as Error404NotFound).data).toBeUndefined();
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 405 }));
      await restClient.Head('https://httpstat.us/405', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      expect((error as Error405MethodNotAllowed).status).toBe(405);
      expect((error as Error405MethodNotAllowed).data).toBeUndefined();
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 406 }));
      await restClient.Head('https://httpstat.us/406', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      expect((error as Error406NotAcceptable).status).toBe(406);
      expect((error as Error406NotAcceptable).data).toBeUndefined();
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 407 }));
      await restClient.Head('https://httpstat.us/407', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      expect((error as Error407ProxyAuthenticationRequired).status).toBe(407);
      expect((error as Error407ProxyAuthenticationRequired).data).toBeUndefined();
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 408 }));
      await restClient.Head('https://httpstat.us/408', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      expect((error as Error408RequestTimeout).status).toBe(408);
      expect((error as Error408RequestTimeout).data).toBeUndefined();
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 409 }));
      await restClient.Head('https://httpstat.us/409', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      expect((error as Error409Conflict).status).toBe(409);
      expect((error as Error409Conflict).data).toBeUndefined();
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 410 }));
      await restClient.Head('https://httpstat.us/410', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      expect((error as Error410Gone).status).toBe(410);
      expect((error as Error410Gone).data).toBeUndefined();
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 411 }));
      await restClient.Head('https://httpstat.us/411', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      expect((error as Error411LengthRequired).status).toBe(411);
      expect((error as Error411LengthRequired).data).toBeUndefined();
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 412 }));
      await restClient.Head('https://httpstat.us/412', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      expect((error as Error412PreconditionFailed).status).toBe(412);
      expect((error as Error412PreconditionFailed).data).toBeUndefined();
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 413 }));
      await restClient.Head('https://httpstat.us/413', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      expect((error as Error413RequestEntityTooLarge).status).toBe(413);
      expect((error as Error413RequestEntityTooLarge).data).toBeUndefined();
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 414 }));
      await restClient.Head('https://httpstat.us/414', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      expect((error as Error414RequestURITooLong).status).toBe(414);
      expect((error as Error414RequestURITooLong).data).toBeUndefined();
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 415 }));
      await restClient.Head('https://httpstat.us/415', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      expect((error as Error415UnsupportedMediaType).status).toBe(415);
      expect((error as Error415UnsupportedMediaType).data).toBeUndefined();
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 416 }));
      await restClient.Head('https://httpstat.us/416', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      expect((error as Error416RequestedRangeNotSatisfiable).status).toBe(416);
      expect((error as Error416RequestedRangeNotSatisfiable).data).toBeUndefined();
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 417 }));
      await restClient.Head('https://httpstat.us/417', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      expect((error as Error417ExpectationFailed).status).toBe(417);
      expect((error as Error417ExpectationFailed).data).toBeUndefined();
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 418 }));
      await restClient.Head('https://httpstat.us/418', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      expect((error as Error418ImaTeapot).status).toBe(418);
      expect((error as Error418ImaTeapot).data).toBeUndefined();
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 421 }));
      await restClient.Head('https://httpstat.us/421', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      expect((error as Error421MisdirectedRequest).status).toBe(421);
      expect((error as Error421MisdirectedRequest).data).toBeUndefined();
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 422 }));
      await restClient.Head('https://httpstat.us/422', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      expect((error as Error422UnprocessableEntity).status).toBe(422);
      expect((error as Error422UnprocessableEntity).data).toBeUndefined();
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 428 }));
      await restClient.Head('https://httpstat.us/428', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      expect((error as Error428PreconditionRequired).status).toBe(428);
      expect((error as Error428PreconditionRequired).data).toBeUndefined();
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 429 }));
      await restClient.Head('https://httpstat.us/429', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      expect((error as Error429TooManyRequests).status).toBe(429);
      expect((error as Error429TooManyRequests).data).toBeUndefined();
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 431 }));
      await restClient.Head('https://httpstat.us/431', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      expect((error as Error431RequestHeaderFieldsTooLarge).status).toBe(431);
      expect((error as Error431RequestHeaderFieldsTooLarge).data).toBeUndefined();
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 451 }));
      await restClient.Head('https://httpstat.us/451', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      expect((error as Error451UnavailableForLegalReasons).status).toBe(451);
      expect((error as Error451UnavailableForLegalReasons).data).toBeUndefined();
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 499 }));
      await restClient.Head('https://httpstat.us/499', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(499);
      expect((error as Error520WebServerIsReturningAnUnknownError).data).toBeUndefined();
    }
  });

  it('500 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 500 }));
      await restClient.Head('https://httpstat.us/500', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      expect((error as Error500InternalServerError).status).toBe(500);
      expect((error as Error500InternalServerError).data).toBeUndefined();
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 501 }));
      await restClient.Head('https://httpstat.us/501', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      expect((error as Error501NotImplemented).status).toBe(501);
      expect((error as Error501NotImplemented).data).toBeUndefined();
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 502 }));
      await restClient.Head('https://httpstat.us/502', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      expect((error as Error502BadGateway).status).toBe(502);
      expect((error as Error502BadGateway).data).toBeUndefined();
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 503 }));
      await restClient.Head('https://httpstat.us/503', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      expect((error as Error503ServiceUnavailable).status).toBe(503);
      expect((error as Error503ServiceUnavailable).data).toBeUndefined();
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 504 }));
      await restClient.Head('https://httpstat.us/504', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      expect((error as Error504GatewayTimeout).status).toBe(504);
      expect((error as Error504GatewayTimeout).data).toBeUndefined();
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 505 }));
      await restClient.Head('https://httpstat.us/505', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      expect((error as Error505HTTPVersionNotSupported).status).toBe(505);
      expect((error as Error505HTTPVersionNotSupported).data).toBeUndefined();
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 511 }));
      await restClient.Head('https://httpstat.us/511', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      expect((error as Error511NetworkAuthenticationRequired).status).toBe(511);
      expect((error as Error511NetworkAuthenticationRequired).data).toBeUndefined();
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 520 }));
      await restClient.Head('https://httpstat.us/520', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(520);
      expect((error as Error520WebServerIsReturningAnUnknownError).data).toBeUndefined();
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 522 }));
      await restClient.Head('https://httpstat.us/522', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      expect((error as Error522ConnectionTimedOut).status).toBe(522);
      expect((error as Error522ConnectionTimedOut).data).toBeUndefined();
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new MockRestClient();
      restClient.MockReject(CreateException({ statusCode: 524 }));
      await restClient.Head('https://httpstat.us/524', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      expect((error as Error524ATimeoutOccurred).status).toBe(524);
      expect((error as Error524ATimeoutOccurred).data).toBeUndefined();
    }
  });
});
