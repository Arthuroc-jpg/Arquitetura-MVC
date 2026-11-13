class TarefasModel {

#tarefa_id;
#tarefa_titulo;
#tarefa_descricao;
#tarefa_disciplina;
#tarefa_status;

constructor(tarefa_id, tarefa_titulo, tarefa_descricao, tarefa_disciplina, tarefa_status) {
this.#tarefa_id = tarefa_id;
this.#tarefa_titulo = tarefa_titulo;
this.#tarefa_descricao = tarefa_descricao;
this.#tarefa_disciplina = tarefa_disciplina;
this.#tarefa_status = tarefa_status;
}

get tarefa_id() {return this.#tarefa_id;}
set tarefa_id(value) {this.#tarefa_id = value;}

get tarefa_titulo() {return this.#tarefa_titulo;}
set tarefa_titulo(value) {this.#tarefa_titulo = value;}

get tarefa_descricao() {return this.#tarefa_descricao;}
set tarefa_descricao (value) {this.#tarefa_descricao = value;}

get tarefa_disciplina() {return this.#tarefa_disciplina;}
set tarefa_disciplina (value) {this.#tarefa_disciplina = value;}

get tarefa_status() {return this.#tarefa_status;}
set tarefa_status (value) {this.#tarefa_status = value;}

async cadastrarTarefa() {
const db = require('../bd');
const sql = 'INSERT INTO tarefas (tarefa_titulo, tarefa_descricao, tarefa_disciplina, tarefa_status) VALUES (?, ?, ?, ?)';
const values = [this.#tarefa_titulo, this.#tarefa_descricao, this.#tarefa_disciplina, this.#tarefa_status];
const [result] = await db.execute(sql, values);

return result.insertId;
}

async listarTarefa(status = '') { 
const db = require('../bd');
const sql = status ? 'SELECT * FROM tarefas WHERE tarefa_status = ?': 'SELECT * FROM tarefas';
const values = status? [status] : [];
const [rows] = await db.execute(sql, values);

return rows;

}

async alterarTarefa() {

const db = require('../bd');

const sql = 'UPDATE tarefas SET tarefa_titulo = ?, tarefa_descricao = ?, tarefa_disciplina = ?, tarefa_status = ? WHERE tarefa_id = ?'; 
const values = [this.#tarefa_titulo, this.#tarefa_descricao, this.#tarefa_disciplina, this.#tarefa_status, this.#tarefa_id];
const [result] = await db.execute(sql, values);

return result.affectedRows;

}

async excluirTarefa() {
const db = require('../bd');
const sql = 'DELETE FROM tarefas WHERE tarefa_id = ?';
const values = [this.#tarefa_id];
const [result] = await db.execute(sql, values);

return result.affectedRows;

}
}

module.exports = TarefasModel;