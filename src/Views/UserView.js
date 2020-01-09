import React, {Component} from 'react';
import axios from 'axios';
import NumberClaimForm from "../DataElements/NumberClaimForm";
import Ticket from "../DataElements/Ticket";
import Map from "../DataElements/Map";


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
        isLoaded: false,

    };

    success(position) {
        let locationData = {latitude: position.coords.latitude, longitude: position.coords.longitude};
    }

    error() {
            alert('Sorry, something went wrong. No geolocation data accessable');
        }

    componentDidMount() {  // also a lifecycle method
        axios.post("http://localhost:8080/").then(res => this.setState({selectables: res.data, isLoaded:true}))
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
                    console.log(res.data);
                    this.setState(
                        {
                            isTicket: true,
                            ticket: res.data
                        })
                });
    };

}

export default UserView;

