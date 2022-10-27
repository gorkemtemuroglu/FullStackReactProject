import "./carCardStyles.css";
import CarCard from "./carCard";
import React from "react";
import getCar, {addCar, deleteCar} from "../../api/getCar";
import carImage from "../../assets/car.png"
import serialize from "form-serialize";

class Car extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      id : undefined,
      car : undefined,
    }
  }



  addCarToState =(friend)=> {
    this.setState({car:[...this.state.car,friend]});
  }


  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newCar = serialize(e.target,{hash:true});
    // console.log(typeof newPerson);
    console.log(newCar);
    addCar(this.addCarToState,newCar );
    this.setState({showForm:false});
  }

  deleteCarFromState = (id) => {
    deleteCar(id);
    const newCar = this.state.car.filter(i => i.id !== id);
    this.setState({car:newCar});
  }

  updateState = (car) => {
    this.setState({car: car, id: this.props.id});
  }


  updateCarInState = (car) => {
    const newCar = this.state.car.map(i => {
      if (i.id === car.id){
        return car;
      }
      return i;
    })
    this.setState({car:newCar});
  }

  render() {

    if (this.state.id  !== this.props.id){
      getCar(this.updateState, this.props.id);
    }



    return <div className="car-list-container" >
      <h1 className="car-heading">Araba bilgileri</h1>
      {this.state.showForm && <div>
        <form onSubmit={this.handleFormSubmit}>

          <label >Car name</label>
          <input type="car" name="car" id="car"></input>

          <label>Car color</label>
          <input type="car_color" name="car_color" id="car_color" ></input>

          <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

          <button className="btn">Submit</button>
        </form>
      </div>
      }

      <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add car</button>

      <div className="car-container">

        {this.state.car && this.state.car.map((val,ind) =>{
          return(
              <CarCard
                  key={ind}
                  imgsrc={carImage}
                  updateCallback={this.updateCarInState}
                  deleteCallback={this.deleteCarFromState}
                  car={val.car}
                  car_color={val.car_color}
                  id={val.id}
                  view={val.view}
              />
          )
        })}
      </div>
    </div>;
  }


};

export default Car;
