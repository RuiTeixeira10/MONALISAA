const musicas = {
    missThing: {
        titulo: "I Don’t Want to Miss a Thing",
        autor: "Aerosmith",
        capa: "capa_miss_thing.jpg",

        linhas: [
            "Then I kiss your eyes",
            "And thank God we're together",
            "And I just wanna stay with you in this moment forever",
            "Forever and ever",
            "I don't wanna close my eyes",
            "I don't wanna fall asleep",
            "'Cause I'd miss you baby",
            "And I don't wanna miss a thing",
            "'Cause even when I dream of you",
            "The sweetest dream will never do",
            "I'd still miss you baby",
            "And I don't wanna miss a thing"
        ],

        traducao: [
            "Então eu beijo os teus olhos",
            "E agradeço a Deus por estarmos juntos",
            "E só quero ficar contigo neste momento para sempre",
            "Para sempre e sempre",
            "Não quero fechar os olhos",
            "Não quero adormecer",
            "Porque sentiria a tua falta, amor",
            "E não quero perder nada",
            "Porque mesmo quando sonho contigo",
            "Nem o sonho mais doce chega",
            "Ainda sentiria a tua falta, amor",
            "E não quero perder nada"
        ]
    }
};

function abrirMusica(id) {
    const m = musicas[id];

    document.getElementById("tituloMusica").textContent = m.titulo;
    document.getElementById("autorMusica").textContent = m.autor;
    document.getElementById("capaMusica").src = m.capa;

    const letraDiv = document.getElementById("letraMusica");
    letraDiv.innerHTML = "";

    // Criar letra original em parágrafos
    m.linhas.forEach((linha, i) => {
        const bloco = document.createElement("div");
        bloco.className = "linha-bloco";

        const pOriginal = document.createElement("p");
        pOriginal.textContent = linha;
        pOriginal.className = "linha-original";
        pOriginal.dataset.index = i;

        bloco.appendChild(pOriginal);
        letraDiv.appendChild(bloco);
    });

    document.getElementById("popupMusica").style.display = "flex";
}

function mostrarTraducao() {
    const m = musicas["missThing"];
    const letraDiv = document.getElementById("letraMusica");

    const blocos = letraDiv.querySelectorAll(".linha-bloco");

    blocos.forEach((bloco, i) => {
        // evitar duplicar tradução se clicar duas vezes
        if (bloco.querySelector(".linha-trad")) return;

        const pTrad = document.createElement("p");
        pTrad.textContent = m.traducao[i];
        pTrad.className = "linha-trad";

        bloco.appendChild(pTrad);
    });
}

function fecharPopupMusica() {
    document.getElementById("popupMusica").style.display = "none";
}

function voltarPagina() {
    window.location.href = "principal.html"; 
}
