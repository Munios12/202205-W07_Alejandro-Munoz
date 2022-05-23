import { Personaje } from "./Personaje.js";

export class Asesor extends Personaje {
    emoji = "🎓";
    constructor(
        nombre,
        familia,
        edad,
        mensaje = "No sé por qué, pero creo que voy a morir pronto.",
        estado,
        asesora
    ) {
        super(nombre, familia, edad, mensaje, estado);
        this.asesora = asesora;
    }

    prueba() {
        console.log("Mi nombre es:", this.nombre);
        console.log("Mi familia es:", this.familia);
        console.log("Mi edad es:", this.edad);

        console.log("Estoy:", this.estado ? "Vivo" : "Muerto");
        console.log(this.mensaje);
    }
}
