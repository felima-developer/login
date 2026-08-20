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


//Aqui estamos validando o usuario, dizendo que ele nao pode estar vazio, caso esteja vazio ele apresenta a informacao de erro

    if (usuario === "") {

        mostrarErro("O usuário não pode ficar vazio.");

        return;
    }


    
    // Aqui vamos validar a senha de acordo com as regras estabelecidas
   

    // usamos o se, para verificar se a senha esta vazia, caso esteja apresenta o erro
    if (senha === null || senha.trim() === "") {

        mostrarErro("A senha não pode ficar vazia.");

        return;
    }


    // usamos esse se, para certificarmos que a senha nao possui espacos
    if (/\s/.test(senha)) {

        mostrarErro("A senha não pode conter espaços.");

        return;
    }


    // aqui verificamos se a senha contem no minimo 6 caracteres
    if (senha.length < 6) {

        mostrarErro(
            "A senha deve ter no mínimo 6 caracteres."
        );

        return;
    }


    // aqui verificamos se a senha possui letra
    if (!/[A-Za-z]/.test(senha)) {

        mostrarErro(
            "A senha deve possuir pelo menos uma letra."
        );

        return;
    }


    // aqui verificamos se a senha possui numeros
    if (!/[0-9]/.test(senha)) {

        mostrarErro(
            "A senha deve possuir pelo menos um número."
        );

        return;
    }


    // aqui verifica se existe caracter especial
    if (!/[^A-Za-z0-9]/.test(senha)) {

        mostrarErro(
            "A senha deve possuir pelo menos um caractere especial."
        );

        return;
    }


    
    // LOGIN NO SISTEMA - predefinimos uma senha correta, para teste de validacao como status de Sucesso
  

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


    // mensagem para Login aprovado
    mensagem.textContent =
        "Login realizado com sucesso!";

    mensagem.className = "sucesso";

});


function mostrarErro(texto) {

    mensagem.textContent = texto;

    mensagem.className = "erro";
}
