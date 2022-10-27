import "./emailCardStyles.css";
import pro1 from "../../assets/project1.png"
import {Link, NavLink} from "react-router-dom";
import React from "react";
import serialize from "form-serialize";
import {updateWork} from "../../api/getWork";
import {updateEmail} from "../../api/getEmail";

class EmailCard extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      showForm1: false
    }
  }

  handleFormSubmit1 = (e) => {
    e.preventDefault();
    const updateEmails = serialize(e.target, {hash: true});
    // console.log(typeof newPerson);
    console.log(updateEmails);
    updateEmail(this.updateEmailToState, updateEmails);
    this.setState({showForm1: false});
  }

  updateEmailToState = (email) => {
    this.setState({ showForm1:false});
    this.props.updateCallback(email);
  }

  deleteEmailFromState = (id) => {
    this.props.deleteCallback(id);
  }

  render() {
    return <div className="email-card">

      {this.state.showForm1 && <div className="form-display">
        <form onSubmit={this.handleFormSubmit1}>

          <label>New Email</label>
          <input type="email" name="email" id="email" defaultValue={this.props.email}></input>


          <input type="hidden" name="id" defaultValue={this.props.id}></input>


          <button className="btn" >Submit</button>
          <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
        </form>
      </div>
      }

      <img src={this.props.imgsrc} alt="image" className="same"/>
      <h2 className="email-title">{this.props.email}</h2>

      <div className="pro-btns">
        <button onClick={() => this.setState({showForm1: !this.state.showForm1})} className="btn btn-style" style={{backgroundColor: "yellow"}} >update </button>
        <button onClick={() => this.deleteEmailFromState(this.props.id)} className="btn btn-style" style={{backgroundColor: "yellow"}} >delete </button>
      </div>

    </div>;
  };


}


export default EmailCard;
