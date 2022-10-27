package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Work;

import java.util.List;

public interface WorkRepository extends JpaRepository<Work,Long> {
    Work findById(long id);
    List<Work> findByUserId(long id);
}
