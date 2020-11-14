//Variables del ver mas del carousel
let BOTON100 = document.getElementById("boton100");
let TEXTO100 = document.getElementById("texto100");

let BOTON200 = document.getElementById("boton200");
let TEXTO200 = document.getElementById("texto200");


let BOTON300 = document.getElementById("boton300");
let TEXTO300 = document.getElementById("texto300");

let BOTON400 = document.getElementById("boton400");
let TEXTO400 = document.getElementById("texto400");

let BOTON500 = document.getElementById("boton500");
let TEXTO500 = document.getElementById("texto500");

let BOTON600 = document.getElementById("boton600");
let TEXTO600 = document.getElementById("texto600");


BOTON100.addEventListener("click", () => {
    if (TEXTO100.style.display === "none") {
        BOTON100.innerHTML = "Ver menos";
        TEXTO100.style.display = "block";

    } else {
        BOTON100.innerHTML = "Ver mas...";
        TEXTO100.style.display = "none";
    }
});


BOTON200.addEventListener("click", () => {
    if (TEXTO200.style.display === "none") {
        BOTON200.innerHTML = "Ver menos";
        TEXTO200.style.display = "block";

    } else {
        BOTON200.innerHTML = "Ver mas...";
        TEXTO200.style.display = "none";
    }
});



BOTON300.addEventListener("click", () => {
    if (TEXTO300.style.display === "none") {
        BOTON300.innerHTML = "Ver menos";
        TEXTO300.style.display = "block";

    } else {
        BOTON300.innerHTML = "Ver mas...";
        TEXTO300.style.display = "none";
    }
});


BOTON400.addEventListener("click", () => {
    if (TEXTO400.style.display === "none") {
        BOTON400.innerHTML = "Ver menos";
        TEXTO400.style.display = "block";

    } else {
        BOTON400.innerHTML = "Ver mas...";
        TEXTO400.style.display = "none";
    }
});


BOTON500.addEventListener("click", () => {
    if (TEXTO500.style.display === "none") {
        BOTON500.innerHTML = "Ver menos";
        TEXTO500.style.display = "block";

    } else {
        BOTON500.innerHTML = "Ver mas...";
        TEXTO500.style.display = "none";
    }
});


BOTON600.addEventListener("click", () => {
    if (TEXTO600.style.display === "none") {
        BOTON600.innerHTML = "Ver menos";
        TEXTO600.style.display = "block";

    } else {
        BOTON600.innerHTML = "Ver mas...";
        TEXTO600.style.display = "none";
    }
});