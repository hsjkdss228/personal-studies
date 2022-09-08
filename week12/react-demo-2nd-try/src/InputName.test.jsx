import { fireEvent, render, screen } from '@testing-library/react';

import InputName from './InputName';

test('Greeting', () => {
  const name = 'world';

  const handleChange = jest.fn();

  render((
    <InputName
      name={name}
      onChange={handleChange}
    />
  ));

  screen.getByLabelText('Name:');
  screen.getByDisplayValue(name);

  fireEvent.change(screen.getByLabelText('Name:'), {
    target: { value: 'Chikorita' },
  });

  expect(handleChange).toBeCalled();
});
