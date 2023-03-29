import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { MOCK_TOKEN } from './';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mockGuard: CanActivateFn = (_route, _state) => {
  return inject(MOCK_TOKEN) === '🦚';
};
