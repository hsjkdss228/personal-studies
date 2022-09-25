import BankStore from './BankStore';

import server from '../testServer';

// jest.mock('../services/ApiService', () => ({
//   apiService: {
//     async postSession({ accountNumber, password }) {
//       if (accountNumber === '1234' && password === 'password') {
//         return {
//           accessToken: 'ACCESS.TOKEN',
//           name: 'Tester',
//           amount: 100_000,
//         };
//       }

//       throw new Error('Login failed');
//     },
//   },
// }));

// jest.mock('../services/ApiService');

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

const context = describe;

describe('BankStor', () => {
  describe('login', () => {
    context('올바른 계좌번호와 비밀번호인 경우', () => {
      it('내 계좌 정보를 불러옴', async () => {
        const bankStore = new BankStore();

        await bankStore.login({ accountNumber: '1234', password: 'password' });

        expect(bankStore.name).toBe('Tester');
        expect(bankStore.amount).toBe(100_000);
      });
    });

    context('계좌번호가 올바르지 않은 경우', () => {
      it('예외 처리', async () => {
        const bankStore = new BankStore();

        await bankStore.login({ accountNumber: 'wrong', password: 'password' });

        expect(bankStore.name).toBeFalsy();
        expect(bankStore.amount).toBeFalsy();
      });
    });
  });
});
