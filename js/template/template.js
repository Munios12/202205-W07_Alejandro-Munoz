export const tarjetaPersonaje = ({ ...personaje }) => {
    let tarjetaPersonajeHtml = `
                    <li class="character col">
                        <div class="card character__card">
                            <img
                                src="${personaje.atributos.img}"
                                alt="Nombre y familia del personaje"
                                class="character__picture card-img-top"
                            />
                            <div class="card-body">
                                <h2 class="character__name card-title h4">
                                    ${personaje.rol.nombre}, ${personaje.rol.familia}
                                </h2>
                                <div class="character__info">
                                    <ul class="list-unstyled">
                                        <li>Edad:${personaje.rol.edad}</li>
                                        <li>
                                            Estado:
                                            <i class="fas fa-thumbs-down"></i>
                                            <i class="fas fa-thumbs-up"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="character__overlay">
                                    <ul class="list-unstyled">`;

    switch (personaje.atributos.role) {
        case "rey":
            tarjetaPersonajeHtml += `<li>Años de reinado: ${personaje.rol.añosDeReinado}</li>`;
            break;
        case "luchador":
            tarjetaPersonajeHtml += `<li>Arma: ${personaje.rol.arma}</li><li>Destreza: ${personaje.rol.destrezaArma}</li>`;
            break;
        case "asesor":
            tarjetaPersonajeHtml += `<li>Asesora a: ${personaje.rol.asesora}</li>`;
            break;
        case "escudero":
            tarjetaPersonajeHtml += `<li>Peloteo: ${personaje.rol.peloteo}</li><li>Sirve a: ${personaje.rol.escuda}</li>`;
            break;
        default:
            break;
    }

    tarjetaPersonajeHtml += `</ul>
                                    <div class="character__actions">
                                        <button id='hablar' class="character__action btn">
                                            habla
                                        </button>
                                        <button id='morir' class="character__action btn">
                                            muere
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <i class="emoji">${personaje.rol.emoji}</i>
                        </div>
                    </li>
            `;
    return tarjetaPersonajeHtml;
};

export const comunicarHtml = ({ ...personaje }) => {
    let comunicacionesHtml = `
            <p class="comunications__text display-1">
                ${personaje.rol.mensaje}
            </p>
            <img
                class="comunications__picture"
                src="${personaje.atributos.img}"
                alt="Nombre y familia del que habla"
            />
    `;

    return comunicacionesHtml;
};
