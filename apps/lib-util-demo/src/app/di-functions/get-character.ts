import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../types';

export const getCharacter = (id: number): Observable<Character> => {
  return inject(HttpClient).get<Character>(
    `https://swapi.dev/api/people/${id}/`
  );
};
