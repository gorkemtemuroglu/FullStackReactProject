import "./carCardStyles.css";
import pro1 from "../../assets/project1.png"
import {Link, NavLink} from "react-router-dom";
import React from "react";
import serialize from "form-serialize";
import {updateCar} from "../../api/getCar";


class CarCard extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      showForm1: false
    }
  }


  deleteCarFromState = (id) => {
    this.props.deleteCallback(id);
  }

  updateCarToState = (car) => {
    this.setState({ showForm1:false});
    this.props.updateCallback(car);
  }

  handleFormSubmit1 = (e) => {
    e.preventDefault();
    const updateCars = serialize(e.target, {hash: true});
    // console.log(typeof newPerson);
    console.log(updateCars);
    updateCar(this.updateCarToState, updateCars);
    this.setState({showForm1: false});
  }

  render() {
    return <div className="car-card">

      {this.state.showForm1 && <div className="form-display">
        <form onSubmit={this.handleFormSubmit1}>

          <label>New name</label>
          <input type="car" name="car" id="car" defaultValue={this.props.car}></input>
          <label>New Color</label>
          <input type="car_color" name="car_color" id="car_color" defaultValue={this.props.car_color}></input>

          <input type="hidden" name="id" defaultValue={this.props.id}></input>


          <button className="btn" >Submit</button>
          <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
        </form>
      </div>
      }


        <img src={this.props.imgsrc} alt="image"/>
        <h2 className="car-title">{this.props.car}</h2>
  <div className="pro-details">
  <h2>Color : {this.props.car_color}</h2>



  <div className="pro-btns">
    <button className="btn " style={{backgroundColor: "yellow"}} onClick={() => this.setState({showForm1: !this.state.showForm1})}>update</button>
    <button onClick={() => this.deleteCarFromState(this.props.id)} className="btn " style={{backgroundColor: "yellow"}} >delete</button>
  </div>

  </div>
  </div>;
  };
  }




export default CarCard;
