# NgxUnit Test

> A lightweight utility to easily unit test any Angular class or function

## NPM Installation

`npm install @ngx-unit-test/inject-mocks --save-dev`

## Testing Classes

Example Component:

```typescript
@Component({
  selector: 'ngx-inject-mocks-mock',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>mock works!</p> `,
})
export class MockComponent implements OnInit {
  private readonly _emoji = inject(MockService).emoji;

  get emoji() {
    return this._emoji;
  }
}
```

Import the `classWithProviders` utility into the Component's spec file. Create
mock(s) (e.g., `serviceMock`). Pass the Component token and mocked dependencies
to the `classWithProviders` utility to inject pmocked dependencies.

```typescript
import { classWithProviders } from '@ngx-test/inject-mocks';

it('should inject mocks into a Component', () => {
  // Arrange
  const emoji = '🐦';
  const serviceMock: Partial<MockService> = {
    emoji,
  };
  const component = classWithProviders({
    token: MockComponent,
    providers: [{ provide: MockService, useValue: serviceMock }],
  });
  // Act
  component.ngOnInit();
  // Assert
  expect(component.emoji).toBe(emoji);
});
```

This pattern applies to Components, Directives, Pipes, Services, and any other
Angular class that can use the `inject` function. This also works with classes
that use constructor-based dependency injection.

## Testing Functions

Example DI Function:

```typescript
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export function injectHttpClient(): HttpClient {
  return inject(HttpClient);
}
```

Import the `runFnInContext` utility from '@ngx-test/inject-mocks' into the
DI Function spec file. Create mock providers (e.g., `httpMock`). Pass
the mocked providers to the `runFnInContext` utility and invoke the callback
method to run the DI Function with injected mocks.

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
    httpClient = runFnInContext(providers)(() => injectHttpClient());
  });

  it('should inject HttpClient', () => {
    expect(httpClient).toBeTruthy;
  });

  it('should invoke http.get', () => {
    // Arrange
    const mockUrl = 'mockUrl'
    const spy = jest.spyOn(httpMock, 'get');
    //Act
    httpClient.get(mockUrl);
    // Assert
    expect(spy).toBeCalledWith(mockUrl);
  });
});

```
