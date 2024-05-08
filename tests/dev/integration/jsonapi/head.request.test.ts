import { isEmpty } from '@cloudize/json';
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

const hostName = 'http://127.0.0.1:3000';

describe('Request should succeed when performing a HEAD on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/200`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('200 status code from a slow endpoint when the timeout option allows', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/slow`, { Accept: 'application/vnd.api+json' }, { timeoutMs: 5000 });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('201 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/201`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(201);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('202 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/202`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(202);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('203 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/203`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(203);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('206 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/206`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(206);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/301`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/302`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/303`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/305`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/307`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Head(`${hostName}/308`, { Accept: 'application/vnd.api+json' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('Cloudize HTTP Status Service');
    expect(response.headers['content-type']).toContain('application/vnd.api+json');
    expect(response.data).toBeUndefined();
  });
});

describe('Request should fail and throw when performing a HEAD on an endpoint that returns a', () => {
  it('200 status code from a slow endpoint when the timeout is set to a low value', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/slow`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0, timeoutMs: 1000 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(NetworkConnectionException);
    }
  });

  it('299 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/299`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      await restClient.Head(`${hostName}/301`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      expect((error as Error301MovedPermanently).status).toBe(301);
      expect((error as Error301MovedPermanently).errorCount).toBe(0);
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/302`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      expect((error as Error302Found).status).toBe(302);
      expect((error as Error302Found).errorCount).toBe(0);
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/303`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      expect((error as Error303SeeOther).status).toBe(303);
      expect((error as Error303SeeOther).errorCount).toBe(0);
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/304`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect((error as Error304NotModified).status).toBe(304);
      expect((error as Error304NotModified).errorCount).toBe(0);
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/305`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      expect((error as Error305UseProxy).status).toBe(305);
      expect((error as Error305UseProxy).errorCount).toBe(0);
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/306`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      expect((error as Error306Unused).status).toBe(306);
      expect((error as Error306Unused).errorCount).toBe(0);
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/307`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      expect((error as Error307TemporaryRedirect).status).toBe(307);
      expect((error as Error307TemporaryRedirect).errorCount).toBe(0);
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/308`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      expect((error as Error308PermanentRedirect).status).toBe(308);
      expect((error as Error308PermanentRedirect).errorCount).toBe(0);
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/399`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      await restClient.Head(`${hostName}/400`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      expect((error as Error400BadRequest).status).toBe(400);
      expect((error as Error400BadRequest).errorCount).toBe(0);
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/401`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      expect((error as Error401Unauthorized).status).toBe(401);
      expect((error as Error401Unauthorized).errorCount).toBe(0);
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/402`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      expect((error as Error402PaymentRequired).status).toBe(402);
      expect((error as Error402PaymentRequired).errorCount).toBe(0);
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/403`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      expect((error as Error403Forbidden).status).toBe(403);
      expect((error as Error403Forbidden).errorCount).toBe(0);
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/404`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      expect((error as Error404NotFound).status).toBe(404);
      expect((error as Error404NotFound).errorCount).toBe(0);
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/405`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      expect((error as Error405MethodNotAllowed).status).toBe(405);
      expect((error as Error405MethodNotAllowed).errorCount).toBe(0);
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/406`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      expect((error as Error406NotAcceptable).status).toBe(406);
      expect((error as Error406NotAcceptable).errorCount).toBe(0);
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/407`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      expect((error as Error407ProxyAuthenticationRequired).status).toBe(407);
      expect((error as Error407ProxyAuthenticationRequired).errorCount).toBe(0);
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/408`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      expect((error as Error408RequestTimeout).status).toBe(408);
      expect((error as Error408RequestTimeout).errorCount).toBe(0);
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/409`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      expect((error as Error409Conflict).status).toBe(409);
      expect((error as Error409Conflict).errorCount).toBe(0);
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/410`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      expect((error as Error410Gone).status).toBe(410);
      expect((error as Error410Gone).errorCount).toBe(0);
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/411`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      expect((error as Error411LengthRequired).status).toBe(411);
      expect((error as Error411LengthRequired).errorCount).toBe(0);
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/412`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      expect((error as Error412PreconditionFailed).status).toBe(412);
      expect((error as Error412PreconditionFailed).errorCount).toBe(0);
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/413`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      expect((error as Error413RequestEntityTooLarge).status).toBe(413);
      expect((error as Error413RequestEntityTooLarge).errorCount).toBe(0);
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/414`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      expect((error as Error414RequestURITooLong).status).toBe(414);
      expect((error as Error414RequestURITooLong).errorCount).toBe(0);
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/415`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      expect((error as Error415UnsupportedMediaType).status).toBe(415);
      expect((error as Error415UnsupportedMediaType).errorCount).toBe(0);
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/416`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      expect((error as Error416RequestedRangeNotSatisfiable).status).toBe(416);
      expect((error as Error416RequestedRangeNotSatisfiable).errorCount).toBe(0);
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/417`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      expect((error as Error417ExpectationFailed).status).toBe(417);
      expect((error as Error417ExpectationFailed).errorCount).toBe(0);
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/418`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      expect((error as Error418ImaTeapot).status).toBe(418);
      expect((error as Error418ImaTeapot).errorCount).toBe(0);
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/421`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      expect((error as Error421MisdirectedRequest).status).toBe(421);
      expect((error as Error421MisdirectedRequest).errorCount).toBe(0);
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/422`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      expect((error as Error422UnprocessableEntity).status).toBe(422);
      expect((error as Error422UnprocessableEntity).errorCount).toBe(0);
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/428`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      expect((error as Error428PreconditionRequired).status).toBe(428);
      expect((error as Error428PreconditionRequired).errorCount).toBe(0);
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/429`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      expect((error as Error429TooManyRequests).status).toBe(429);
      expect((error as Error429TooManyRequests).errorCount).toBe(0);
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/431`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      expect((error as Error431RequestHeaderFieldsTooLarge).status).toBe(431);
      expect((error as Error431RequestHeaderFieldsTooLarge).errorCount).toBe(0);
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/451`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      expect((error as Error451UnavailableForLegalReasons).status).toBe(451);
      expect((error as Error451UnavailableForLegalReasons).errorCount).toBe(0);
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/499`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
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
      await restClient.Head(`${hostName}/500`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      expect((error as Error500InternalServerError).status).toBe(500);
      expect((error as Error500InternalServerError).errorCount).toBe(0);
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/501`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      expect((error as Error501NotImplemented).status).toBe(501);
      expect((error as Error501NotImplemented).errorCount).toBe(0);
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/502`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      expect((error as Error502BadGateway).status).toBe(502);
      expect((error as Error502BadGateway).errorCount).toBe(0);
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/503`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      expect((error as Error503ServiceUnavailable).status).toBe(503);
      expect((error as Error503ServiceUnavailable).errorCount).toBe(0);
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/504`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      expect((error as Error504GatewayTimeout).status).toBe(504);
      expect((error as Error504GatewayTimeout).errorCount).toBe(0);
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/505`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      expect((error as Error505HTTPVersionNotSupported).status).toBe(505);
      expect((error as Error505HTTPVersionNotSupported).errorCount).toBe(0);
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/511`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      expect((error as Error511NetworkAuthenticationRequired).status).toBe(511);
      expect((error as Error511NetworkAuthenticationRequired).errorCount).toBe(0);
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/520`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(520);
      expect((error as Error520WebServerIsReturningAnUnknownError).errorCount).toBe(0);
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/522`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      expect((error as Error522ConnectionTimedOut).status).toBe(522);
      expect((error as Error522ConnectionTimedOut).errorCount).toBe(0);
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Head(`${hostName}/524`, { Accept: 'application/vnd.api+json' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      expect((error as Error524ATimeoutOccurred).status).toBe(524);
      expect((error as Error524ATimeoutOccurred).errorCount).toBe(0);
    }
  });
});
