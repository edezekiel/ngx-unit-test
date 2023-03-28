import { inject, Injectable } from '@angular/core';
import { MockClass } from './mock-class';

@Injectable()
export class MockService {
  private readonly _emoji = inject(MockClass).emoji;
  get emoji() {
    return this._emoji
  }
}
