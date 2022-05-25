import { Personaje } from "./Personaje.js";

export class Asesor extends Personaje {
    emoji = "🎓";
    constructor(
        nombre,
        familia,
        edad,
        asesora,
        mensaje = "No sé por qué, pero creo que voy a morir pronto."
    ) {
        super(nombre, familia, edad, mensaje);
        this.asesora = asesora;
    }
}
