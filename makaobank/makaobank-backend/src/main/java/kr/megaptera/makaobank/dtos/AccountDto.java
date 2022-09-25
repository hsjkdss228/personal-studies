package kr.megaptera.makaobank.dtos;

public class AccountDto {
  private String accountNumber;
  private String name;
  private long amount;

  public AccountDto(String accountNumber, String name, long amount) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.amount = amount;
  }

  public String getAccountNumber() {
    return accountNumber;
  }

  public String getName() {
    return name;
  }

  public long getAmount() {
    return amount;
  }
}
