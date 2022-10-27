import "./educationCardStyles.css";
import pro1 from "../../assets/project1.png"
import {Link, NavLink} from "react-router-dom";
import React from "react";
import serialize from "form-serialize";
import {updateWork} from "../../api/getWork";
import {updateEducation} from "../../api/getEducation";

class EducationCard extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      showForm1: false
    }
  }

  deleteSchoolFromState = (id) => {
    this.props.deleteCallback(id);
  }

  handleFormSubmit1 = (e) => {
    e.preventDefault();
    const updateSchools = serialize(e.target, {hash: true});
    // console.log(typeof newPerson);
    console.log(updateSchools);
    updateEducation(this.updateSchoolToState, updateSchools);
    this.setState({showForm1: false});
  }

  updateSchoolToState = (school) => {
    this.setState({ showForm1:false});
    this.props.updateCallback(school);
  }

  render() {


    return <div className="education-card">

      {this.state.showForm1 && <div className="form-display">
        <form onSubmit={this.handleFormSubmit1}>

          <label>New  School name</label>
          <input type="school" name="school" id="school" defaultValue={this.props.school}></input>
          <label>New Siutation</label>
          <input type="situation" name="situation" id="situation" defaultValue={this.props.situation}></input>

          <input type="hidden" name="id" defaultValue={this.props.id}></input>


          <button className="btn" >Submit</button>
          <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
        </form>
      </div>
      }


      <img src={this.props.imgsrc} alt="image" className="same"/>
      <h2 className="education-title">{this.props.school}</h2>
      <div className="pro-details">
        <h2 className="margins">{this.props.situation}</h2>


        <div className="pro-btns">
          <button onClick={() => this.setState({showForm1: !this.state.showForm1})} className="btn btn-style" style={{backgroundColor: "yellow"}} >update</button>
          <button onClick={() => this.deleteSchoolFromState(this.props.id)} className="btn btn-style" style={{backgroundColor: "yellow"}} >delete</button>
        </div>


      </div>
    </div>;
  };
  }


export default EducationCard;
