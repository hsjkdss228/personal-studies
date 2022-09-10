import ToDoInput from './ToDoInput';

const { render, screen, fireEvent } = require('@testing-library/react');

test('ToDoInput', () => {
  const addTask = jest.fn();

  render(<ToDoInput addTask={addTask} />);

  screen.getByLabelText('Task');

  fireEvent.change(screen.getByLabelText('Task'), {
    target: { value: 'hi~~~' },
  });

  fireEvent.click(screen.getByText('추가'));

  expect(addTask).toBeCalledWith('hi~~~');
});
