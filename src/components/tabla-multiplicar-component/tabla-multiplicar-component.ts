import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
<<<<<<< HEAD
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
  public tabla: Array<string>;
  @ViewChild("cajanumero") cajaNumero!: ElementRef;

  constructor() {
    this.tabla = [];
    this.cajaNumero = new ElementRef(0);
  }

  tablaMultipliar(): void {
    let num = parseInt(this.cajaNumero.nativeElement.value);
    this.tabla = [];
    for (let i = 1; i <= 10; i++) {
      this.tabla.push(num + " x " + i + " = " + (num * i));
    }
=======
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  public elementos!: Array<any>;
  public numeros!: Array<number>;
  public numero!: number;

  generarElementos(): void {
    this.numero = parseInt(this.cajaNumero.nativeElement.value);
    let aux = [];
    for (let i = 1; i <= 10; i++){
      let resultado = this.numero * i;
      let operacion = this.numero + " * " + i;
      aux.push({
        operacion: operacion,
        resultado: resultado
      });
    }
    this.elementos = aux;
  }

  mostrarTabla():void {
    this.numero = parseInt(this.cajaNumero.nativeElement.value);
    let aux = [];
    for (let i = 1; i <= 10; i++){
      let resultado = this.numero * i;
      aux.push(resultado);
    }
    this.numeros = aux;
>>>>>>> 94b73036b451bb645c7699188f01fac9c4358476
  }
}
