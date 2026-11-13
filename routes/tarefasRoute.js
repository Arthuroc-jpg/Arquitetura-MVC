const TarefasController = require('../controllers/tarefasController');
const express = require('express');
const router = express. Router();

const tarefasController = new TarefasController();

router.get('/cadastrar', (req, res) => tarefasController.exibirFormularioCadastro (req, res));
router.post('/cadastrar', (req, res) => tarefasController.cadastrarTarefa (req, res));
router.get('/', (req, res) => tarefasController.listarTarefas (req, res));
router.get('/: tarefa_id/editar', (req, res) => tarefasController.exibirFormularioAlteracao (req, res));
router.put('/alterar', (req, res) => tarefasController.alterarTarefa(req, res));
router.delete('/excluir/:tarefa_id', (req, res) => tarefasController.excluirTarefa (req, res));

module.exports = router;