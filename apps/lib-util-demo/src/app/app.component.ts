import { Component } from '@angular/core';
import { CharactersComponent } from './components';

@Component({
  standalone: true,
  imports: [CharactersComponent],
  selector: 'ngx-inject-mocks-root',
  template: ` <ngx-inject-mocks-demo></ngx-inject-mocks-demo> `,
  styles: [],
})
export class AppComponent {
  title = 'lib-util-demo';
}
