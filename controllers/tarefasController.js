const TarefasModel = require('../models/tarefasModel');

class TarefasController {
exibirFormularioCadastro (req, res) {
    res.render('cadastroTarefas')
}

async exibirFormularioAlteracao (req, res) {

try {
const { tarefa_id } = req.params;
const tarefaModel new TarefasModel();
const tarefa = await tarefaModel.buscarTarefaPorId(tarefa_id);

if (!tarefa) {
return res.status(404).send('Tarefa não encontrada');
}

return res.render('visualizarTarefa', { tarefa });
} catch (error) {
console.error(error);
return res.status(500).send('Erro ao carregar a tarefa');
}
}

async cadastrarTarefa (req, res) {
try {
const { tarefa_titulo, tarefa_descricao, tarefa_disciplina, tarefa_status } = req.body;
const tarefa = new TarefasModel (null, tarefa_titulo, tarefa_descricao, tarefa_disciplina, tarefa_status);
const tarefa_id = await tarefa.cadastrarTarefa();

res.status(201).json({ message: 'Tarefa cadastrada com sucesso!', tarefa_id });

} catch (error) {
console.error(error);
res.status(500).json({ message: 'Erro ao cadastrar tarefa' });
}
}

async listarTarefas (req, res) {

try {
const status = typeof req.query.status === 'string' ? req.query.status.trim(): ';
const tarefa new TarefasModel();
const tarefas = await tarefa.listarTarefas (status);
res.status(200).render('listaTarefas', { tarefas, status });

} catch (error) {
console.error(error);
res.status(500).send('Erro ao listar tarefas');
}
}

async alterarTarefa (req, res) {

try {
const { tarefa_id, tarefa_titulo, tarefa_descricao, tarefa_disciplina, tarefa_status } = req.body;
const tarefa = new TarefasModel (tarefa_id, tarefa_titulo, tarefa_descricao, tarefa_disciplina, tarefa_status);
const affectedRows = await tarefa.alterarTarefa();

if (affectedRows === 0) {return res.status (404).json({ message: 'Tarefa não encontrada' });}

res.status(200).json({ message: 'Tarefa alterada com sucesso' }); \}

catch (error) {
console.error(error);
res.status (500).json({ message: 'Erro ao alterar tarefa' });
}
}

async excluirTarefa (req, res) {
try {
const { tarefa_id } = req.params
const tarefa = new TarefasModel (tarefa_id);
const affectedRows = await tarefa.excluirTarefa();

if (affectedRows === 0) {return res.status(404).json({ message: 'Tarefa não encontrada' });}

res.status(200).json({ message: 'Tarefa excluída com sucesso' });
}

catch (error) {
console.error(error);
res.status(500).json({ message: 'Erro ao excluir tarefa' });
}
}
}

module.exports = TarefasController;