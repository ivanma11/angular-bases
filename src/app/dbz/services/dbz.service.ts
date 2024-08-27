
import { Injectable } from '@angular/core';

import { v4 as nombreCambiadoV4 } from "uuid";

console.log(nombreCambiadoV4());

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[] =[
    {
      id:nombreCambiadoV4(),
      name:'Krillin',
      power:1000
    },
    {
      id:nombreCambiadoV4(),
      name:'Goku',
      power:9500
    },
    {
      id:nombreCambiadoV4(),
      name:'Vegeta',
      power:7500
    }
  ];

  addCharacter( character: Character ):void {
    const newCharacter:Character = {id: nombreCambiadoV4(), ...character}
    this.character.push(newCharacter);
  }

  // onDeleteCharacter(index:number) {
  //   this.character.splice(index,1);
  deleteCharacterById(id?:string) {
    if(!id) return;
    this.character = this.character.filter( character => character.id != id);
  }


}
