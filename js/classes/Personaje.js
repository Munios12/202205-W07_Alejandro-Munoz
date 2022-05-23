export class Personaje {
    constructor(nombre, familia, edad, mensaje, estado = true) {
        this.nombre = nombre;
        this.familia = familia;
        this.edad = edad;
        this.mensaje = mensaje;
        this.estado = estado;
    }

    morir() {
        this.estado = false;
    }

    hablar() {
        return this.mensaje;
    }
}
