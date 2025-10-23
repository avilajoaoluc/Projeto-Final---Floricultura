document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ app.js carregado com sucesso!");

    const form = document.getElementById("form-contato");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;
        const duvida = document.getElementById("duvida").value;

        console.log("📨 Dados enviados:");
        console.log(`Nome: ${nome}`);
        console.log(`Telefone: ${telefone}`);
        console.log(`Email: ${email}`);
        console.log(`Dúvida: ${duvida}`);

        alert("Mensagem enviada com sucesso! Confira os dados no console.");
        form.reset();
    });
});
