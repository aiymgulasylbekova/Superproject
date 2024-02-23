function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("Пароли не совпадают!");
        return false;
    }
    return true;
}
