import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

export class CustomStatementForm extends Component {
    constructor(props) {
        super(props)
        this.cardNumber = React.createRef()
        this.toDate = React.createRef()
        this.fromDate = React.createRef()

        this.state = {
            // cardNumber: cardNumber,
            // toDate: toDate,
            // fromDate: fromDate
        }
    }

    redirectToCustomStatment() {
        console.log("redirect")
        //this.props.history.push('/customStatement')
       let cardNumber= this.cardNumber.current.value
       let toDate= this.toDate.current.value
       let fromDate= this.toDate.current.value
       
        this.props.history.push({
            pathname: '/customStatement',
            cardDet: {
                cardNumber,
                toDate,
                fromDate
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Add/Update Trainee</h1>
                {/* <div className="sidenav">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div> */}

                <div className="container mt-5 " align="center">
                    <div className="mb-3">
                        <input type="number" ref={this.cardNumber} className="form-control col-lg-7 " id="cardNumber" placeholder="Card Number" />
                    </div>
                    <div className="mb-3">
                        <input type="text" ref={this.toDate} className="form-control col-lg-7" id="toDate" placeholder="To Date" />
                    </div >
                    <div className="mb-3">
                        <input type="text" ref={this.fromDate} className="form-control col-lg-7" id="fromDate" placeholder="From Date" />
                    </div>
                    <div >
                        <button className="btn btn-primary m-1" onClick={this.redirectToCustomStatment.bind(this)}>Next</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(CustomStatementForm)
