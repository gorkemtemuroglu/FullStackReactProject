import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bank from "../componentss/bank/bank";
import HeroImg2 from "../components/HeroImg2";
import Adress from "../componentss/adress/adress";
import Book from "../componentss/books/book";
import Car from "../componentss/car/car";
import Education from "../componentss/education/education";
import Email from "../componentss/email/email";
import Hobi from "../componentss/hobi/hobi"
import Person from "../componentss/person/person";
import Tel from "../componentss/tel/tel";
import Works from "../componentss/work/works";
import axios from "axios";



class Home extends React.Component{


  constructor(props) {
    super(props)
    this.state = {
      id: 1
    }
  }



  updateId=(id)=> {
    let newId = id;
    console.log(newId);
    this.setState({id:id});
  }

  render() {
    return (<div>

      <Navbar/>
      <HeroImg2 heading="About." id={this.state.id}/>
      <Person  id={this.state.id} callback={this.updateId} />
      <Car  id={this.state.id}/>
      <Bank  id={this.state.id}/>
      <Works  id={this.state.id}/>
      <Book  id={this.state.id}/>
      <Hobi  id={this.state.id}/>
      <Education  id={this.state.id}/>
      <Adress  id={this.state.id}/>
      <Tel  id={this.state.id}/>
      <Email  id={this.state.id}/>

      <Footer/>
    </div>);
  }




};

export default Home;
