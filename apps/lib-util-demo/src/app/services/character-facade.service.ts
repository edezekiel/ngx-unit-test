import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Character } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CharacterFacadeService {
  private readonly _characters$$ = new BehaviorSubject<Character[]>([]);
  characters$ = this._characters$$.asObservable();
  private readonly _http = inject(HttpClient);

  setCharacters(characters: Character[]) {
    this._characters$$.next(characters);
  }

  getCharacter(id: number) {
    return this._http
      .get<Character>(`https://swapi.dev/api/people/${id}/`)
      .pipe(
        tap((character: Character) =>
          this.setCharacters([...this._characters$$.value, character])
        )
      );
  }
}
