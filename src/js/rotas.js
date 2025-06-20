function voltarParaHome() {
    window.location.href = "home.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const status = document.getElementById("status-rota");

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                status.textContent = "Você está em uma rota segura.";
            },
            () => {
                status.textContent = "Não foi possível acessar sua localização.";
            }
        );
    } else {
        status.textContent = "Geolocalização não suportada neste navegador.";
    }
});
