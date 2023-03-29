import { inject, Pipe, PipeTransform } from '@angular/core';
import { MockClass } from './mock-class';

@Pipe({
  name: 'mock',
  standalone: true,
})
export class MockPipe implements PipeTransform {
  private readonly _emoji = inject(MockClass).emoji;

  transform(value: string): string {
    return `${this._emoji} says: ${value}`;
  }
}
