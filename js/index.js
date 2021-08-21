document.getElementById("login-button").addEventListener('click', function () {

    const Email = document.getElementById("user-email").value;

    const Password = document.getElementById("user-password").value;

    if (Email == "maraz@gmail.com" && Password == "maraz") {
        window.location.href = "banking.html";
    }

})