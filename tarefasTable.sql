CREATE TABLE tarefas (
tarefa_id INT AUTO_INCREMENT PRIMARY KEY,
tarefa_titulo VARCHAR(100) NOT NULL,
tarefa_descricao VARCHAR(500),
tarefa_disciplina VARCHAR(80) NOT NULL,
tarefa_status VARCHAR(20) NOT NULL
);