document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('agendamentoForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const diaInput = document.getElementById('dia');
        const hora = document.getElementById('hora').value;
        const procedimento = document.getElementById('procedimento').value;
        const local = document.getElementById('local').value;

        // Verificar se a data é válida
        const dia = new Date(diaInput.value);
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        if (diaInput.value === '' || isNaN(dia.getTime()) || dia < hoje) {
            alert('Por favor, selecione uma data válida.');
            return;
        }

        if (hora && procedimento && local) {
            const mensagem = `Você agendou para o dia ${diaInput.value} às ${hora} o procedimento ${procedimento} no local ${local}.`;
            alert(mensagem);
        } else {
            alert('Por favor, preencha todos os campos antes de agendar.');
        }
    });
});