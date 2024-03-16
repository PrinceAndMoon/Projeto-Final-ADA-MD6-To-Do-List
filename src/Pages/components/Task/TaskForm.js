import React, { useState } from 'react';
import { addTask } from '../../services/api';

const TaskForm = ({ fetchTasks }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return; // Evita adicionar tarefa vazia

    try {
      await addTask({ title: taskTitle, completed: false }); // Implementar função addTask na api.js
      fetchTasks(); // Atualiza a lista de tarefas após a adição
      setTaskTitle(''); // Limpa o campo após adicionar a tarefa
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;