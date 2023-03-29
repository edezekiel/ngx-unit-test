import { Component } from '@angular/core';
import { CharactersComponent } from './components';

@Component({
  standalone: true,
  imports: [CharactersComponent],
  selector: 'ngx-unit-test-root',
  template: ` <ngx-unit-test-demo></ngx-unit-test-demo> `,
  styles: [],
})
export class AppComponent {
  title = 'lib-util-demo';
}
