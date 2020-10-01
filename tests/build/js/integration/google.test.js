const { RestClient } = require('../../../../lib');

describe('Request should resolve when performing a GET on a google endpoint', () => {
  it('200 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.get('https://www.google.com/search', { Accept: '*/*' }, { queryParams: { q: 'test' } });
    expect(response.statusCode).toBe(200);
    expect(response.data).toBeDefined();
  });
});
