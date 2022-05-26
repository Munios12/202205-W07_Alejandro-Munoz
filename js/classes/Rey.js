import { Personaje } from "./Personaje.js";

export class Rey extends Personaje {
    emoji = "👑";
    constructor(
        nombre,
        familia,
        edad,
        añosDeReinado,
        mensaje = "Vais a morir todos"
    ) {
        super(nombre, familia, edad, mensaje);
        this.añosDeReinado = añosDeReinado;
    }
}
