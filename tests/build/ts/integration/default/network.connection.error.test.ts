import {
  RestClient,
  NetworkConnectionException,
} from '../../../../../lib';

describe('Request should throw when performing a GET on', () => {
  it('an invalid URI', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Get('https://invalid.uri.cloudize.net/301', { accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(NetworkConnectionException);
    }
  });
});
