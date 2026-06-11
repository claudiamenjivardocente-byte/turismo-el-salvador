const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

    if(nombre.length < 3){
        respuesta.textContent =
        "Ingrese un nombre válido";
        return;
    }

    if(!correo.includes("@")){
        respuesta.textContent =
        "Ingrese un correo válido";
        return;
    }

    if(telefono.length < 8){
        respuesta.textContent =
        "Ingrese un teléfono válido";
        return;
    }

    respuesta.textContent =
    "Gracias por contactarnos. Te responderemos pronto.";

});


const boton = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

boton.addEventListener("click", ()=>{

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }

});
