export default class BankStore {
  constructor() {
    this.name = '';
    this.accountNumber = '';
    this.amount = 0;
    this.transactions = [];
  }

  login({ accountNumber, password }) {
    // TODO: 서버에서 정보를 가져와야 함
    if (accountNumber !== '1234') {
      return;
    }

    this.name = 'Tester';
    this.amount = 100_000;
  }
}
