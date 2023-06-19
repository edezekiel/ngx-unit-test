# @ngx-unit-test/inject-mocks

> A utility library for injecting mocked dependencies in Angular

## Installation

Install "@ngx-unit-test/inject-mocks" in your Angular project using the command:

`npm i @ngx-unit-test/inject-mocks --save-dev`

## Usage

The "@ngx-unit-test/inject-mocks" library provides two utility functions - `classWithProviders` and `runFnInContext` - that make it easy to inject mocked values into Angular classes and functions.

### Testing Classes: classWithProviders

The `classWithProviders` utility function injects mocked providers into a given class. To use this function, pass in a configuration object with a `token` property set to the target class and a `providers` property set to an array of mocked providers that you want to inject into the class. The `classWithProviders` function then automatically injects these mocks into the class and returns the modified class with the dependencies replaced by the mocked providers.

Here is an example:

```typescript
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmojiService {
  emoji = '🐧';
}
```

```typescript
import { Component, inject } from '@angular/core';
import { EmojiService } from './emoji.service';

@Component({
  selector: 'ngx-unit-test-emoji',
  template: ` <p>Tweet Tweet {{ emoji }}</p> `,
})
export class EmojiComponent implements OnInit {
  readonly emoji = inject(EmojiService).emoji;
}
```

```typescript
import { classWithProviders } from '@ngx-test/inject-mocks';

it('should inject mocks into a Component', () => {
  // Arrange
  const emoji = '🐦';
  const serviceMock: Partial<EmojiService> = { emoji };
  const component = classWithProviders({
    token: EmojiComponent,
    providers: [{ provide: EmojiService, useValue: serviceMock }],
  });
  // Act
  component.ngOnInit();
  // Assert
  expect(component.emoji).toBe(emoji);
});
```

The `classWithProviders` utility can be used with Components, Directives, Pipes, Services, and any other Angular class that can use the `inject` function. It also works with classes that use constructor-based dependency injection.

## Testing Functions: runFnInContext

The `runFnInContext` function takes an array of mocked providers, and executes the function with the specified providers injected.

Here is an example:

```typescript
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export function injectHttpClient(): HttpClient {
  return inject(HttpClient);
}
```

```typescript
import { HttpClient } from '@angular/common/http';
import { runFnInContext } from '@ngx-test/inject-mocks';
import { injectHttpClient } from './inject-http-client';

describe('injectHttpClient()', () => {
  let httpMock: Partial<HttpClient>;
  let httpClient: HttpClient;

  beforeEach(() => {
    httpMock = { get: jest.fn() };
    const providers = [{ provide: HttpClient, useValue: httpMock }];
    httpClient = runFnInContext(providers, () => injectHttpClient());
  });

  it('should inject HttpClient', () => {
    expect(httpClient).toBeTruthy;
  });

  it('should invoke http.get', () => {
    // Arrange
    const mockUrl = 'mockUrl';
    const spy = jest.spyOn(httpMock, 'get');
    //Act
    httpClient.get(mockUrl);
    // Assert
    expect(spy).toBeCalledWith(mockUrl);
  });
});
```
