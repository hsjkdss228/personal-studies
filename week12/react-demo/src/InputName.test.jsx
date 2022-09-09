import { render, screen, fireEvent } from '@testing-library/react';

import InputName from './InputName';

test('App', () => {
  const name = 'Chikorita';

  const handleChange = jest.fn();

  render(<InputName name={name} onChange={handleChange} />);

  screen.getByLabelText('Name:');
  screen.getByDisplayValue('Chikorita');

  fireEvent.change(screen.getByLabelText('Name:'), {
    target: { value: 'Monkey' },
  });

  expect(handleChange).toBeCalled();
});
