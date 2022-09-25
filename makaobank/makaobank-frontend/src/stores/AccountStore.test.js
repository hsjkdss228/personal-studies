import AccountStore from './AccountStore';

describe('AccountStore', () => {
  it('모든 속성을 부여해 계좌 생성', () => {
    const accountStore = new AccountStore({
      account: 'a',
      amount: 1_000,
      transactions: [],
    });

    expect(accountStore.account).toBe('a');
    expect(accountStore.amount).toBe(1_000);
    expect(accountStore.transactions).toEqual([]);
  });

  it('거래내역을 부여하지 않고 계좌 생성', () => {
    const accountStore = new AccountStore({
      account: 'a',
      amount: 1_000,
    });

    expect(accountStore.account).toBe('a');
    expect(accountStore.amount).toBe(1_000);
    expect(accountStore.transactions).toEqual([]);
  });

  it('잔액을 부여하지 않고 계좌 생성', () => {
    const accountStore = new AccountStore({
      account: 'a',
      transactions: [],
    });

    expect(accountStore.account).toBe('a');
    expect(accountStore.amount).toBe(0);
    expect(accountStore.transactions).toEqual([]);
  });
});
