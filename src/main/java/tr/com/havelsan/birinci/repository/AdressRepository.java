package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.entity.Person;

import java.util.List;


public interface AdressRepository extends JpaRepository<Adress, Long> {
    Adress findById(long id);
    List<Adress> findByUserId(long id);
}
