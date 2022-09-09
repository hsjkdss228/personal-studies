import { fireEvent, render, screen } from '@testing-library/react';
import ToDoInput from './ToDoInput';

test('ToDoInput', () => {
  const title = 'Be Happy';

  const addTask = jest.fn();

  render(<ToDoInput addTask={addTask} />);

  fireEvent.change(screen.getByLabelText('Task'), {
    target: { value: title },
  });

  screen.getByDisplayValue(title);

  fireEvent.click(screen.getByText('add'));

  expect(addTask).toBeCalledWith(title);
});
