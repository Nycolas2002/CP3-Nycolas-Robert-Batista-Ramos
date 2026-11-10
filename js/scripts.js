// CP3 - Funcionalidades compartilhadas do portfólio
(() => {
    const chaveTema = "portfolio-tema";
    const botaoTema = document.getElementById("alternar-tema");

    function desenharGrafico() {
        const canvas = document.getElementById("graficoHabilidades");
        if (!canvas) return;

        const contexto = canvas.getContext("2d");
        const temaClaro = document.body.dataset.tema === "claro";

        const corTexto = temaClaro ? "#172033" : "#f8fafc";
        const corDestaque = temaClaro ? "#0369a1" : "#38bdf8";
        contexto.clearRect(0, 0, canvas.width, canvas.height);
        contexto.font = "16px Arial";
        contexto.textBaseline = "alphabetic";

        const habilidades = [
            { nome: "Python", valor: 70 },
            { nome: "HTML", valor: 85 },
            { nome: "CSS", valor: 65 },
            { nome: "SQL", valor: 75 }
        ];

        habilidades.forEach((habilidade, indice) => {
            const y = 45 + indice * 65;
            const largura = habilidade.valor * 4;

            contexto.fillStyle = corDestaque;
            contexto.fillRect(130, y, largura, 30);

            contexto.fillStyle = corTexto;
            contexto.fillText(habilidade.nome, 20, y + 21);
            contexto.fillText(habilidade.valor + "%", 145 + largura, y + 21);
        });
    }

    function aplicarTema(tema) {
        document.body.dataset.tema = tema;
        desenharGrafico();
        if (botaoTema) {
            botaoTema.textContent = tema === "claro" ? "Tema escuro" : "Tema claro";
            botaoTema.setAttribute("aria-pressed", String(tema === "claro"));
        }
    }

    let temaSalvo = "escuro";
    try {
        const preferencia = localStorage.getItem(chaveTema);
        if (preferencia === "claro" || preferencia === "escuro") temaSalvo = preferencia;
    } catch (erro) {
        console.warn("Não foi possível acessar o armazenamento local.", erro);
    }
    aplicarTema(temaSalvo);

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {
            const novoTema = document.body.dataset.tema === "claro" ? "escuro" : "claro";
            aplicarTema(novoTema);
            try { localStorage.setItem(chaveTema, novoTema); }
            catch (erro) { console.warn("Não foi possível salvar o tema.", erro); }
        });
    }

    const formulario = document.getElementById("form-contato");
    if (formulario) {
        const feedback = document.getElementById("mensagem-formulario");
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            feedback.className = "mensagem-formulario";
            if (!formulario.checkValidity()) {
                feedback.textContent = "Verifique os campos obrigatórios e informe um e-mail válido antes de enviar.";
                feedback.classList.add("erro");
                formulario.reportValidity();
                return;
            }
            feedback.textContent = "Formulário validado com sucesso! Esta demonstração não envia a mensagem para um servidor.";
            feedback.classList.add("sucesso");
            formulario.reset();
        });
        formulario.addEventListener("reset", () => {
            if (feedback) {
                feedback.textContent = "";
                feedback.className = "mensagem-formulario";
            }
        });
    }
})();
