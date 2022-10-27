package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Education;

import java.util.List;

public interface EducationRepository extends JpaRepository<Education,Long> {
    Education findById(long id);
    List<Education> findByUserId(long id);
}
