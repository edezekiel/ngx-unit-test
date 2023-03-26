import { NxWelcomeComponent } from './nx-welcome.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'ngx-inject-mocks-root',
  template: ` <ngx-inject-mocks-nx-welcome></ngx-inject-mocks-nx-welcome> `,
  styles: [],
})
export class AppComponent {
  title = 'lib-util-demo';
}
