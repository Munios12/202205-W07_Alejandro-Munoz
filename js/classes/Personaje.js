export class Personaje {
    estaVivo = true;
    constructor(nombre, familia, edad, mensaje) {
        this.nombre = nombre;
        this.familia = familia;
        this.edad = edad;
        this.mensaje = mensaje;
    }

    vivoOMuerto() {
        if (this.estaVivo) {
            return '<i class="fas fa-thumbs-up"></i>';
        } else {
            return '<i class="fas fa-thumbs-down"></i>';
        }
    }

    morir() {
        this.estaVivo = false;
    }

    hablar() {
        return this.mensaje;
    }
}
