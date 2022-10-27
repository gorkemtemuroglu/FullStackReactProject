import "./emailCardStyles.css";
import EmailCradData from "./emailCradData";
import EmailCard from "./emailCard";
import React from "react";
import getAdress from "../../api/getAdress";
import getEmail, {addEmail, deleteEmail} from "../../api/getEmail";
import emailImage from "../../assets/emai.png"
import getTel, {deleteTel} from "../../api/getTel";
import serialize from "form-serialize";
import {addCar} from "../../api/getCar";
import {deleteHobi} from "../../api/getHobi";

class Email extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      id:undefined,
      email : undefined,
    }
  }

  deleteEmailFromState = (id) => {
    deleteEmail(id);
    const newTel = this.state.email.filter(i => i.id !== id);
    this.setState({email:newTel});
  }


  updateEmailInState = (email) => {
    const newEmail = this.state.email.map(i => {
      if (i.id === email.id){
        return email;
      }
      return i;
    })
    this.setState({email:newEmail});
  }

  updateState =(email)=> {
    this.setState({email:email,id:this.props.id});
  }

  addEmailToState =(friend)=> {
    this.setState({email:[...this.state.email,friend]});
  }


  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newEmail = serialize(e.target,{hash:true});
    // console.log(typeof newPerson);
    console.log(newEmail);
    addEmail(this.addEmailToState,newEmail );
    this.setState({showForm:false});
  }


  render() {

    if (this.state.id  !== this.props.id){
      getEmail(this.updateState, this.props.id);
    }

    return <div className="email-list-container" >
      <h1 className="email-heading">E-mail Bilgileri</h1>

      {this.state.showForm && <div>
        <form onSubmit={this.handleFormSubmit}>

          <label >Email</label>
          <input type="email" name="email" id="email"></input>

          <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

          <button className="btn">Submit</button>
        </form>
      </div>
      }
      <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add email</button>

      <div className="email-container">

        {this.state.email && this.state.email.map((val,ind) =>{
          return(
              <EmailCard
                  key={ind}
                  imgsrc={emailImage}
                  email={val.email}
                  updateCallback={this.updateEmailInState}
                  deleteCallback={this.deleteEmailFromState}
                  id={val.id}
                  view={val.view}
              />
          )
        })}
      </div>
    </div>;
  }

};

export default Email;
