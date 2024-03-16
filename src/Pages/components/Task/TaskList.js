import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { getTasks } from '../../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleTaskUpdate = () => {
    fetchTasks(); // Atualiza a lista de tarefas após atualizar uma tarefa
  };

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <TaskForm fetchTasks={fetchTasks} />
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} handleTaskUpdate={handleTaskUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

