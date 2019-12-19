import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeToWait: this.props.timeToWait
        };
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState(
            {timeToWait: (this.state.timeToWait-1000 <= 0 ? 0 : this.state.timeToWait-1000)}
        )
    }

    formattedTime = (milliseconds) => {
        return  msToTime(milliseconds);
    };



    /*estimatedTime = () => {
        let timeToWait = this.state.timeOfAppointment- this.state.timeOfRegistration;
        let date = new Date(timeToWait);
        return date.toLocaleTimeString();
    };*/


    render() {
        return (
            <div>
                <p>{this.formattedTime(this.state.timeToWait)}</p>
            </div>
        );
    }


}

Countdown.propTypes = {
    timeToWait: PropTypes.number.isRequired
};

export default Countdown;

function msToTime(duration) {
    let milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds; // + "." + milliseconds;
}