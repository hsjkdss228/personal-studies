import { Routes, Route } from 'react-router-dom';

import { Reset } from 'styled-reset';
import styled, { ThemeProvider } from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';

import Header from './components/Header';

import Button from './components/ui/Button';
import PrimaryButton from './components/ui/PrimaryButton';
import SecondaryButton from './components/ui/SecondaryButton';

import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/Transasctions';
import TransferPage from './pages/TransferPage';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

import GlobalStyle from './styles/GlobalStyle';

const Main = styled.main`
  padding: 1em;
`;

export default function App() {
  const [themeName, setThemeName] = useLocalStorage('theme', 'default');

  // const Component = useRouteComponent();

  const toggleTheme = () => {
    setThemeName(themeName === 'default' ? 'dark' : 'default');
  };

  const theme = themeName === 'dark' ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Button
        type="button"
        onClick={toggleTheme}
      >
        Toggle theme
      </Button>
      <PrimaryButton
        type="button"
        onClick={toggleTheme}
      >
        Toggle theme
      </PrimaryButton>
      <SecondaryButton
        type="button"
        onClick={toggleTheme}
      >
        Toggle theme
      </SecondaryButton>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}
