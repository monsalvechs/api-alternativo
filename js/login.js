document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("sumitBtn").addEventListener("click", function () {
    
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPassword");
        let camposCompletos = true;

        if (inputEmail.value === '') {
            camposCompletos = false;
            inputEmail.classList.add('invalid');
        } else {
            inputEmail.classList.remove("invalid");
        }

        if (inputPassword.value === '') {
            inputPassword.classList.add('invalid');
            camposCompletos = false;
        } else {
            inputPassword.classList.remove('invalid');
        }

        if (camposCompletos) {

            getJSONData(CLIENTES_URL).then(function (resultado) {
                if(resultado.status === "ok")
                {
                    userArray = resultado.data;

                    if(validateUser(userArray, inputEmail.value, inputPassword.value)){
                        window.location = 'index.html';
                    } else {
                        alert("usuario o contraseña incorrecto");
                    }
                }
            });
        }
         else {
            alert("Debes ingresar los datos");
        }    
    });
});