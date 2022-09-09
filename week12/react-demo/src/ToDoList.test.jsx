import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList';

test('ToDoList', () => {
  const tasks = [
    { id: 1, title: 'Play' },
    { id: 2, title: 'Deep Sleep' },
  ];

  render(<ToDoList tasks={tasks} />);

  screen.getByText('Play');
  screen.getByText('Deep Sleep');
});
