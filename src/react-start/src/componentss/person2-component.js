import React , { Component }from "react";



class PersonComponent2 extends Component{

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

            <div>

                <header className=" text-center fw-bolder  design"> Kişi Ve Eş Bilgisi </header>
                <span className="marg">
                    Name:
                </span>
                <span className="marg">
                    Surname:
                </span>
                <span className="marg">
                    Eş ad soyad :
                </span>
                <span className="marg">
                    Yaptığı iş :
                </span>

            </div>
        )
    }
}


export default PersonComponent2