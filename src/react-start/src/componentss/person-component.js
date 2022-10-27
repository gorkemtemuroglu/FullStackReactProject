import React , { Component }from "react";
import AdressComponent from "./adress-component";
import Bankcomponent from "./bank-component";
import BookComponent from "./book-component";
import CarComponent from "./car-component";
import EducationComponent from "./education-component";
import EmailComponent from "./email-component";
import HobiComponent from "./hobi-component";
import TelComponent from "./tel-component";
import WorkComponent from "./work-component";
import PersonComponent2 from "./person2-component";
import AvukatComponent from "./avukat-component";
import ArkadasComponent from "./arkadas-component";


class PersonComponent extends Component{

    constructor(props) {
        super(props);

        const Datatable = [
            { Header: 'Name', accessor: 'name' },
            { Header: 'Price', accessor:'?' },
            { Header: 'Total', accessor:'total' }
        ];
        this.state = {
           component2:false
        }
    }



    onClickHandler = (e) => {

        this.setState({component2 : !this.state.component2})

        console.log('We need to get the details for ');
    }


    render() {
            return(
                <div style={{
                background:"white"}
                }>

                    <h2 className="text-center backgrounds design" style={{
                    background:"black"}
                    }> Person Lists</h2>

                    <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>

                        <tr>
                            <th className="table-hover" >ID</th>
                            <th className="table-hover" >User First Name</th>
                            <th className="table-hover" >User Last Name</th>
                            <th className="table-hover" >User Gender</th>
                            <th className="table-hover" >User Age</th>
                            <th className="table-hover" >User TC</th>

                        </tr>
                        </thead>
                        <tbody>
                            <tr onClick={this.onClickHandler}>
                                <td>1</td>
                                <td>Fatma</td>
                                <td>Uzun</td>
                                <td>Kadın</td>
                                <td>23</td>
                                <td>31241231256</td>


                            </tr>
                            <tr onClick={this.onClickHandler}>
                                <td>2</td>
                                <td>Görkem</td>
                                <td>Temuroğlu</td>
                                <td>Erkek</td>
                                <td>24</td>
                                <td>32956234844</td>

                            </tr>
                            <tr onClick={this.onClickHandler}>
                                <td>3</td>
                                <td>Kemal</td>
                                <td>Uzun</td>
                                <td>Erkek</td>
                                <td>22</td>
                                <td>82547215487</td>

                            </tr>
                            <tr onClick={this.onClickHandler}>
                                <td >4</td>
                                <td> Fatoş</td>
                                <td> Keskin</td>
                                <td> Kadın</td>
                                <td> 24</td>
                                <td> 82793761542</td>

                            </tr>
                        </tbody>
                    </table>
                    </div>
                    { this.state.component2 && <AvukatComponent/>}
                    { this.state.component2 && <PersonComponent2/>}
                    { this.state.component2 && <ArkadasComponent/>}
                    { this.state.component2 && <AdressComponent/>}
                    { this.state.component2 && <Bankcomponent/>}
                    { this.state.component2 && <BookComponent/>}
                    { this.state.component2 && <CarComponent/>}
                    { this.state.component2 && <EducationComponent/>}
                    { this.state.component2 && <EmailComponent/>}
                    { this.state.component2 && <HobiComponent/>}
                    { this.state.component2 && <TelComponent/>}
                    { this.state.component2 && <WorkComponent/>}




                </div>
            )
        }

}



export default PersonComponent