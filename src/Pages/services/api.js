const BASE_URL = 'http://localhost:5000'; // Exemplo de URL da API

// Função para obter todas as tarefas
export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  if (!response.ok) {
    throw new Error('Erro ao buscar tarefas');
  }
  return await response.json();
};

// Função para adicionar uma nova tarefa
export const addTask = async (taskData) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar tarefa');
  }
};

// Função para atualizar uma tarefa existente
export const updateTask = async (taskId, taskData) => {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar tarefa');
  }
};

// Função para excluir uma tarefa
export const deleteTask = async (taskId) => {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erro ao excluir tarefa');
  }
};