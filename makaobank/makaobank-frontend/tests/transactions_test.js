Feature('거래 내역 확인: 고객은 소비 계획을 세울 수 있도록 거래 내역을 확인할 수 있다.');

// Given
Before(({ I }) => {
  // TODO: 계좌 설정

  I.amOnPage('/');

  // TODO: 로그인

  I.click('거래 내역 확인');
});

// TODO: 예외 처리 필요
// Scenario('거래 내역 미존재', ({ I }) => {
//   // When
//   I.click('거래 내역 확인');

//   // Then
//   I.see('거래 내역이 없습니다');
// });

Scenario('거래 내역 존재', ({ I }) => {
  // Given
  I.click('송금');
  I.fillField('받을 분 계좌 번호', '1234567890');
  I.fillField('보낼 금액', '3000');
  I.click('보내기');

  I.waitForText('계좌 이체 성공');

  // When
  I.amOnPage('/');
  I.click('거래 내역 확인');

  // Then
  I.see('송금\t1234567890\t3,000원');
});
