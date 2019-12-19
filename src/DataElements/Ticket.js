import React, {Component} from "react";
import Countdown from "./CountDown";


class Ticket extends Component {

    getStyle() {
        return {
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
            minHeight: '2vh',
            maxWidth: 'content-box',
            padding: '20px'
        };
    }
    render(){
        return (
            <div className="ticket" style={this.getStyle()}>
                <p>Waiting clients before you: {this.props.ticket.beforeMe}</p>
                <h1>{this.props.ticket.id}</h1>
                <p>Time until your call:</p>
                <Countdown timeToWait={this.calculateTimeToWait()}/>
            </div>
        );
    }

    calculateTimeToWait = () => {
        let registerTime = this.props.ticket.timeOfRegistration;
        let appointmentTime = this.props.ticket.estimatedTimeOfAppointment;
        return appointmentTime - registerTime;
    }
}

export default Ticket;
