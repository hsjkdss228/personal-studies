import { useState } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

export default function ToDoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'inu goroshi' }]);

  const addTask = (title) => {
    const latestTask = tasks[tasks.length - 1] || { id: 0 };
    const id = latestTask.id + 1;
    setTasks([
      ...tasks,
      { id, title },
    ]);
  };

  return (
    <div>
      <ToDoInput addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}
