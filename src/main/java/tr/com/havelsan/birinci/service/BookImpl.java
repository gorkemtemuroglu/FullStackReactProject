package tr.com.havelsan.birinci.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Books;
import tr.com.havelsan.birinci.models.BooksODTO;
import tr.com.havelsan.birinci.repository.BooksRepository;

import java.util.List;

@Service
public class BookImpl implements BookService {

    @Autowired
    BooksRepository booksRepository;


    @Override
    public Books saveBook(BooksODTO booksODTO) {
        Books books = new Books();
        books.setBook(booksODTO.getBook());
        books.setUserId(booksODTO.getUserId());
        books.setAuthor_id(booksODTO.getAuthor_id());


        return booksRepository.save(books);
    }

    @Override
    public Books fetchBookList(long id) {
        return booksRepository.findById(id);
    }

    @Override
    public List<Books> fetchAllBookList(long id) {
        return booksRepository.findByUserId(id);
    }

    @Override
    public Books updateBook(BooksODTO booksODTO) {
        Books books = booksRepository.findById(booksODTO.getId());
        books.setBook(booksODTO.getBook());
        books.setAuthor_id(booksODTO.getAuthor_id());


        return booksRepository.save(books);
    }

    @Override
    public void deleteBookById(long personId) {
        Books books = booksRepository.findById(personId);
        booksRepository.delete(books);

    }
}
