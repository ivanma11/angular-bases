import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:number = 24;

  //metodo, pero se usa como propiedad, basicamente es una propiedad
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  //metodo
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  //cambia el nombre del heroe
  changeHero():void {
    //las siguientes dos lineas es un ejemplo para cuando nomas declare el metodo para hacerlo despues
    //TODO:
    // throw 'metodo no implementados'

    this.name = 'spiderman';
  }
  //cambia la edad
  changeAge():void {
    this.age = 30;
  }

  restForm():void {
    this.name = 'ironman';
    this.age = 24;
  }

}
