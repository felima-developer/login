const formulario = document.getElementById("loginForm");

const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document
        .getElementById("usuario")
        .value
        .trim();

    const senha = document
        .getElementById("senha")
        .value;


    // =========================
    // VALIDAÇÃO DO USUÁRIO
    // =========================

    if (usuario === "") {

        mostrarErro("O usuário não pode ficar vazio.");

        return;
    }


    // =========================
    // VALIDAÇÃO DA SENHA
    // =========================

    // Verifica se a senha está vazia
    if (senha === null || senha.trim() === "") {

        mostrarErro("A senha não pode ficar vazia.");

        return;
    }


    // Verifica se existem espaços
    if (/\s/.test(senha)) {

        mostrarErro("A senha não pode conter espaços.");

        return;
    }


    // Verifica quantidade de caracteres
    if (senha.length < 6) {

        mostrarErro(
            "A senha deve ter no mínimo 6 caracteres."
        );

        return;
    }


    // Verifica se possui letra
    if (!/[A-Za-z]/.test(senha)) {

        mostrarErro(
            "A senha deve possuir pelo menos uma letra."
        );

        return;
    }


    // Verifica se possui número
    if (!/[0-9]/.test(senha)) {

        mostrarErro(
            "A senha deve possuir pelo menos um número."
        );

        return;
    }


    // Verifica se possui caractere especial
    if (!/[^A-Za-z0-9]/.test(senha)) {

        mostrarErro(
            "A senha deve possuir pelo menos um caractere especial."
        );

        return;
    }


    // =========================
    // LOGIN
    // =========================

    const usuarioCorreto = "admin";

    const senhaCorreta = "Admin@123";


    if (
        usuario !== usuarioCorreto ||
        senha !== senhaCorreta
    ) {

        mostrarErro(
            "Usuário ou senha incorretos."
        );

        return;
    }


    // Login aprovado
    mensagem.textContent =
        "Login realizado com sucesso!";

    mensagem.className = "sucesso";

});


function mostrarErro(texto) {

    mensagem.textContent = texto;

    mensagem.className = "erro";
}
