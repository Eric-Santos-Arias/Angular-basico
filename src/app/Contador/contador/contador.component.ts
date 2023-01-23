import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',

})
    

export class ContadorComponent{
    title:string = 'Contador';
    contador:number = 10;
    
    operacion(numero:number):void{
        this.contador += numero;
    }

}
   
