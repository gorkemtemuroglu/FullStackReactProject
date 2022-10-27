import "./educationCardStyles.css";
import EducationCard from "./educationCard";
import React from "react";
import getEducation, {addEducation, deleteEducation} from "../../api/getEducation";
import educationImage from "../../assets/education.jpg"
import serialize from "form-serialize";


class Education extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      id : undefined,
      edu : undefined,
    }
  }

  updateState =(edu)=> {
    this.setState({edu:edu,id:this.props.id});
  }

  addEducationToState =(friend)=> {
    this.setState({edu:[...this.state.edu,friend]});
  }

  deleteSchoolFromState = (id) => {
    deleteEducation(id);
    const newSchool = this.state.edu.filter(i => i.id !== id);
    this.setState({edu:newSchool});
  }


  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newSchool = serialize(e.target,{hash:true});
    // console.log(typeof newPerson);
    console.log(newSchool);
    addEducation(this.addEducationToState,newSchool );
    this.setState({showForm:false});
  }

  updateState = (edu) => {
    this.setState({edu: edu, id: this.props.id});
  }


  updateSchoolInState = (edu) => {
    const newSchool = this.state.edu.map(i => {
      if (i.id === edu.id){
        return edu;
      }
      return i;
    })
    this.setState({edu:newSchool});
  }



  render() {

    if (this.state.id  !== this.props.id){
      getEducation(this.updateState, this.props.id);
    }

    return <div className="education-list-container" >
      <h1 className="education-heading">Eğitim bilgileri</h1>

      {this.state.showForm && <div>
        <form onSubmit={this.handleFormSubmit}>

          <label >School name</label>
          <input type="school" name="school" id="school"></input>

          <label >Situation</label>
          <input type="situation" name="situation" id="situation"></input>

          <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

          <button className="btn">Submit</button>

        </form>
      </div>
      }
      <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add school</button>

      <div className="education-container">

        {this.state.edu && this.state.edu.map((val,ind) =>{
          return(
              <EducationCard
                  key={ind}
                  imgsrc={educationImage}
                  school={val.school}
                  situation={val.situation}
                  updateCallback={this.updateSchoolInState}
                  deleteCallback={this.deleteSchoolFromState}
                  id={val.id}
                  view={val.view}

              />
          )
        })}
      </div>
    </div>;
  }


};

export default Education;
