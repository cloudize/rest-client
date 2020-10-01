import {
  IMockRestClient,
  RestClientBaseException,
  RestClientOptions,
  RestClientResponse,
} from '..';

enum MockResponseType {
  Resolve,
  Reject
}

type MockResponseQueueItem = {
  action: MockResponseType,
  value: RestClientResponse | RestClientBaseException,
}

type MockResponseQueue = Array<MockResponseQueueItem>;

export default class MockRestClient implements IMockRestClient {
  private _responseQueue: MockResponseQueue;

  constructor() {
    this._responseQueue = [];
  }

  mockResolve(value: RestClientResponse) {
    const params: MockResponseQueueItem = {
      action: MockResponseType.Resolve,
      value,
    };
    this._responseQueue.push(params);

    return this;
  }

  mockReject(value: RestClientBaseException) {
    const params = {
      action: MockResponseType.Reject,
      value,
    };
    this._responseQueue.push(params);

    return this;
  }

  // eslint-disable-next-line no-unused-vars
  async delete(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
    if (this._responseQueue.length > 0) {
      const actionParams = this._responseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the delete() response document using mockResolve() or mockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async get(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
    if (this._responseQueue.length > 0) {
      const actionParams = this._responseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the get() response document using mockResolve() or mockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async head(uri: string, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
    if (this._responseQueue.length > 0) {
      const actionParams = this._responseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the head() response document using mockResolve() or mockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async patch(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
    if (this._responseQueue.length > 0) {
      const actionParams = this._responseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the patch() response document using mockResolve() or mockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async post(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
    if (this._responseQueue.length > 0) {
      const actionParams = this._responseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the post() response document using mockResolve() or mockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async put(uri: string, payload: any, headers?: object, options?: RestClientOptions): Promise<RestClientResponse> {
    if (this._responseQueue.length > 0) {
      const actionParams = this._responseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the put() response document using mockResolve() or mockReject().');
    }
  }

  reset() {
    this._responseQueue = [];
  }
}
