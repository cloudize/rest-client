import { isEmpty, isString } from '@apigames/json';
import {
  RestClient,
} from '../../../../src';

describe('Request should resolve when performing a GET on a google endpoint', () => {
  it('200 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Get('https://www.google.com/search', { accept: '*/*' }, { queryParams: { q: 'test' } });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).not.toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
    expect(response.data).toBeDefined();
  });
});
