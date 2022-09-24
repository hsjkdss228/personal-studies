import { Routes, Route } from 'react-router-dom';

import { Reset } from 'styled-reset';
import styled from 'styled-components';

import Header from './components/Header';

import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/Transasctions';
import TransferPage from './pages/TransferPage';

import GlobalStyle from './styles/GlobalStyle';

const Main = styled.main`
  padding: 1em;
`;

export default function App() {
  // const Component = useRouteComponent();

  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </Main>
    </div>
  );
}
