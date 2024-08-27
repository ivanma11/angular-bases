

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private DbzService: DbzService){}

  get characters(): Character[] {
    return [...this.DbzService.character];
  }

  onDeleteCharacter(id:string):void {
    this.DbzService.deleteCharacterById(id)
  }

  onNewCharacter(character:Character):void {
    this.DbzService.addCharacter(character);
  }

}
