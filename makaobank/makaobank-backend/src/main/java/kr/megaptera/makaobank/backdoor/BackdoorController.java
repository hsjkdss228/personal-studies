package kr.megaptera.makaobank.backdoor;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("backdoor")
@Transactional
public class BackdoorController {
  private final JdbcTemplate jdbcTemplate;

  public BackdoorController(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @GetMapping("setup-database")
  public String setupDatabase() {
    // 1. 기존 데이터 삭제
    jdbcTemplate.execute("DELETE FROM account");

    // 2. 내가 원하는 데이터로 초기화
    jdbcTemplate.execute("" +
        "INSERT INTO " +
        "account(id, name, account_number, amount) " +
        "VALUES(1, 'tester', '1234', 123000)");
    jdbcTemplate.execute("" +
        "INSERT INTO " +
        "account(id, name, account_number, amount) " +
        "VALUES(2, 'Inu', '352', 60000000)");

    return "OK";
  }

  @GetMapping("change-amount")
  public String changeAmount(
      @RequestParam Long userId,
      @RequestParam Long amount
  ) {
    jdbcTemplate.update("UPDATE account SET amount=? WHERE id=?"
        , amount, userId);

    return "OK";
  }
}
