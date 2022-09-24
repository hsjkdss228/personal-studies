Feature('Account detail');

// Given
Before(({ I }) => {
  // TODO: 계좌 설정

  I.amOnPage('/');

  // TODO: 로그인
});

// TODO: 잔액 없는 경우 처리 필요함
// Scenario('잔액 미보유', ({ I }) => {
//   // When
//   I.click('잔액 확인');

//   // Then
//   I.see('잔액이 없습니다');
// });

Scenario('잔액 보유', ({ I }) => {
  // When
  I.click('잔액 확인');

  // Then
  I.see('잔액: 123,000원');
});
