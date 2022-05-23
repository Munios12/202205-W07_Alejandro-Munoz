import { Personaje } from "./Personaje.js";

export class Luchador extends Personaje {
    emoji = "🗡️";
    constructor(
        nombre,
        familia,
        edad,
        mensaje = "Primero pego y luego pregunto",
        estado,
        arma,
        destrezaArma
    ) {
        super(nombre, familia, edad, mensaje, estado);
        this.arma = arma;
        this.destrezaArma = destrezaArma;
    }

    prueba() {
        console.log("Mi nombre es:", this.nombre);
        console.log("Mi familia es:", this.familia);
        console.log("Mi edad es:", this.edad);
        console.log("Estoy:", this.estado ? "Vivo" : "Muerto");
        console.log(this.mensaje);
    }
}
