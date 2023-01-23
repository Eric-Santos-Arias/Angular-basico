import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
    title:string='Heroes'
    heroes:string[] = ['Ironman','Superman','Batman','Thor','Hulk']
    heroeBorrado:string= ''

    borrar():void{
     this.heroeBorrado =  this.heroes.shift ()|| '';
    }
}
