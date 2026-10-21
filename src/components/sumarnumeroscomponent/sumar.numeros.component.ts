import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "app-sumar-numeros",
<<<<<<< HEAD
    standalone: false,
=======
    standalone: false, 
>>>>>>> 56c40987d30c231edd298b1192d1b4ef195c8929
    templateUrl: "./sumar.numeros.component.html"
})

export class SumarNumerosComponent {
    public suma: number;
<<<<<<< HEAD
    @ViewChild("cajanumero1") cajaNumero1!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2!: ElementRef;
=======
    @ViewChild("cajanumero1") cajaNumero1: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2: ElementRef;
>>>>>>> 56c40987d30c231edd298b1192d1b4ef195c8929

    constructor() {
        this.suma = 0;
        //Para inicializar/instanciar los ElementRef, debemos indicar
        //new ElementRef(VALOR)
        this.cajaNumero1 = new ElementRef(0);
        this.cajaNumero2 = new ElementRef(0);
    }

    sumarNumeros(): void {
        let num1 = this.cajaNumero1.nativeElement.value;
        let num2 = this.cajaNumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 56c40987d30c231edd298b1192d1b4ef195c8929
