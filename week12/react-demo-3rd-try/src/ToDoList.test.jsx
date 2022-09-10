import ToDoList from './ToDoList';

const { render, screen } = require('@testing-library/react');

test('ToDoList', () => {
  const tasks = [
    { id: 1, title: 'eat dinner' },
    { id: 2, title: 'sleep' },
  ];

  render(<ToDoList tasks={tasks} />);

  screen.getByText('eat dinner');
  screen.getByText('sleep');
});
