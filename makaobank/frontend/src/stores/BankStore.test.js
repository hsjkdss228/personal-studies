import BankStore from './BankStore';

const context = describe;

describe('BankStor', () => {
  describe('login', () => {
    context('올바른 계좌 이름과 비밀번호인 경우', () => {
      it('내 계좌 정보를 불러옴', () => {
        const bankStore = new BankStore();

        bankStore.login({ accountNumber: '1234', password: 'password' });

        expect(bankStore.name).toBe('Tester');
        expect(bankStore.amount).toBe(100_000);
      });
    });

    context('계좌 이름이 올바르지 않은 경우', () => {
      it('임시 계좌 정보를 불러옴', () => {
        const bankStore = new BankStore();

        bankStore.login({ accountNumber: 'wrong', password: 'password' });

        expect(bankStore.name).toBeFalsy();
        expect(bankStore.amount).toBeFalsy();
      });
    });
  });
});
