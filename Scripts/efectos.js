let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HabilidadX");
        habilidades[1].classList.add("HabilidadX");
        habilidades[2].classList.add("HabilidadX");
        habilidades[3].classList.add("HabilidadX");
        habilidades[4].classList.add("HabilidadX");
        habilidades[5].classList.add("HabilidadX");
        habilidades[6].classList.add("HabilidadX");
        habilidades[7].classList.add("HabilidadX");
        habilidades[8].classList.add("HabilidadX");
        habilidades[9].classList.add("HabilidadX");
    }
}

window.onscroll = function() {
    efectoHabilidades();
}