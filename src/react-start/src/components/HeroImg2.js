import "./HeroImg2Styles.css";
import picture from "../assets/profile5.jfif"

import React, {Component} from "react";
import getPerson from "../api/person";


class HeroImg2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : undefined,
            owner: undefined
        }
    }
    updateState =(owner)=> {
        this.setState({owner:owner, id:owner.id});
    }



    render() {

        if (this.state.id  !== this.props.id){
            getPerson(this.updateState, this.props.id);
        }

        return <div className="hero-img">
            <div className="heading">
                <div className="deneme">
                    <img src={picture} alt="picture" className={this.state.id === 1 ?  "special2" : "special5"}   />
                    <div>
                        <h1 className="special3">{this.props.heading}</h1>
                        <div className="borders">
                            <p>{this.state.owner && this.state.owner.about}</p>
                        </div>
                    </div>
                    <div className="displays">
                        <h1>Personal information</h1>
                        <div className="personal2">
                            <p><span className="spans">Name: </span> {this.state.owner && this.state.owner.name}</p>
                            <p><span className="spans">Surname :</span> {this.state.owner && this.state.owner.surname} </p>
                            <p><span className="spans">Age :</span> {this.state.owner && this.state.owner.age}</p>
                            <p><span className="spans">Areas of interest : </span>{this.state.owner && this.state.owner.interest}</p>
                            <p><span> For more about me scroll down...</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default HeroImg2;
