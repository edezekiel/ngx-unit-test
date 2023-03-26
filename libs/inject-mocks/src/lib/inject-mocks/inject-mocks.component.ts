import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-inject-mocks-inject-mocks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inject-mocks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InjectMocksComponent {}
