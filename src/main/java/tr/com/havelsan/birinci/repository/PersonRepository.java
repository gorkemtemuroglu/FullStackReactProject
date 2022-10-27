package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tr.com.havelsan.birinci.entity.Person;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {
    Person findById(long id);
    List<Person> findByUserIdAndTip(long id, String tip);

    @Query(
            value="select * from person where (user_id = ?1 and tip = ?2 ) or (id = (select user_id from person where id = ?1))", nativeQuery = true)
    List<Person> getByUserIdAndTip(long id, String tip);

}
