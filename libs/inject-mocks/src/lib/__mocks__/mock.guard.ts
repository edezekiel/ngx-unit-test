import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { MOCK_TOKEN } from './';

export const mockGuard: CanActivateFn = (route, state) => {
  return inject(MOCK_TOKEN) === '🦚';
};
