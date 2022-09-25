import TransferStore from './TransferStore';

const context = describe;

describe('TransferStore', () => {
  context('송금액이 정상일 때', () => {
    it('잔액을 갱신', () => {
      const transferStore = new TransferStore();

      expect(transferStore.amount('a')).toBe(2_000);
      expect(transferStore.amount('b')).toBe(0);

      transferStore.transfer('a', 'b', 1_000);

      expect(transferStore.amount('a')).toBe(1_000);
      expect(transferStore.amount('b')).toBe(1_000);
    });
  });

  context('송금액이 잔액보다 클 때', () => {
    it('잔액을 갱신하지 않음', () => {
      const transferStore = new TransferStore();

      expect(transferStore.amount('a')).toBe(2_000);
      expect(transferStore.amount('b')).toBe(0);

      transferStore.transfer('a', 'b', 20_000_000);

      expect(transferStore.amount('a')).toBe(2_000);
      expect(transferStore.amount('b')).toBe(0);
    });
  });
});
