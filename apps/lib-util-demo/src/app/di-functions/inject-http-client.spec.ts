import { HttpClient } from '@angular/common/http';
import { runFnInContext } from '@ngx-test/inject-mocks';
import { injectHttpClient } from './inject-http-client';

describe('injectHttpClient()', () => {
  let httpMock: Partial<HttpClient>;
  let httpClient: HttpClient;
  beforeEach(() => {
    httpMock = { get: jest.fn() };
    const providers = [{ provide: HttpClient, useValue: httpMock }];
    httpClient = runFnInContext(providers)(() => injectHttpClient());
  });
  it('should inject HttpClient', () => {
    expect(httpClient).toBeTruthy;
  });
  it('should invoke http.get', () => {
    // Arrange
    const spy = jest.spyOn(httpMock, 'get');
    //Act
    httpClient.get('mockUrl');
    // Assert
    expect(spy).toBeCalledWith('mockUrl');
  });
});
