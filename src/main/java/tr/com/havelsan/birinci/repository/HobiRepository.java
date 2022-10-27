package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Hobi;

import java.util.List;

public interface HobiRepository extends JpaRepository<Hobi,Long> {
    Hobi findById(long id);
    List<Hobi> findByUserId(long id);
}
