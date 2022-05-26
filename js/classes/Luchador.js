import { Personaje } from "./Personaje.js";

export class Luchador extends Personaje {
    emoji = "🗡️";
    constructor(
        nombre,
        familia,
        edad,
        arma,
        destrezaArma,
        mensaje = "Primero pego y luego pregunto"
    ) {
        super(nombre, familia, edad, mensaje);
        this.arma = arma;
        this.destrezaArma = destrezaArma;
    }
}
