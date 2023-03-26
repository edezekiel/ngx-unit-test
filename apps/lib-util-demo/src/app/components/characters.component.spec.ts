import { classWithProviders } from '@ngx-test/inject-mocks';
import { BehaviorSubject } from 'rxjs';
import { CharacterFacadeService } from '../services';
import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let facadeMock: Partial<CharacterFacadeService>;

  beforeEach(() => {
    facadeMock = {
      characters$: new BehaviorSubject([]),
      getCharacter: jest.fn(),
    };
    component = classWithProviders({
      token: CharactersComponent,
      providers: [{ provide: CharacterFacadeService, useValue: facadeMock }],
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
