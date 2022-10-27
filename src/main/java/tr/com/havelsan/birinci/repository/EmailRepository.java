package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Email;

import java.util.List;

public interface EmailRepository extends JpaRepository<Email,Long> {
    Email findById(long id);
    List<Email> findByUserId(long id);
}
