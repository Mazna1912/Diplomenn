// Функция, която проверява дали потребителят е влязъл в профила си
function checkAuthState() {
    const loginStateContainer = document.getElementById("loginStateContainer");
    const user = firebase.auth().currentUser;
    if (user) {
        loginStateContainer.innerHTML = `<p>Logged in as: ${user.email}</p>`;
        document.getElementById("logoutLink").style.display = "block";
        document.getElementById("loginLink").style.display = "none";
        document.getElementById("registerLink").style.display = "none";
        document.getElementById("addProductLink").style.display = "block";
        // Допълнителна логика, която да извършва действия специфични за влезнал потребител
    } else {
        loginStateContainer.innerHTML = "<p>Not logged in</p>";
        document.getElementById("logoutLink").style.display = "none";
        document.getElementById("loginLink").style.display = "block";
        document.getElementById("registerLink").style.display = "block";
        document.getElementById("addProductLink").style.display = "none";
        // Допълнителна логика, която да извършва действия специфични за невлязнал потребител
    }
}

// Подписване за събития при зареждане на страницата
window.addEventListener('load', checkAuthState);
