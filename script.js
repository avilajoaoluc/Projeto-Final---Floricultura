document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ script.js carregado com sucesso!");

    const botoes = document.querySelectorAll(".saiba-mais");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const nome = botao.getAttribute("data-nome");
            const preco = botao.getAttribute("data-preco");

            console.log(`🪻 Produto selecionado: ${nome} - ${preco}`);
            alert(`Produto: ${nome}\nPreço: ${preco}`);
        });
    });
});
