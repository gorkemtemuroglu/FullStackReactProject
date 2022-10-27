import "./personCardStyles.css";
import React from "react";
import serialize from "form-serialize";
import {deleteFriend, updateFriend} from "../../api/getFriends";

class PersonCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showForm1: false
        }
    }

    updateFriendToState = (friend) => {
        this.setState({ showForm1:false});
        this.props.updateCallback(friend);
    }


    handleFormSubmit1 = (e) => {
        e.preventDefault();
        const updatePerson = serialize(e.target, {hash: true});
        // console.log(typeof newPerson);
        console.log(updatePerson);
        updateFriend(this.updateFriendToState, updatePerson);
        // this.setState({showForm1: false});
    }

    deleteFriendFromState = (id) => {
        this.props.deleteCallback(id);
    }
    //
    // handeClick = (e) => {
    //   deleteFriend(this.deleteState,this.props.id)
    // }


    render() {
        return <div className="person-card">

            {this.state.showForm1 && <div className="form-display">
                <form onSubmit={this.handleFormSubmit1}>

                    <label>New name</label>
                    <input type="name" name="name" id="name" defaultValue={this.props.name}></input>
                    <label>New Surname</label>
                    <input type="surname" name="surname" id="surname" defaultValue={this.props.surname}></input>
                    <label>New Gender</label>
                    <input type="gender" name="gender" id="gender" defaultValue={this.props.gender}></input>
                    <label>New Age</label>
                    <input type="age" name="age" id="age" defaultValue={this.props.age}></input>
                    <label>New TC</label>
                    <input type="tc" name="tc" id="tc" defaultValue={this.props.tc}></input>
                    <input type="hidden" name="id" defaultValue={this.props.id}></input>
                    <input type="hidden" name="tip" defaultValue="friend"></input>

                    <label>Your interest</label>
                    <textarea defaultValue={this.props.about} name="interest" id="interest" rows="6"
                              placeholder="Type your message about you"
                    />
                    <button className="btn" >Submit</button>
                    <button className="btn" onClick={(event)=>this.setState({showForm1:false})}>Cancel</button>
                </form>
            </div>
            }

            {this.state.showForm1 === false &&
            <div>
                <img src={this.props.imgsrc} alt="image"/>
                <div className="pro-details">

                    <h2 className="person-title ">Name: {this.props.name}</h2>
                    <h3>Surname : {this.props.surname}</h3>
                    <h3>Gender : {this.props.gender}</h3>
                    <h3>Age : {this.props.age}</h3>
                    <h3>TC : {this.props.tc}</h3>
                </div>


                <div className="pro-btns">


                    <button className="btn " onClick={(event) => this.props.callback(this.props.id)}>View</button>

                    <button className="btn " style={{backgroundColor: this.state.showForm1 ? "red" : "yellow"}}
                            onClick={() => this.setState({showForm1: !this.state.showForm1})}>update
                    </button>
                    <button className="btn " onClick={() => this.deleteFriendFromState(this.props.id)} style={{backgroundColor: "yellow"}} >delete </button>

                </div>
            </div>
            }

        </div>;
    }

;
}


export default PersonCard;
