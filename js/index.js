import { Asesor } from "./classes/Asesor.js";
import { Luchador } from "./classes/Luchador.js";
import { personajes } from "./classes/personajes.js";
import { Rey } from "./classes/Rey.js";

let personaje1 = new Rey(personajes[0], "Lannister", 18);
let personaje2 = new Luchador(personajes[1], "Lannister", 29);
let personaje3 = new Asesor(personajes[2], "Targaryen", 22);
personaje1.prueba();
console.log("---------------------------------");
personaje2.prueba();
console.log("---------------------------------");
personaje3.prueba();
