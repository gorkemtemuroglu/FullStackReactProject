package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.entity.Bank;

import java.util.List;

public interface BankRepository extends JpaRepository<Bank,Long> {
    Bank findById(long id);
    List<Bank> findByUserId(long id);
}
