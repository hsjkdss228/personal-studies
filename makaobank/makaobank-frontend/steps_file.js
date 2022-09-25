/* global actor */

// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  // Define custom steps here, use 'this' to access default methods of I.
  // It is recommended to place a general 'login' function here.
  setupDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/setup-database`);
  },
  changeAmount({ userId, amount }) {
    // 이 방법과 아래 방법 중 선택할 수 있음, 나타내는 URL은 같음
    // const query = `userId=${userId}&amount=${amount}`;
    // this.amOnPage(`${backdoorBaseUrl}/change-amount?${query}`);
    this.amOnPage([
      backdoorBaseUrl,
      '/change-amount',
      `?userId=${userId}&amount=${amount}`,
    ].join(''));
  },
});
