import NetworkConnectionException from './network.connection.exception';

export default function ThrowNetworkConnectionException(uri: string) {
  throw new NetworkConnectionException(uri);
}
