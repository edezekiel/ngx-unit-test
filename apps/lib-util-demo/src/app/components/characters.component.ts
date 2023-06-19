import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CharacterFacadeService } from '../services';

@Component({
  selector: 'ngx-unit-test-demo',
  template: `
    <h1>Character</h1>
    <ul>
      <li>
        {{ (character$ | async)?.name }}
      </li>
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
})
export class CharactersComponent {
  private readonly _facade = inject(CharacterFacadeService)
  readonly character$ = this._facade.getCharacter(1);
}
