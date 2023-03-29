import { Directive, inject } from '@angular/core';
import { MOCK_TOKEN } from './';

@Directive({
  selector: '[ngxUnitTestMock]',
  standalone: true,
})
export class MockDirective {
  private readonly _emoji = inject(MOCK_TOKEN);

  get emoji() {
    return this._emoji;
  }
}
