import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MOCK_TOKEN } from './';

export const mockResolver: ResolveFn<boolean> = (route, state) => {
  return inject(MOCK_TOKEN) === '🦚';
};
