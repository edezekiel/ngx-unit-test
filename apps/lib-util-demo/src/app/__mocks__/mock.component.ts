import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { injectChangeDetectorRef } from './mock-di-function';
import { MockService } from './mock.service';

@Component({
  selector: 'ngx-unit-test-mock',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>mock works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MockComponent implements OnInit {
  private readonly _cdr = injectChangeDetectorRef();
  private readonly _emoji = inject(MockService).emoji;

  get emoji() {
    return this._emoji;
  }

  ngOnInit() {
    this._cdr.detectChanges();
  }
}
