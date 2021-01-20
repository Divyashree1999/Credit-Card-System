import React, { Component } from 'react'
import axios from 'axios'

export class CustomStatement extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            customStatement: [],
            error: ''
        }
    }

    getCustomStatement() {
        axios.get(`http://localhost:8080/transaction/customStatement?cardNumber=1710689982593274&fromDate=2020-12-31&toDate=2021-01-20`)
        .then(res=>{
            console.log(res.data)
            this.setState({ customStatement: res.data})
        }).catch((error) => {
            this.setState({
                error: "Error Occured!"})
        })
    }
    componentDidMount(){
        this.getCustomStatement();
    }
    render() {
        const {customStatement}=this.state
        return (
            <div className="container">
                <h1>Custom Statememt</h1>
                <h1>{this.props.location.cardDet.cardNumber}</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Transaction Id</th>
                            <th scope="col">Transaction Date</th>
                            <th scope="col">Credited Amount</th>
                            <th scope="col">Debited Amount</th>
                            <th scope="col">Balance Amount</th>
                            <th scope="col">Redeem Points</th>
                            <th scope="col">Account Number</th>
                        </tr>
                    </thead>

                    {
                        customStatement.map(trans =>
                            <tbody>
                                <tr key={trans.transactionId}>
                                    <th>{trans.transactionId}</th>
                                    <td>{trans.transactionDate}</td>
                                    <td>{trans.creditAmt}</td>
                                    <td>{trans.debitAmt}</td>
                                    <td>{trans.balanceAmt}</td>
                                    <td>{trans.redeemPoints}</td>
                                    <td>{trans.cardNumber}</td>
                                </tr>
                            </tbody>
                        )
                    }

                </table>
            </div>
        )
    }
}


export default CustomStatement
