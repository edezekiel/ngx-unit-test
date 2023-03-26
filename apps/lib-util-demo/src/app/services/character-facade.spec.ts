import { CharacterFacadeService } from './character-facade.service';

describe('CharacterFacade', () => {
  let facade: Partial<CharacterFacadeService>;

  beforeEach(() => {
    facade = new CharacterFacadeService();
  });

  it('should create', () => {
    expect(facade).toBeTruthy();
  });
});
