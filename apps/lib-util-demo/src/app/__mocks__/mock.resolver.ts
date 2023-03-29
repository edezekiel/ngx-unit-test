import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MOCK_TOKEN } from './';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mockResolver: ResolveFn<boolean> = (_route, _state) => {
  return inject(MOCK_TOKEN) === '🦚';
};
