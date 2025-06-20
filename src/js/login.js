const form = document.getElementById("form-login");
const erro = document.getElementById("mensagem-erro");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    erro.textContent = "";

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const dadosSalvos = JSON.parse(localStorage.getItem("cadastroUsuario"));

    if (!dadosSalvos) {
        erro.textContent = "Nenhum usuário cadastrado. Cadastre-se primeiro.";
        return;
    }

    if (usuario === dadosSalvos.usuario && senha === dadosSalvos.senha) {
        // ✅ Armazenar sessão com hora atual
        localStorage.setItem("usuarioLogado", "true");
        localStorage.setItem("timestampLogin", Date.now());

        window.location.href = "home.html";
    } else {
        erro.textContent = "Usuário ou senha incorretos.";
    }
});
