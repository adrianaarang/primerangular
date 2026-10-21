import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
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
  }
}
