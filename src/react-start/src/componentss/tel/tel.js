import "./telCardStyles.css";
import TelCradData from "./telCradData";
import TelCard from "./telCard";
import React from "react";
import getAdress, {addAdress} from "../../api/getAdress";
import getHobi, {deleteHobi} from "../../api/getHobi";
import getTel, {addTel, deleteTel} from "../../api/getTel";
import telImage from "../../assets/tel.jpg"
import serialize from "form-serialize";

class Tel extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      id:undefined,
      tel : undefined,
    }
  }


  addTelToState =(friend)=> {
    this.setState({tel:[...this.state.tel,friend]});
  }


  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newTel = serialize(e.target,{hash:true});
    // console.log(typeof newPerson);
    console.log(newTel);
    addTel(this.addTelToState,newTel );
    this.setState({showForm:false});
  }

  deleteTelFromState = (id) => {
    deleteTel(id);
    const newTel = this.state.tel.filter(i => i.id !== id);
    this.setState({tel:newTel});
  }

  updateState =(tel)=> {
    this.setState({tel:tel,id:this.props.id});
  }


  updateTelInState = (tel) => {
    const newTel = this.state.tel.map(i => {
      if (i.id === tel.id){
        return tel;
      }
      return i;
    })
    this.setState({tel:newTel});
  }


  render() {

    if (this.state.id  !== this.props.id){
      getTel(this.updateState, this.props.id);
    }

    return <div className="tel-list-container" >
      <h1 className="tel-heading">Telefon bilgileri</h1>
      {this.state.showForm && <div>
        <form onSubmit={this.handleFormSubmit}>

          <label >Tel </label>
          <input type="tel" name="tel" id="tel"></input>


          <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

          <button className="btn">Submit</button>
        </form>
      </div>
      }
      <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add tel</button>

      <div className="tel-container">



        {this.state.tel && this.state.tel.map((val, ind) =>{
          return(
              <TelCard
                  key={ind}
                  imgsrc={telImage}
                  tel={val.tel}
                  view={val.view}
                  updateCallback={this.updateTelInState}
                  deleteCallback={this.deleteTelFromState}
                  id={val.id}
              />
          )
        })}
      </div>
    </div>;
  }


};

export default Tel;
