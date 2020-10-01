const {
  RestClient,
  NetworkConnectionException,
} = require('../../../../lib');

describe('Request should throw when performing a GET on', () => {
  it('an invalid URI', async () => {
    try {
      const restClient = new RestClient();
      await restClient.get('https://invalid.api.games/301', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(NetworkConnectionException);
    }
  });
});
