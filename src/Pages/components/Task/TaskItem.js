import React from 'react';
import { updateTask, deleteTask } from '../../services/api';

const TaskItem = ({ task, handleTaskUpdate }) => {
  const handleToggleComplete = async () => {
    try {
      await updateTask(task.id, { completed: !task.completed });
      handleTaskUpdate(); // Atualiza a lista de tarefas após a modificação
    } catch (error) {
      console.error('Error toggling task status:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      handleTaskUpdate(); // Atualiza a lista de tarefas após a exclusão
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleToggleComplete} />
      <span>{task.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
