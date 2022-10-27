import "./worksCardStyles.css";
import pro1 from "../../assets/project1.png"
import {Link, NavLink} from "react-router-dom";
import React from "react";
import serialize from "form-serialize";
import {updateCar} from "../../api/getCar";
import {updateWork} from "../../api/getWork";


class WorksCard extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      showForm1: false
    }
  }

  handleFormSubmit1 = (e) => {
    e.preventDefault();
    const updateWorsk = serialize(e.target, {hash: true});
    // console.log(typeof newPerson);
    console.log(updateWorsk);
    updateWork(this.updateWorkToState, updateWorsk);
    this.setState({showForm1: false});
  }

  updateWorkToState = (car) => {
    this.setState({ showForm1:false});
    this.props.updateCallback(car);
  }

  deleteWorkFromState = (id) => {
    this.props.deleteCallback(id);
  }


  render() {
    return <div className="work-card">

      {this.state.showForm1 && <div className="form-display">
        <form onSubmit={this.handleFormSubmit1}>

          <label>New Salary</label>
          <input type="salary" name="salary" id="salary" defaultValue={this.props.salary}></input>
          <label>New work name</label>
          <input type="work_name" name="work_name" id="work_name" defaultValue={this.props.work_name}></input>

          <input type="hidden" name="id" defaultValue={this.props.id}></input>


          <button className="btn" >Submit</button>
          <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
        </form>
      </div>
      }

      <img src={this.props.imgsrc} alt="image" className="works"/>

      <div className="pro-details">
        <h2>{this.props.work_name}</h2>
        <h2 className="work-title">{this.props.salary}</h2>
        <div className="pro-btns">
          <button className="btn btn-style" style={{backgroundColor: "yellow"}} onClick={() => this.setState({showForm1: !this.state.showForm1})}>update</button>
          <button onClick={() => this.deleteWorkFromState(this.props.id)} className="btn btn-style" style={{backgroundColor: "yellow"}} >delete</button>
        </div>
      </div>
    </div>;
  };

  }








export default WorksCard;
