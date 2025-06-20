const form = document.getElementById("form-cadastro");
const mensagemErro = document.getElementById("mensagem-erro");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    mensagemErro.textContent = "";

    const senha = document.getElementById("senha");
    const confirmar = document.getElementById("confirmar");
    const apoioNome = document.getElementById("apoio-nome");
    const apoioTelefone = document.getElementById("apoio-telefone");
    const apoioRelacao = document.getElementById("apoio-relacao");

    // Verifica se as senhas coincidem
    if (senha.value !== confirmar.value) {
        mensagemErro.textContent = "As senhas não coincidem.";
        senha.focus();
        return;
    }

    // Validação do nome da rede de apoio
    if (!apoioNome.value.trim()) {
        mensagemErro.textContent = "Por favor, informe o nome do contato de apoio.";
        apoioNome.focus();
        return;
    }

    // Validação do telefone: exatamente 11 números
    if (!/^\d{11}$/.test(apoioTelefone.value)) {
        mensagemErro.textContent = "Telefone de apoio deve conter exatamente 11 números.";
        apoioTelefone.focus();
        return;
    }

    // Validação da relação
    if (!apoioRelacao.value) {
        mensagemErro.textContent = "Selecione a relação com o contato de apoio.";
        apoioRelacao.focus();
        return;
    }
    // Simulação de cadastro bem-sucedido
    const dadosUsuario = {
        usuario: document.getElementById("usuario").value.trim(),
        email: document.getElementById("email").value.trim(),
        senha: senha.value
    };

    localStorage.setItem("usuarioAppSeguro", JSON.stringify(dadosUsuario));

    window.location.href = "permissoes.html";


    // Verificação final do formulário
    if (!form.checkValidity()) {
        mensagemErro.textContent = "Preencha todos os campos obrigatórios corretamente.";
        const primeiroCampoInvalido = form.querySelector(":invalid");
        if (primeiroCampoInvalido) primeiroCampoInvalido.focus();
        return;
    }

    // Sucesso
    window.location.href = "permissoes.html";
});

// Mostrar/ocultar senha
const verSenha = document.getElementById("ver-senha");
verSenha.addEventListener("change", function () {
    const tipo = this.checked ? "text" : "password";
    document.getElementById("senha").type = tipo;
    document.getElementById("confirmar").type = tipo;
});
