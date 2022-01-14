/* eslint-disable no-unused-vars */
import { hasProperty, isNumber } from '@apigames/json';
import {
  IMockRestClient,
  RestClientBaseException,
  RestClientOptions,
  RestClientResponse,
} from '..';

// eslint-disable-next-line no-shadow
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
  private mockResponseQueue: MockResponseQueue;

  constructor() {
    this.mockResponseQueue = [];
  }

  MockResolve(value: RestClientResponse) {
    const params: MockResponseQueueItem = {
      action: MockResponseType.Resolve,
      value,
    };
    this.mockResponseQueue.push(params);

    return this;
  }

  MockReject(value: RestClientBaseException) {
    const params = {
      action: MockResponseType.Reject,
      value,
    };
    this.mockResponseQueue.push(params);

    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  isRestClientResponse(value: any): value is RestClientResponse {
    return (hasProperty(value, 'statusCode') && isNumber(value.statusCode));
  }

  private async ProcessNextMockResponse(methodName: string): Promise<RestClientResponse> {
    if (this.mockResponseQueue.length > 0) {
      const actionParams = this.mockResponseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        if (this.isRestClientResponse(actionParams.value)) return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error(`Please mock the ${methodName}() response document using MockResolve() or MockReject().`);
    }
  }

  async Delete(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    return this.ProcessNextMockResponse('Delete');
  }

  // eslint-disable-next-line no-unused-vars
  async Get(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    return this.ProcessNextMockResponse('Get');
  }

  // eslint-disable-next-line no-unused-vars
  async Head(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    return this.ProcessNextMockResponse('Head');
  }

  // eslint-disable-next-line no-unused-vars
  async Patch(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    return this.ProcessNextMockResponse('Patch');
  }

  // eslint-disable-next-line no-unused-vars
  async Post(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    return this.ProcessNextMockResponse('Post');
  }

  // eslint-disable-next-line no-unused-vars
  async Put(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    return this.ProcessNextMockResponse('Put');
  }

  reset() {
    this.mockResponseQueue = [];
  }
}
