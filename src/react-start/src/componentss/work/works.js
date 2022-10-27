import "./worksCardStyles.css";
import WorksCard from "./worksCard";
import React from "react";
import getWork, {addWork, deleteWork} from "../../api/getWork";
import workImage from "../../assets/work.png"
import serialize from "form-serialize";
import {addCar} from "../../api/getCar";
import {deleteBank} from "../../api/getBank";

class Works extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            id : undefined,
            work : undefined,
        }
    }


    addWorkToState =(friend)=> {
        this.setState({work:[...this.state.work,friend]});
    }


    handleFormSubmit = (e) =>{
        e.preventDefault();
        const newWork = serialize(e.target,{hash:true});
        // console.log(typeof newPerson);
        console.log(newWork);
        addWork(this.addWorkToState,newWork );
        this.setState({showForm:false});
    }

    deleteWorkFromState = (id) => {
        deleteWork(id);
        const newWork = this.state.work.filter(i => i.id !== id);
        this.setState({work:newWork});
    }

    updateState = (work) => {
        this.setState({work: work, id: this.props.id});
    }


    updateWorkInState = (work) => {
        const newWork = this.state.work.map(i => {
            if (i.id === work.id){
                return work;
            }
            return i;
        })
        this.setState({work:newWork});
    }


    render() {

        if (this.state.id  !== this.props.id){
            getWork(this.updateState, this.props.id);
        }


      return <div className="work-list-container" >
        <h1 className="work-heading">İş bilgileri</h1>

          {this.state.showForm && <div>
              <form onSubmit={this.handleFormSubmit}>

                  <label >Salary</label>
                  <input type="salary" name="salary" id="salary"></input>

                  <label>Work name</label>
                  <input type="work_name" name="work_name" id="work_name" ></input>

                  <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

                  <button className="btn">Submit</button>
              </form>
          </div>
          }
          <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add work</button>

          <div className="work-container">

          {this.state.work && this.state.work.map((val,ind) =>{
            return(
                <WorksCard
                    key={ind}
                    imgsrc={workImage}
                    updateCallback={this.updateWorkInState}
                    deleteCallback={this.deleteWorkFromState}
                    salary={val.salary}
                    work_name={val.work_name}
                    id={val.id}
                    view={val.view}
                />
            )
          })}
        </div>
      </div>;
    }


};

export default Works;
