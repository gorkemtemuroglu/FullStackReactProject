package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Tel;

import java.util.List;
import java.util.Optional;

public interface TelRepository extends JpaRepository<Tel,Long> {

    Tel findById(long id);
    List<Tel> findByUserId(long id);

}
