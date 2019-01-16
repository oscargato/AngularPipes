import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Fernando";
  nombre2 = "osCar joSe meJIa ferNAdez";
  arreglo = [1,2,3,4,5,6,7,8,9,0];
  Pi = Math.PI;
  a = 0.234;
  salario = 1234.5

  heroe = {
  	nombre: "Logan",
  	clave: "Wolverine",
  	edad: 500,
  	direccion:{
  		calle: "Primera",
  		casa: "19"
  	}
  }

  valorDePromesa = new Promise( (resolve,reject)=>{
  	setTimeout(()=>resolve('Llego la Data!!!'),3500);
  });

  fecha = new Date();

  video = "https://www.youtube.com/watch?v=eh8eb_ACLl8&start_radio=1&list=RDeh8eb_ACLl8";

  activar:boolean = true;
}
