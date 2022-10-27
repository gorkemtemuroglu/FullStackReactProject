package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Books;
import tr.com.havelsan.birinci.entity.Car;

import java.util.List;

public interface CarRepository extends JpaRepository<Car,Long> {
    Car findById(long id);
    List<Car> findByUserId(long id);
}
