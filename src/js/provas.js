document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('lista-provas');
    const provas = JSON.parse(localStorage.getItem('provas')) || [];

    if (provas.length === 0) {
        lista.innerHTML = "<li>Nenhuma prova armazenada ainda.</li>";
        return;
    }

    lista.innerHTML = "";
    provas.forEach((prova, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${prova.titulo || `Prova ${index + 1}`}</span>
            <div>
                <button class="btn-detalhes" onclick="verDetalhes(${index})">Ver</button>
                <button class="btn-excluir" onclick="excluirProva(${index})">Excluir</button>
            </div>
        `;
        lista.appendChild(li);
    });
});

function voltarParaHome() {
    window.location.href = './home.html';
}

function verDetalhes(index) {
    alert(`Simulando visualização da prova ${index + 1}`);
    // Aqui futuramente pode abrir um modal ou nova página
}

function excluirProva(index) {
    const provas = JSON.parse(localStorage.getItem('provas')) || [];
    provas.splice(index, 1);
    localStorage.setItem('provas', JSON.stringify(provas));
    location.reload();
}
