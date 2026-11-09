// CP3 - Funcionalidades compartilhadas do portfólio
(() => {
    const chaveTema = "portfolio-tema";
    const botaoTema = document.getElementById("alternar-tema");

    function aplicarTema(tema) {
        document.body.dataset.tema = tema;
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
