import React, {Component} from 'react';
import axios from 'axios';
import NumberClaimForm from "../DataElements/NumberClaimForm";



class UserView extends Component {

    state = {
        isTicket: false,
        ticket: {
            id: null,
            timeOfRegistration: 0,
            beforeMe: 0,
            estimatedTimeOfAppointment: 0,
        },
        selectables: [],
        isLoaded: false

    };

    componentDidMount() {  // also a lifecycle method
        axios.post('http://localhost:8080')
            .then(res => this.setState({selectables: res.data, isLoaded: true}));
        //this.setState({ todos: res.data }));
    }


    render() {
        const WelcomeCard = (
            <div>
                <React.Fragment>
                    <NumberClaimForm requestNumberProperty={this.requestNumber} casetypes={this.state.selectables[0]} officeLocations={this.state.selectables[1]}/>
                </React.Fragment>
            </div>
        );
        const ticket = <p/>;
        /*(
            <div>
                <p>Waiting clients before you: {this.state.ticket.beforeMe}</p>
                <h1>{this.state.ticket.id}</h1>
                <p>Estimated time of appointment: </p>
                <React.Fragment>
                    <Countdown timeToWait={this.calculateTimeToWait()}/>
                </React.Fragment>
            </div>
        );*/

        const loading = (
            <p>Loading...</p>
        );

        const welcome = this.state.isLoaded? WelcomeCard : loading;

        return (
            <div className="App-container">
                {
                    this.state.isTicket ? ticket : welcome
                }
            </div>
        );
    }


    requestNumber = () => {
        let time = Date.now();
        axios.post('http://localhost:8080/requestnumber', {
            "time": time
        })
            .then(
                res => {
                    console.log(res.data);
                    this.setState(
                        {
                            isTicket: true,
                            ticket: res.data
                        })
                });
    };

    calculateTimeToWait = () => {
        let registerTime = this.state.ticket.timeOfRegistration;
        let appointmentTime = this.state.ticket.estimatedTimeOfAppointment;
        return appointmentTime - registerTime;
    }


}

export default UserView;
