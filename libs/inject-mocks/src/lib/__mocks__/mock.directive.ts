import { Directive, inject } from '@angular/core';
import MOCK_TOKEN from './mock.token';

@Directive({
  selector: '[ngxInjectMocksMock]',
  standalone: true,
})
export class MockDirective {
  private readonly _emoji = inject(MOCK_TOKEN);

  get emoji() {
    return this._emoji
  }
}
