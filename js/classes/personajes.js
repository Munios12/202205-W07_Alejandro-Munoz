import { Asesor } from "./Asesor.js";
import { Luchador } from "./Luchador.js";
import { Rey } from "./Rey.js";
import { Escudero } from "./Escudero.js";

const p1 = new Rey("Joffrey Baratheon", "Lannister", 14, 2);
const p2 = new Luchador("Jaime Lannister", "Lannister", 34, "Espada", 9);
const p3 = new Luchador("Daenerys Targaryen", "Targaryen", 16, "Espada", 7);
const p4 = new Asesor(
    "Tyrion Lannister",
    "Lannister",
    27,
    "Daenerys Targaryen"
);
const p5 = new Escudero(
    "Bronn Stokeworth",
    "Stokeworth",
    32,
    "Jaime Lannister",
    10
);

export const personajes = [
    {
        rol: p1,
        atributos: {
            img: "./img/joffrey.jpg",
            role: "rey",
        },
    },
    {
        rol: p2,
        atributos: {
            img: "./img/jaime.jpg",
            role: "luchador",
        },
    },
    {
        rol: p3,
        atributos: {
            img: "./img/daenerys.jpg",
            role: "luchador",
        },
    },
    {
        rol: p4,
        atributos: {
            img: "./img/tyrion.jpg",
            role: "asesor",
        },
    },
    {
        rol: p5,
        atributos: {
            img: "./img/bronn.jpg",
            role: "escudero",
        },
    },
];
