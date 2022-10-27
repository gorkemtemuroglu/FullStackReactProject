package tr.com.havelsan.birinci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.com.havelsan.birinci.entity.Bank;
import tr.com.havelsan.birinci.entity.Books;

import java.util.List;

public interface BooksRepository extends JpaRepository<Books,Long> {
    Books findById(long id);
    List<Books> findByUserId(long id);
}
