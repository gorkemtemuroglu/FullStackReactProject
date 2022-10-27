import "./bankCardStyles.css";
import BankCard from "./bankCard";
import React from "react";
import getBank, {addBank, deleteBank} from "../../api/getBank";
import bankImage from "../../assets/bankImg.jpg"
import serialize from "form-serialize";

class Bank extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      id : undefined,
      bank : undefined,
    }
  }

  updateState =(bank)=> {
    this.setState({bank:bank,id:this.props.id});
  }

  addBankToState =(friend)=> {
    this.setState({bank:[...this.state.bank,friend]});
  }


  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newBank = serialize(e.target,{hash:true});
    // console.log(typeof newPerson);
    console.log(newBank);
    addBank(this.addBankToState,newBank );
    this.setState({showForm:false});
  }

  deleteBankFromState = (id) => {
    deleteBank(id);
    const newBank = this.state.bank.filter(i => i.id !== id);
    this.setState({bank:newBank});
  }

  updateBankInState = (bank) => {
    const newBank = this.state.bank.map(i => {
      if (i.id === bank.id){
        return bank;
      }
      return i;
    })
    this.setState({bank:newBank});
  }



  render() {

    if (this.state.id  !== this.props.id){
      getBank(this.updateState, this.props.id);
    }

    return <div className="banka-list-container" >
      <h1 className="bank-heading">Banka bilgileri</h1>

      {this.state.showForm && <div>
        <form onSubmit={this.handleFormSubmit}>

          <label >Kart name</label>
          <input type="kart" name="kart" id="kart"></input>

          <label>Bank name</label>
          <input type="bank" name="bank" id="bank" ></input>

          <input  type="hidden"  name="userId" defaultValue={this.props.id} ></input>

          <button className="btn">Submit</button>
        </form>
      </div>
      }

      <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}} onClick={() => this.setState({showForm:!this.state.showForm})} >add bank</button>

      <div className="bank-container">

        {this.state.bank && this.state.bank.map((val,ind) =>{
          return(
              <BankCard
                  key={ind}
                  imgsrc={bankImage}
                  updateCallback={this.updateBankInState}
                  deleteCallback={this.deleteBankFromState}
                  bank={val.bank}
                  kart={val.kart}
                  id={val.id}
                  view={val.view}
              />
          )
        })}
      </div>
    </div>;
  }

};

export default Bank;
