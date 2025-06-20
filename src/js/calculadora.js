const tela = document.getElementById("tela");

function inserir(valor) {
    tela.value += valor;
}

function limpar() {
    tela.value = "";
}

function apagar() {
    tela.value = tela.value.slice(0, -1);
}

function calcular() {
    try {
        tela.value = eval(tela.value);
    } catch {
        tela.value = "Erro";
    }
}

// Verificação ao dar duplo clique no visor
tela.addEventListener("dblclick", () => {
    const usuarioLogado = localStorage.getItem("usuarioLogado") === "true";
    const timestampLogin = Number(localStorage.getItem("timestampLogin"));

    const agora = Date.now();
    const DUAS_HORAS = 2 * 60 * 60 * 1000;

    if (usuarioLogado && timestampLogin && (agora - timestampLogin) < DUAS_HORAS) {
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
});
