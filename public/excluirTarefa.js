document.querySelectorAll('[data-delete-url]').forEach((button) => {

button.addEventListener('click', async () => {
button.disabled = true;

try {
const response = await fetch(button.dataset.deleteUrl, {method: 'DELETE'});
const resultado = await response.json();

if (!response.ok) {
throw new Error(resultado.message || 'Não foi possível excluir a tarefa.');
}

window.location.reload();

} catch (error) {
window.alert(error.message || 'Ocorreu um erro ao excluir a tarefa.');
button.disabled = false;
}
});
});