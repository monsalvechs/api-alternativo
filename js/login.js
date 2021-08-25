document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("sumitBtn").addEventListener("click", function () {
    
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputpassword");
        let camposCompletos = true;

        if (inputEmail.value === '') {
            inputEmail.classList.add('invalid');
            camposCompletos = false;
        } else {
            inputEmail.classList.remove("invalid");
        }

        if (inputPassword.value === '') {
            inputPassword.classList.add('invalid');
            camposCompletos = false;
        } else {
            inputPassword.classList.remove('invalid');
        }

        if (camposCompletos = true) {
            window.location.href="index.html"
        }
            
    });
});