export default class NetworkConnectionException extends Error {
  constructor(uri: string) {
    super(`Failed to connect to ${uri}`);
    this.name = 'RestClientNetworkConnectionException';
  }
}
