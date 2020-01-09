import React, {Component} from 'react';
import axios from 'axios';
import NumberClaimForm from "../DataElements/NumberClaimForm";
import Ticket from "../DataElements/Ticket";


class UserView extends Component {

    state = {
        isTicket: false,
        ticket: {
            id: null,
            timeOfRegistration: 0,
            beforeMe: 0,
            estimatedTimeOfAppointment: 0,
        },
        selectables: {},
        isLoaded: false

    };


    componentDidMount() {  // also a lifecycle method
       let token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.post('http://localhost:8080')
            .then(res => this.setState({selectables: res.data, isLoaded: true}))
            //this.setState({ todos: res.data }));
            .catch(error => alert(error));

    }


    render() {
        const WelcomeCard = (
            <div>
                <React.Fragment>
                    <NumberClaimForm requestNumberProperty={this.requestNumber}
                                     casetypes={this.state.selectables.caseTypeList}
                                     officeLocations={this.state.selectables.offices}/>
                </React.Fragment>
            </div>
        );
        const ticket = (
            <div>
                <React.Fragment>
                    <Ticket ticket={this.state.ticket}/>
                </React.Fragment>
            </div>
        );


        const loading = (
            <p>Loading...</p>
        );

        const welcome = this.state.isLoaded ? WelcomeCard : loading;

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
                    this.setState(
                        {
                            isTicket: true,
                            ticket: res.data
                        })
                });
    };

}

export default UserView;

