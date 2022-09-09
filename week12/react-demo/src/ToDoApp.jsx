import { useState } from 'react';

import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';

export default function ToDoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, title: '밥먹기' },
    { id: 2, title: '화장실가기' },
  ]);

  const addTask = (title) => {
    const latestTask = tasks[tasks.length - 1];
    const id = latestTask ? (latestTask.id + 1) : 1;

    setTasks([
      ...tasks,
      { id, title },
    ]);
  };

  return (
    <div>
      <ToDoList tasks={tasks} />
      <ToDoInput addTask={addTask} />

    </div>
  );
}
