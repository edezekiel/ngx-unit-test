import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { CharacterFacadeService } from '../services';

@Component({
  selector: 'ngx-inject-mocks-demo',
  template: `
    <h1>Characters</h1>
    <ul>
      <li *ngFor="let character of characters$ | async">
        {{ character.name }}
      </li>
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
})
export class CharactersComponent implements OnInit {
  private readonly _facade = inject(CharacterFacadeService);
  characters$ = this._facade.characters$;

  ngOnInit() {
    this._facade.getCharacter(1).pipe(take(1)).subscribe();
  }
}
