import "./bankCardStyles.css";
import pro1 from "../../assets/project1.png"
import {Link, NavLink} from "react-router-dom";
import React from "react";
import serialize from "form-serialize";
import {updateCar} from "../../api/getCar";
import {updateBank} from "../../api/getBank";

class BankCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm1: false
    }
  }

  deleteCarFromState = (id) => {
    this.props.deleteCallback(id);
  }

  updateBankToState = (bank) => {
    this.setState({ showForm1:false});
    this.props.updateCallback(bank);
  }

  handleFormSubmit1 = (e) => {
    e.preventDefault();
    const updateBanks = serialize(e.target, {hash: true});
    // console.log(typeof newPerson);
    console.log(updateBanks);
    updateBank(this.updateBankToState, updateBanks);
    this.setState({showForm1: false});
  }




  render() {

    return <div className="bank-card">

      {this.state.showForm1 && <div className="form-display">
        <form onSubmit={this.handleFormSubmit1}>

          <label>New Bank</label>
          <input type="bank" name="bank" id="bank" defaultValue={this.props.bank}></input>
          <label>New Kart</label>
          <input type="kart" name="kart" id="kart" defaultValue={this.props.kart}></input>

          <input type="hidden" name="id" defaultValue={this.props.id}></input>


          <button className="btn" >Submit</button>
          <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
        </form>
      </div>
      }


      <img src={this.props.imgsrc} alt="image"/>
      <h2 className="bank-title">{this.props.bank}</h2>
      <div className="pro-details bank-card">
        <h2 className="special1">{this.props.kart}</h2>
        <div className="pro-btns">
          <button className="btn btn-style" style={{backgroundColor: "yellow"}} onClick={() => this.setState({showForm1: !this.state.showForm1})}>update</button>
          <button onClick={() => this.deleteCarFromState(this.props.id)} className="btn btn-style" style={{backgroundColor: "yellow"}} >delete</button>
        </div>
      </div>
    </div>;
  };

  }



export default BankCard;
