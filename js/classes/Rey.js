import { Personaje } from "./Personaje.js";

export class Rey extends Personaje {
    emoji = "👑";
    constructor(
        nombre,
        familia,
        edad,
        mensaje = "Vais a morir todos",
        estado,
        añosDeReinado
    ) {
        super(nombre, familia, edad, mensaje, estado);
        this.añosDeReinado = añosDeReinado;
    }

    prueba() {
        console.log("Mi nombre es:", this.nombre);
        console.log("Mi familia es:", this.familia);
        console.log("Mi edad es:", this.edad);
        console.log("Años de reinado:", this.añosDeReinado);
        console.log("Estoy:", this.estado ? "Vivo" : "Muerto");
        console.log(this.mensaje);
    }
}
