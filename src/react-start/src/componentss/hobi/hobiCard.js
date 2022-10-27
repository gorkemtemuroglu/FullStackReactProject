import "./hobiCardStyles.css";
import React from "react";
import serialize from "form-serialize";
import {updateHobi} from "../../api/getHobi";

class HobiCard extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            showForm1: false
        }
    }

    handleFormSubmit1 = (e) => {
        e.preventDefault();
        const updateHobis = serialize(e.target, {hash: true});
        // console.log(typeof newPerson);
        console.log(updateHobis);
        updateHobi(this.updateWorkToState, updateHobis);
        this.setState({showForm1: false});
    }

    updateWorkToState = (car) => {
        this.setState({ showForm1:false});
        this.props.updateCallback(car);
    }

    deleteHobiFromState = (id) => {
        this.props.deleteCallback(id);
    }

    render() {
        return <div className="hobi-card">

            {this.state.showForm1 && <div className="form-display">
                <form onSubmit={this.handleFormSubmit1}>

                    <label>New Hobi Name</label>
                    <input type="hobi" name="hobi" id="hobi" defaultValue={this.props.salary}></input>

                    <input type="hidden" name="id" defaultValue={this.props.id}></input>


                    <button className="btn" >Submit</button>
                    <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
                </form>
            </div>
            }
            {this.state.showForm1 === false &&
            <div>
            <img src={this.props.imgsrc} alt="image" className="hobiler"/>
            <div>
            <h2 className="hobi-title">{this.props.hobi}</h2>
            </div>

            <div className="pro-details">
                <div className="pro-btns">
                    <button className="btn btn-style" style={{backgroundColor: "yellow"}} onClick={() => this.setState({showForm1: !this.state.showForm1})}>update</button>
                    <button onClick={() => this.deleteHobiFromState(this.props.id)} className="btn btn-style" style={{backgroundColor: "yellow"}} >delete</button>
                </div>
            </div>
            </div>
            }
        </div>

    };
    }




export default HobiCard;
