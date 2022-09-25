import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import App from './App';

test('App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  screen.getByText(/Hello/);
});
