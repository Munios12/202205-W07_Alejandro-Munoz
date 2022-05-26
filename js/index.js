import { personajes } from "./classes/personajes.js";
import { comunicarHtml, tarjetaPersonaje } from "./template/template.js";

const main = () => {
    for (let i = 0; i < personajes.length; i++) {
        document.querySelector(".characters-list").innerHTML +=
            tarjetaPersonaje(personajes[i]);
    }

    const comunicacionesBtnsHtml = document.querySelectorAll("#hablar");
    const morirBtnsHtml = document.querySelectorAll("#morir");
    const comunicacionesBotones = [...comunicacionesBtnsHtml];
    const matarBotones = [...morirBtnsHtml];
    const contenedorDeFraseHtml = document.querySelector(".comunications");

    console.log(matarBotones);

    for (let i = 0; i < personajes.length; i++) {
        comunicacionesBotones[i].addEventListener("click", function (e) {
            e.preventDefault();
            contenedorDeFraseHtml.innerHTML = comunicarHtml(personajes[i]);
            contenedorDeFraseHtml.classList.add("on");
            setTimeout(() => {
                if (contenedorDeFraseHtml.classList.contains("on")) {
                    contenedorDeFraseHtml.classList.remove("on");
                }
            }, 2000);
        });
    }

    let state = document.querySelectorAll(".character__state");

    let stateSeparado = [...state];

    for (let i = 0; i < personajes.length; i++) {
        matarBotones[i].addEventListener("click", function (e) {
            e.preventDefault();
            personajes[i].rol.morir();
            stateSeparado[i].innerHTML = "";
            stateSeparado[i].innerHTML = `Estado: ${personajes[
                i
            ].rol.vivoOMuerto()}`;
        });
    }
};

main();
