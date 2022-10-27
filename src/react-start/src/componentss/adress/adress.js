import "./adressCardStyles.css";
import BankCradData from "./adressCradData";
import AdressCard from "./adressCard";
import AdressCardData from "./adressCradData";
import React from "react";
import getPerson from "../../api/person";
import getAdress, {addAdress, deleteAdress} from "../../api/getAdress";
import image from "../../assets/adress.png"
import adressImage from "../../assets/location.jpg"
import getEducation from "../../api/getEducation";
import serialize from "form-serialize";
import {addBank} from "../../api/getBank";
import {deleteHobi} from "../../api/getHobi";

class Adress extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      id:undefined,
      adr : undefined,
    }
  }

  deleteAdressFromState = (id) => {
    deleteAdress(id);
    const newAdress = this.state.adr.filter(i => i.id !== id);
    this.setState({adr:newAdress});
  }



  addAdressToState =(friend)=> {
    this.setState({adr:[...this.state.adr,friend]});
  }

  updateState =(adr)=> {
    this.setState({adr:adr,id:this.props.id});
  }


  updateAdressInState = (adr) => {
    const newAdress = this.state.adr.map(i => {
      if (i.id === adr.id){
        return adr;
      }
      return i;
    })
    this.setState({adr:newAdress});
  }


  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newAdress = serialize(e.target,{hash:true});
    // console.log(typeof newPerson);
    console.log(newAdress);
    addAdress(this.addAdressToState,newAdress );
    this.setState({showForm:false});
  }



  render() {

    if (this.state.id  !== this.props.id){
      getAdress(this.updateState, this.props.id);
    }

    return <div className="adress-list-container" >
      <p className="adress-heading">Adres bilgileri</p>

      {this.state.showForm && <div>
        <form onSubmit={this.handleFormSubmit}>

          <label >Adress tipi</label>
          <input type="adress_type" name="adress_type" id="adress_type"></input>

          <label>City</label>
          <input type="city" name="city" id="city" ></input>

          <label>Adress</label>
          <input type="adress" name="adress" id="adress" ></input>

          <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

          <button className="btn">Submit</button>
        </form>
      </div>
      }

      <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add adress</button>

      <div className="adress-container">

        {this.state.adr && this.state.adr.map((val,ind) =>{
          return(
              <AdressCard
                  key={val.id}
                  imgsrc={image}
                  Adress_type={val.adress_type}
                  City={val.city}
                  Adress={val.adress}
                  id={val.id}
                  updateCallback={this.updateAdressInState}
                  deleteCallback={this.deleteAdressFromState}
              />
          )
        })}
      </div>
    </div>;

  }


};

export default Adress;
