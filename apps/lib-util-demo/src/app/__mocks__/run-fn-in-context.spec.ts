import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { runFnInContext } from '@ngx-test/inject-mocks';
import { of } from 'rxjs';
import {
  injectChangeDetectorRef,
  mockGuard,
  mockInterceptor,
  mockResolver,
  MOCK_TOKEN,
} from './';

describe('runFnInContext', () => {
  it('should inject mocks into a DI function', () => {
    // Arrange
    const cdrMock = { detectChanges: jest.fn() };
    const providers = [{ provide: ChangeDetectorRef, useValue: cdrMock }];
    const cdr = runFnInContext(providers, injectChangeDetectorRef);
    // Act
    cdr.detectChanges();
    // Assert
    expect(cdrMock.detectChanges).toBeCalled();
  });
  it('should inject mocks into a Guard', () => {
    // Arrange
    const tokenMock = '🦃';
    const providers = [{ provide: MOCK_TOKEN, useValue: tokenMock }];
    const route = new ActivatedRouteSnapshot();
    const state = { url: '', root: route };
    const result = runFnInContext(providers, () => mockGuard(route, state));
    // Assert
    expect(result).toBe(false);
  });
  it('should inject mocks into an Interceptor', () => {
    // Arrange
    const tokenMock = '🦉';
    const providers = [{ provide: MOCK_TOKEN, useValue: tokenMock }];
    const req = { headers: { append: jest.fn() } };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const next = (req: HttpRequest<any>) => of({});
    // Act
    runFnInContext(providers, () =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockInterceptor(req as any, next as HttpHandlerFn)
    );
    // Assert
    expect(req.headers.append).toBeCalledWith('emoji', tokenMock);
  });
  it('should inject mocks into a Resolver', () => {
    const tokenMock = '🕊️';
    const providers = [{ provide: MOCK_TOKEN, useValue: tokenMock }];
    const route = new ActivatedRouteSnapshot();
    const state = { url: '', root: route };
    // Act
    const result = runFnInContext(providers, () => mockResolver(route, state));
    // Assert
    expect(result).toBe(false);
  });
});
