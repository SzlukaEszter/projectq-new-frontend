import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
    //default values are coordinate of BP null kilometer
    state = {
        latitude: 47.497912,
        longitude: 19.040235
    };

    /*componentDidMount() {  // also a lifecycle method
        //gets browser's location and calls the callbacks provided in its parameters
        navigator.geolocation.getCurrentPosition(this.succes, this.error);
    }

    succes = (position) => {
        this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
    };

    error = () => {
        alert("Sorry, something went wrong!");
    };*/

    getMapURL = () => {
        return "https://maps.googleapis.com/maps/api/staticmap?center=" + this.state.latitude + "," + this.state.longitude + "&zoom=13&size=300x300&sensor=false";

    };

    render(){

        return (
            <div>
                <img src={this.getMapURL} alt=""/>
            </div>
        );
    }
}
export default Component
