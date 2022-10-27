import "./telCardStyles.css";
import React from "react";
import serialize from "form-serialize";
import {updateWork} from "../../api/getWork";
import {updateTel} from "../../api/getTel";

class TelCard extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      showForm1: false
    }
  }

  handleFormSubmit1 = (e) => {
    e.preventDefault();
    const updateTels = serialize(e.target, {hash: true});
    // console.log(typeof newPerson);
    console.log(updateTels);
    updateTel(this.updateTelToState, updateTels);
    this.setState({showForm1: false});
  }

  updateTelToState = (tel) => {
    this.setState({ showForm1:false});
    this.props.updateCallback(tel);
  }

  deleteTelFromState = (id) => {
    this.props.deleteCallback(id);
  }


  render() {

    return <div className="tel-card">

      {this.state.showForm1 && <div className="form-display">
        <form onSubmit={this.handleFormSubmit1}>

          <label>New Tel</label>
          <input type="tel" name="tel" id="tel" defaultValue={this.props.tel}></input>

          <input type="hidden" name="id" defaultValue={this.props.id}></input>


          <button className="btn" >Submit</button>
          <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
        </form>
      </div>
      }

      <img src={this.props.imgsrc} alt="image"/>
      <div className="pro-details">
        <h2 className="tel-title">{this.props.tel}</h2>
      </div>
      <div className="pro-btns">
        <button onClick={() => this.setState({showForm1: !this.state.showForm1})} className="btn btn-style" style={{backgroundColor: "yellow"}} >update </button>
        <button onClick={() => this.deleteTelFromState(this.props.id)} className="btn btn-style" style={{backgroundColor: "yellow"}} >delete </button>
      </div>

    </div>;
  };
  }



export default TelCard;
