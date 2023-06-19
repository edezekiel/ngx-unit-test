import { HttpClient } from '@angular/common/http';
import { CharacterFacadeService } from './character-facade.service';
import { classWithProviders } from '@ngx-test/inject-mocks';
import { firstValueFrom, of } from 'rxjs';

describe('CharacterFacade', () => {
  let facade: CharacterFacadeService;
  let httpMock: Partial<HttpClient>;

  beforeEach(() => {
    httpMock = { get: jest.fn() };

    facade = classWithProviders({
      token: CharacterFacadeService,
      providers: [{ provide: HttpClient, useValue: httpMock }],
    });
  });

  it('should create', () => {
    expect(facade).toBeTruthy();
  });
  it('should get a Character', async () => {
    // Arrange
    const expected = { id: 1, name: 'mock' };
    jest.spyOn(facade, 'getCharacter').mockReturnValue(of(expected));
    // Act
    const result = await firstValueFrom(facade.getCharacter(1));
    // Assert
    expect(result).toStrictEqual(expected);
  });
});
