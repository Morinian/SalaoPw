document.addEventListener('DOMContentLoaded', (event) => {
    const registerForm = document.getElementById('registerForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');
    const confirmSenhaInput = document.getElementById('confirmPassword');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

         // Verifica se todos os campos estão preenchidos
         const inputs = registerForm.querySelectorAll('input[required]');
         let allFilled = true;
         inputs.forEach(input => {
             if (!input.value) {
                 allFilled = false;
             }
         });

        // Verifica se a senha e a confirmação da senha coincidem
        if (senhaInput.value !== confirmSenhaInput.value) {
            alert("As senhas não coincidem.");
            return;
        }

       

        if (allFilled) {
            alert("Conta criada com sucesso!"); // Exibe mensagem de sucesso caso tudo estiver certo
            window.location.href = '../html/login.html'; // Redireciona para a página de login
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
