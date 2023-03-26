import { HttpClient } from '@angular/common/http';
import { runFnInContext } from '@ngx-test/inject-mocks';
import { getCharacter } from './get-character';

describe('getCharacter()', () => {
  it('should invoke HttpClient.get', () => {
    // Arrange
    const id = 1;
    const httpMock: Partial<HttpClient> = { get: jest.fn() };
    const providers = [{ provide: HttpClient, useValue: httpMock }];
    // Act
    runFnInContext(providers)(() => getCharacter(id));
    // Assert
    expect(httpMock.get).toBeCalled();
    expect(httpMock.get).toBeCalledWith(`https://swapi.dev/api/people/${id}/`);
  });
});
