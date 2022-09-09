import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';

test('App', () => {
  render(<Greeting name="Chikorita" />);

  screen.getByText('Hello, Chikorita!');
});
