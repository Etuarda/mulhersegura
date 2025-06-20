function enviarMensagem() {
    const input = document.getElementById("entrada-msg");
    const texto = input.value.trim();
    if (texto === "") return;

    adicionarMensagemUsuario(texto);
    input.value = "";

    setTimeout(() => {
        responderIA(texto);
    }, 500);
}

function adicionarMensagemUsuario(mensagem) {
    const box = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.className = "mensagem-usuario";
    div.textContent = mensagem;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function responderIA(mensagem) {
    const resposta = gerarRespostaSimples(mensagem);
    const box = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.className = "mensagem-sistema";
    div.textContent = resposta;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function gerarRespostaSimples(pergunta) {
    if (pergunta.toLowerCase().includes("apoio")) {
        return "Você não está sozinha. Fale com alguém de confiança ou ligue 180.";
    }
    if (pergunta.toLowerCase().includes("ameaça")) {
        return "Você pode denunciar de forma anônima pelo Disque 100 ou na delegacia mais próxima.";
    }
    if (pergunta.toLowerCase().includes("direito")) {
        return "Toda mulher tem direito à proteção, dignidade e liberdade. Quer saber mais?";
    }
    return "Entendi. Me conte mais para que eu possa ajudar melhor.";
}

function sugerirMensagem(msg) {
    document.getElementById("entrada-msg").value = msg;
}
function voltarParaHome() {
    window.location.href = "home.html";
}