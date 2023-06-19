import { Injectable } from '@angular/core';
import { injectHttpClient } from '../di-functions';
import { Character } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CharacterFacadeService {
  private readonly _http = injectHttpClient();

  getCharacter(id: number) {
    return this._http.get<Character>(`https://swapi.dev/api/people/${id}/`);
  }
}
