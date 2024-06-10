document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        if (emailInput.value && senhaInput.value) {
            window.location.href = '../../index.html'; // Redireciona para outra página
        }
    });
});
