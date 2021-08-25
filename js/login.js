
document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("submit").addEventListener("click", function () {
    
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPassword");
        let camposCompletos = true;
        let mensaje = "";

        if (inputEmail.value === '') {
            mensaje ="Email invalido \n";
            camposCompletos = false;
        }

        if (inputPassword.value === '') {
            mensaje +="Contraseña invalida \n";
            camposCompletos = false;
        }

        if (camposCompletos) {
            window.location = 'index.html'
        }
         else {
            alert(mensaje);
        }    
    });
});