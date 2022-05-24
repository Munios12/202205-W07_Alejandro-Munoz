import { Asesor } from "./classes/Asesor.js";
import { Luchador } from "./classes/Luchador.js";
import { personajes } from "./classes/personajes.js";
import { Rey } from "./classes/Rey.js";
import { comunicarHtml, tarjetaPersonaje } from "./template/template.js";

let personaje1 = new Rey();
let personaje2 = new Luchador(personajes[1], "Lannister", 29);
let personaje3 = new Asesor(personajes[2], "Targaryen", 22);

const main = () => {
    let tarjetaPersonaje1 = tarjetaPersonaje(personajes[0]);
    let tarjetaPersonaje2 = tarjetaPersonaje(personajes[1]);
    let tarjetaPersonaje3 = tarjetaPersonaje(personajes[2]);
    let tarjetaPersonaje4 = tarjetaPersonaje(personajes[3]);
    let tarjetaPersonaje5 = tarjetaPersonaje(personajes[4]);

    document.querySelector(".characters-list").innerHTML =
        tarjetaPersonaje1 +
        tarjetaPersonaje2 +
        tarjetaPersonaje3 +
        tarjetaPersonaje4 +
        tarjetaPersonaje5;
};

main();
