import "./personCardStyles.css";
import PersonCard from "./personCard";
import React, {useState, useEffect} from "react";
import getFriends, {addFriend, deleteFriend, updateFriend} from "../../api/getFriends";
import personImage from "../../assets/person.jpg"
import serialize from "form-serialize";


class Person extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: undefined,
            owner: undefined,
            showForm: false,
            showForm1: false
        }
    }

    updateState = (owner) => {
        this.setState({owner: owner, id: this.props.id});
    }

    updateFriendInState = (friend) => {
        const newOwner = this.state.owner.map(i => {
            if (i.id === friend.id){
                return friend;
            }
            return i;
        })
        this.setState({owner:newOwner});
    }

    deleteFriendFromState = (id) => {
        deleteFriend(id);
        const newOwner = this.state.owner.filter(i => i.id !== id);
        this.setState({owner:newOwner});
    }

    addFriendToState = (friend) => {
        this.setState({owner: [...this.state.owner, friend]});
    }


    handleFormSubmit = (e) => {
        e.preventDefault();
        const newPerson = serialize(e.target, {hash: true});
        // console.log(typeof newPerson);
        console.log(newPerson);
        addFriend(this.addFriendToState, newPerson);
        this.setState({showForm: false});
    }


    render() {
        if (this.state.id !== this.props.id) {
            getFriends(this.updateState, this.props.id);
        }

        return <div className="person-list-container">
            <h1 className="person-heading">Friends</h1>

            <div className="design-buttons">
                <button className="btn btn-style" style={{backgroundColor: this.state.showForm ? "red" : "yellow"}}
                        onClick={() => this.setState({showForm: !this.state.showForm})}>add person
                </button>
            </div>


            {this.state.showForm && <div>
                <form onSubmit={this.handleFormSubmit}>

                    <label>Name</label>
                    <input type="name" name="name" id="name"></input>
                    <label>Surname</label>
                    <input type="surname" name="surname" id="surname"></input>
                    <label>Gender</label>
                    <input type="gender" name="gender" id="gender"></input>
                    <label>Age</label>
                    <input type="age" name="age" id="age"></input>
                    <label>TC</label>
                    <input type="tc" name="tc" id="tc"></input>

                    <input type="hidden" name="userId" defaultValue={this.props.id}></input>
                    <input type="hidden" name="tip" defaultValue="friend"></input>

                    <label></label>
                    <textarea name="interest" id="interest" rows="6" placeholder="Type your message about you"
                    />
                    <button className="btn">Submit</button>
                </form>
            </div>
            }



            <div className="person-container">


                {this.state.owner && this.state.owner.map((val, ind) => {
                    return (
                        <PersonCard
                            callback={this.props.callback}
                            updateCallback={this.updateFriendInState}
                            deleteCallback={this.deleteFriendFromState}
                            key={val.id}
                            imgsrc={personImage}
                            id={val.id}
                            name={val.name}
                            surname={val.surname}
                            gender={val.gender}
                            age={val.age}
                            tc={val.tc}
                            about={val.about}
                            view=""
                        />
                    )
                })}

            </div>


        </div>;

    }

};

export default Person;



