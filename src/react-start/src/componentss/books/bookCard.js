import "./bookCardStyles.css";
import pro1 from "../../assets/project1.png"
import {Link, NavLink} from "react-router-dom";
import React from "react";
import serialize from "form-serialize";
import {updateWork} from "../../api/getWork";
import {updateBook} from "../../api/getBooks";

class BookCard extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      showForm1: false
    }
  }
  handleFormSubmit1 = (e) => {
    e.preventDefault();
    const updateBooks = serialize(e.target, {hash: true});
    // console.log(typeof newPerson);
    console.log(updateBooks);
    updateBook(this.updateBookState, updateBooks);
    this.setState({showForm1: false});
  }

  updateBookState = (book) => {
    this.setState({ showForm1:false});
    this.props.updateCallBack(book);
  }

  deleteBookFromState = (id) => {
    this.props.deleteCallback(id);
  }

  render() {
    return <div className="book-card">

      {this.state.showForm1 && <div className="form-display">
        <form onSubmit={this.handleFormSubmit1}>

          <label>New Book Name</label>
          <input type="book" name="book" id="book" defaultValue={this.props.book}></input>

          <input type="hidden" name="id" defaultValue={this.props.id}></input>


          <button className="btn" >Submit</button>
          <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
        </form>
      </div>
      }

      <img src={this.props.imgsrc} alt="image" className="same"/>
      <h2 className="book-title">{this.props.book}</h2>
      <div className="pro-details">
        <h2>{this.props.Author}</h2>
        <div className="pro-btns">
          <button onClick={() => this.setState({showForm1: !this.state.showForm1})} className="btn btn-style" style={{backgroundColor: "yellow"}} >update</button>
          <button onClick={() => this.deleteBookFromState(this.props.id)} className="btn btn-style" style={{backgroundColor: "yellow"}} >delete</button>
        </div>
      </div>
    </div>;
    };
  }








export default BookCard;
