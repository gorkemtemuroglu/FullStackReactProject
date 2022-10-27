import "./adressCardStyles.css";
import pro1 from "../../assets/project1.png"
import {Link, NavLink} from "react-router-dom";
import React from "react";
import serialize from "form-serialize";
import {updateWork} from "../../api/getWork";
import {updateAdress} from "../../api/getAdress";

class AdressCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm1: false
    }
  }

  handleFormSubmit1 = (e) => {
    e.preventDefault();
    const updateAdresses = serialize(e.target, {hash: true});
    // console.log(typeof newPerson);
    console.log(updateAdresses);
    updateAdress(this.updateAdressToState, updateAdresses);
    this.setState({showForm1: false});
  }

  updateAdressToState = (adress) => {
    this.setState({ showForm1:false});
    this.props.updateCallback(adress);
  }

  deleteAdressFromState = (id) => {
    this.props.deleteCallback(id);
  }

  render() {
    return <div className="adress-card">

      {this.state.showForm1 && <div className="form-display">
        <form onSubmit={this.handleFormSubmit1}>

          <label>New adress type</label>
          <input type="adress_type" name="adress_type" id="adress_type" defaultValue={this.props.Adress_type}></input>
          <label>New city name</label>
          <input type="city" name="city" id="city" defaultValue={this.props.City}></input>
          <label>New adress name</label>
          <input type="adress" name="adress" id="adress" defaultValue={this.props.Adress}></input>

          <input type="hidden" name="id" defaultValue={this.props.id}></input>


          <button className="btn" >Submit</button>
          <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
        </form>
      </div>
      }

      <img src={this.props.imgsrc} alt="image"/>
      <h2 className="adress-title">{this.props.Adress}</h2>
      <div className="pro-details">
        <h2>{this.props.Adress_type}</h2>
        <h2>{this.props.City}</h2>


        <div className="pro-btns">
          <button onClick={() => this.setState({showForm1: !this.state.showForm1})} className="btn btn-style" style={{backgroundColor: "yellow"}} >update</button>
          <button onClick={() => this.deleteAdressFromState(this.props.id)} className="btn btn-style" style={{backgroundColor: "yellow"}} >delete</button>
        </div>
      </div>
    </div>;
  };
  }


export default AdressCard;
