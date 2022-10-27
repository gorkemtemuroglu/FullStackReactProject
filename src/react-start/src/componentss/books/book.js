import "./bookCardStyles.css";
import BankCradData from "./bookCradData";
import BookCard from "./bookCard";
import BookCardData from "./bookCradData";
import React from "react";
import getBank from "../../api/getBank";
import getBooks, {addBook, deleteBook} from "../../api/getBooks";
import bookImg from "../../assets/books.jpg"
import getWork, {addWork, deleteWork} from "../../api/getWork";
import serialize from "form-serialize";

class Book extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      id:undefined,
      book : undefined
    }
  }

  updateState =(book)=> {
    this.setState({book:book,id:this.props.id});
  }

  addBookToState =(friend)=> {
    this.setState({book:[...this.state.book,friend]});
  }


  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newBook = serialize(e.target,{hash:true});
    // console.log(typeof newPerson);
    console.log(newBook);
    addBook(this.addBookToState,newBook );
    this.setState({showForm:false});
  }

  deleteBookFromState = (id) => {
    deleteBook(id);
    const newBook = this.state.book.filter(i => i.id !== id);
    this.setState({book:newBook});
  }

  updateState = (book) => {
    this.setState({book: book, id: this.props.id});
  }


  updateBookInState = (book) => {
    const newBook = this.state.book.map(i => {
      if (i.id === book.id){
        return book;
      }
      return i;
    })
    this.setState({book:newBook});
  }




  render() {

    if (this.state.id  !== this.props.id){
      getBooks(this.updateState, this.props.id);
    }


    return <div className="book-list-container" >
      <h1 className="book-heading">Okuduğu kitap bilgileri</h1>

      {this.state.showForm && <div>
        <form onSubmit={this.handleFormSubmit}>

          <label >Book name</label>
          <input type="book" name="book" id="car"></input>

          <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

          <button className="btn">Submit</button>

        </form>
      </div>
      }
      <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add Book</button>

      <div className="book-container">

        {this.state.book && this.state.book.map((val,ind) =>{
          return(
              <BookCard
                  key={ind}
                  imgsrc={bookImg}
                  book={val.book}
                  deleteCallback={this.deleteBookFromState}
                  updateCallBack={this.updateBookInState}
                  id={val.id}
                  Author="Tavsiyedir."
                  view={val.view}
              />
          )
        })}
      </div>
    </div>;
  }


};

export default Book;
