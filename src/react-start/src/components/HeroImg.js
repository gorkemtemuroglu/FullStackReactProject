import "./HeroImgStyles.css";
import introImg from "../assets/1234.jfif"
import React from "react";
import {Link} from "react-router-dom";
import getPerson from "../api/person";



class HeroImg extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      owner: undefined,
    }
  }
  updateState =(owner)=> {
    this.setState({owner:owner});
  }

  render() {
    if (this.state.owner === undefined){
      getPerson(this.updateState);
    }
    return <div className="hero">
      <div className="mask">
        <img className="into-img" src={introImg}
             alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Hi I'm Görkem !</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>;
  };
  }


export default HeroImg;
