import {
  RestClient,
  NetworkConnectionException,
} from '../../../../src';

describe('Request should throw when performing a GET on', () => {
  it('an invalid URI', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Get('https://invalid.uri.cloudize.net/301', { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(NetworkConnectionException);
    }
  });
});
