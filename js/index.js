import { personajes } from "./classes/personajes.js";
import { comunicarHtml, tarjetaPersonaje } from "./template/template.js";

const main = () => {
    for (let i = 0; i < personajes.length; i++) {
        document.querySelector(".characters-list").innerHTML +=
            tarjetaPersonaje(personajes[i]);
    }

    const hablarBtns = document.querySelectorAll("#hablar");
    const separarBotones = [...hablarBtns];
    const hola = document.querySelector(".comunications");
    console.dir(separarBotones);

    for (let i = 0; i < personajes.length; i++) {
        separarBotones[i].addEventListener("click", function (e) {
            e.preventDefault();
            hola.innerHTML += comunicarHtml(personajes[i]);
            hola.classList.add("on");
        });
    }

    //Antigua forma de mostrar las tarjetas
    // let tarjetaPersonaje1 = ;
    // let tarjetaPersonaje2 = tarjetaPersonaje(personajes[1]);
    // let tarjetaPersonaje3 = tarjetaPersonaje(personajes[2]);
    // let tarjetaPersonaje4 = tarjetaPersonaje(personajes[3]);
    // let tarjetaPersonaje5 = tarjetaPersonaje(personajes[4]);

    // document.querySelector(".characters-list").innerHTML =
    //     tarjetaPersonaje1 +
    //     tarjetaPersonaje2 +
    //     tarjetaPersonaje3 +
    //     tarjetaPersonaje4 +
    //     tarjetaPersonaje5;
};

main();
