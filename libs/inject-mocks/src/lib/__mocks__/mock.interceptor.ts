import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import MOCK_TOKEN from './mock.token';

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  const emoji = inject(MOCK_TOKEN);
  req.headers.append('emoji', emoji);
  return next(req);
};
