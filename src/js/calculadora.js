const tela = document.getElementById("tela");

function atualizarTela(texto) {
    tela.textContent = texto || "0";
    tela.setAttribute(
        "aria-label",
        `Tela da calculadora. Cálculo atual: ${tela.textContent}. Dê dois toques rápidos para voltar ao login.`
    );
}

function inserir(valor) {
    if (tela.textContent === "0") tela.textContent = "";
    atualizarTela(tela.textContent + valor);
}

function limpar() {
    atualizarTela("");
}

function apagar() {
    atualizarTela(tela.textContent.slice(0, -1));
}

function calcular() {
    try {
        const resultado = eval(tela.textContent);
        atualizarTela(resultado.toString());
    } catch {
        atualizarTela("Erro");
    }
}

function verificarRedirecionamento() {
    const usuarioLogado = localStorage.getItem("usuarioLogado") === "true";
    const timestampLogin = Number(localStorage.getItem("timestampLogin"));
    const agora = Date.now();
    const DUAS_HORAS = 2 * 60 * 60 * 1000;

    if (usuarioLogado && timestampLogin && (agora - timestampLogin) < DUAS_HORAS) {
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}
