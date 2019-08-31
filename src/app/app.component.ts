import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //adicionamos na aula 30/08/2019

  altura  = 1.70
  peso = 70
  resultado = 'imc'
  altural = 'Peso: 1.70'
  pesot = 'Peso: 70'

  imc():void { 
    let imc = this.peso/(this.altura * this.altura)
    alert('imc: '+ imc );  
  }
}
