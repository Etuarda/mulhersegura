document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-perfil");

    const campos = [
        "nome", "email", "telefone", "usuario",
        "apoio-nome", "apoio-telefone", "apoio-relacao"
    ];

    // Preencher com os dados existentes do localStorage
    const dados = JSON.parse(localStorage.getItem("usuario")) || {};
    campos.forEach(campo => {
        if (dados[campo]) {
            document.getElementById(campo).value = dados[campo];
        }
    });

    // Salvar alterações
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const novosDados = {};

        campos.forEach(campo => {
            novosDados[campo] = document.getElementById(campo).value;
        });

        localStorage.setItem("usuario", JSON.stringify(novosDados));
        alert(" Perfil atualizado com sucesso!");
    });
});

function voltarParaHome() {
    window.location.href = "home.html"; // ajuste o caminho conforme sua estrutura
}

