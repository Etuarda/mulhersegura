// Exibe o nome da usuária a partir do localStorage
const dados = JSON.parse(localStorage.getItem("usuarioAppSeguro"));
if (dados?.usuario) {
    document.getElementById("nome-usuario").textContent = dados.usuario;
}

function navegarPara(pagina) {
    window.location.href = pagina;
}

function abrirConfiguracoes() {
    alert("Em breve: tela de configurações.");
}
function acionarEmergencia() {
    document.getElementById("mensagem-acao").innerText = "🚨 Pedido de ajuda enviado";
}

function iniciarGravacao() {
    document.getElementById("mensagem-acao").innerText = "🎙️ Gravação de provas iniciada...";
}
// Escuta a tecla pressionada
document.addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada foi "Volume Up" (simulado por '+')
    if (event.key === "+" || event.key === "=") {
        simularGravacao();
    }
});

