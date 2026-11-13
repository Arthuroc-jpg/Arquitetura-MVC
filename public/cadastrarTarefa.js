const form = document.getElementById('formTarefa');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', async (event) => {
event.preventDefault();

const button = form.querySelector('button[type="submit"]');
button.disabled = true;
mensagem.className = 'alert d-none';

const dados = Object.fromEntries (new FormData(form).entries());

try {
const response = await fetch('${form.dataset.apiBase}/cadastrar', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(dados)
});

const resultado await response.json();
if (!response.ok) {

}

throw new Error(resultado.message || 'Não foi possível cadastrar a tarefa.');
mensagem.textContent = resultado.message || 'Tarefa cadastrada com sucesso!';
mensagem.className = 'alert alert-success';
form.reset();

document.getElementById('tarefa_status').value = 'Pendente';

} catch (error) {
mensagem.textContent = error.message || 'Ocorreu um erro ao cadastrar a tarefa'}
})