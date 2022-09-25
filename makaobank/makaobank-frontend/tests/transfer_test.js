Feature('송금: 고객은 실물 거래에 대한 대가를 지불하기 위해 타인에게 송금할 수 있다.');

// Given
Before(({ I }) => {
  // TODO: 계좌 설정

  I.amOnPage('/');

  // TODO: 로그인

  I.click('송금');
});

Scenario('송금 성공', ({ I }) => {
  // When
  I.fillField('받을 분 계좌 번호', '1234567890');
  I.fillField('보낼 금액', '3000');
  I.click('보내기');

  // Then
  I.see('계좌 이체 성공');
});

// TODO: 예외 상황 처리 필요
// Scenario('송금 실패: 잔액 부족', ({ I }) => {
//   // When
//   I.fillField('받을 분 계좌 번호', '1234567890');
//   I.fillField('보낼 금액', '300000000');
//   I.click('보내기');

//   // Then
//   I.see('잔액이 부족합니다');
// });

// Scenario('송금 실패: 계좌 번호 오류', ({ I }) => {
//   // When
//   I.fillField('받을 분 계좌 번호', 'wrong');
//   I.fillField('보낼 금액', '3000');
//   I.click('보내기');

//   // Then
//   I.see('계좌 번호가 틀립니다');
// });
