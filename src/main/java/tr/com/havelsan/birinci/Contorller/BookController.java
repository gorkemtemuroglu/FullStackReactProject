package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Books;
import tr.com.havelsan.birinci.models.BooksODTO;
import tr.com.havelsan.birinci.service.BookService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController {

    @Autowired
    BookService bookService;

    @PostMapping("/book")
    public Books createBook(@RequestBody BooksODTO booksODTO){
          return bookService.saveBook(booksODTO);
    }

    @GetMapping("/book/{id}")
    public Books getBook(@PathVariable long id ){
        return bookService.fetchBookList(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/book/person/{id}")
    public List<Books> getAllBooks(@PathVariable long id) {
        return bookService.fetchAllBookList(id);
    }

    @PutMapping("/book")
    public Books updateBook(@RequestBody BooksODTO booksODTO){
       return bookService.updateBook(booksODTO);
    }

    @DeleteMapping("/book/{id}")
    public String deleteBook(@PathVariable long id) {
        bookService.deleteBookById(id);
        return "You deleted the book which id is : " +id;
    }
}
