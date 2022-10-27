package tr.com.havelsan.birinci.service;

import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.entity.Books;
import tr.com.havelsan.birinci.models.AdressDTO;
import tr.com.havelsan.birinci.models.BooksODTO;

import java.util.List;

public interface BookService {


    //Save operation
    Books saveBook(BooksODTO booksODTO);


    //Read operation
    Books fetchBookList(long id);

    //Book Main person
    List<Books> fetchAllBookList(long id);


    //Update operation
    Books updateBook(BooksODTO booksODTO);

    //Delete operation
    void deleteBookById(long personId);





}
