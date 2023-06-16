import { classWithProviders } from '@ngx-test/inject-mocks';
import { CharacterFacadeService } from '../services';
import { CharactersComponent } from './characters.component';
import { firstValueFrom, of } from 'rxjs';

describe('CharactersComponent', () => {
  it('should create', () => {
    const facadeMock = {
      getCharacter: jest.fn(),
    };
    const component = classWithProviders({
      token: CharactersComponent,
      providers: [{ provide: CharacterFacadeService, useValue: facadeMock }],
    });

    expect(component).toBeTruthy();
  });
  it('should get a Character', async () => {
    // Arrange
    const expected = { id: 1, name: 'mock' };
    const facadeMock = {
      getCharacter: () => of(expected),
    };
    const component = classWithProviders({
      token: CharactersComponent,
      providers: [{ provide: CharacterFacadeService, useValue: facadeMock }],
    });
    // Act
    const result = await firstValueFrom(component.character$);
    // Assert
    expect(result).toStrictEqual(expected);
  });
});
