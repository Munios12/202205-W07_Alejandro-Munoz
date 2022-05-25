import { Personaje } from "./Personaje.js";

export class Escudero extends Personaje {
    emoji = "🛡️";
    constructor(
        nombre,
        familia,
        edad,
        escuda,
        peloteo,
        mensaje = "Soy un loser :("
    ) {
        super(nombre, familia, edad, mensaje);
        this.escuda = escuda;
        this.peloteo = peloteo;
    }
}
