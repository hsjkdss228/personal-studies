Feature('잔액 확인 - 고객은 얼마를 쓸 수 있는지 알기 위해 본인 계좌의 잔액을 확인할 수 있다.');

// Given
Before(({ I }) => {
  // 계좌 설정
  // GET /backdoor/setup-database
  I.setupDatabase();

  I.amOnPage('/');

  // TODO: 로그인
});

Scenario('잔액 미보유', ({ I }) => {
  // Given
  // 잔액을 0으로 설정
  // GET /backdoor/change-amount?userId=1&amount=0
  I.changeAmount({ userId: 1, amount: 0 });

  I.amOnPage('/');

  // When
  I.click('잔액 확인');

  // Then
  I.see('잔액이 없습니다');
});

Scenario('잔액 보유', ({ I }) => {
  // Given
  // 잔액을 123000으로 설정
  // GET /backdoor/change-amount?userId=1&amount=123000
  I.changeAmount({ userId: 1, amount: 123000 });

  I.amOnPage('/');

  // When
  I.click('잔액 확인');

  // Then
  I.see('잔액: 123,000원');
});
