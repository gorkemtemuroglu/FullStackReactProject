import "./hobiCardStyles.css";
import HobiCradData from "./hobiCradData";
import HobiCard from "./hobiCard";
import React from "react";
import getAdress from "../../api/getAdress";
import getHobi, {addHobi, deleteHobi} from "../../api/getHobi";
import hobiImg from "../../assets/hobi.jpg"
import getBooks from "../../api/getBooks";
import serialize from "form-serialize";
import {addEducation} from "../../api/getEducation";
import {deleteCar} from "../../api/getCar";

class Hobi extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      showForm : undefined,
      id : undefined,
      hobi : undefined
    }
  }

  deleteHobiFromState = (id) => {
    deleteHobi(id);
    const newHobi = this.state.hobi.filter(i => i.id !== id);
    this.setState({hobi:newHobi});
  }


  updateState = (hobi) => {
    this.setState({hobi: hobi, id: this.props.id});
  }


  updateHobiInState = (hobi) => {
    const newHobi = this.state.hobi.map(i => {
      if (i.id === hobi.id){
        return hobi;
      }
      return i;
    })
    this.setState({hobi:newHobi});
  }

  addHobiToState =(friend)=> {
    this.setState({hobi:[...this.state.hobi,friend]});
  }


  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newHobi = serialize(e.target,{hash:true});
    // console.log(typeof newPerson);
    console.log(newHobi);
    addHobi(this.addHobiToState,newHobi );
    this.setState({showForm:false});
  }


  render() {

    if (this.state.id  !== this.props.id){
      getHobi(this.updateState, this.props.id);
    }

    return <div className="hobi-list-container" >
      <h1 className="hobi-heading">Hobi bilgileri</h1>

      {this.state.showForm && <div>
        <form onSubmit={this.handleFormSubmit}>

          <label >Hobi name</label>
          <input type="hobi" name="hobi" id="hobi"></input>

          <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

          <button className="btn">Submit</button>

        </form>
      </div>
      }
      <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add Hobi</button>

      <div className="hobi-container">

        { this.state.hobi && this.state.hobi.map((val,ind) =>{
          return(
              <HobiCard
                  key={ind}
                  imgsrc={hobiImg}
                  hobi={val.hobi}
                  updateCallback={this.updateHobiInState}
                  deleteCallback={this.deleteHobiFromState}
                  id={val.id}
                  view={val.view}
              />
          )
        })}
      </div>
    </div>;
  }


};

export default Hobi;
