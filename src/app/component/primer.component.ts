import { Component } from '@angular/core';

// El decorador va ENCIMA de la clase, no dentro
@Component({
  selector: 'primer-component',
  standalone: false,
  // No necesitamos archivos HTML ni CSS de forma obligatoria
  template: `
    <h1>Soy un componente nuevo en Angular!!!</h1>
  `
})

//CADA COMPONENT DEBE TENER UNA CLASE ASOCIADA EN SU TS
//EL NOMBRE DE LA CLASE, CADA INICIAL EN MAYUSCULAS Y DEBEMOS INCLUIR ESTE
//NOMBRE DENTEO DE MODULE PARA PODER UTILIARLO
export class PrimerComponent {
  //AQUI ES DONDE SE DECLARAN LAS VARIABLES DEL COMPONENT JUNTO A SU
  //TIPO DE DATO

  public nombre: string;
  public year: number;

  //EN ANGULAR, AL IGUAL QUE EN REACT, TENEMOS UN CONSTRCTOR
  //ES DONDE DEBEMOS INICIALIAR LOS OBJETOS DE CLASE.
  constructor(){

    //PARA ACCEDER A LOS OBJETOS DE LA CLASE, SE UTILIZA LA
    //PALABRA CLAVE this

    this.nombre = "Juan";
    this.year= 2026;
  }

  //LO VAMOS A DIBUJAR EN app.html
  //ANTES DEBEN IR EN app-module PARA QUE PUEDAN SER UTILIZADOS EN EL HTML



}
