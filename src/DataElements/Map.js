import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
    state = {
        latitude: null,
        longitude: null
    }

    componentDidMount() {  // also a lifecycle method
        //gets browser's location and calls the callbacks provided in its parameters
        navigator.geolocation.getCurrentPosition(this.success, this.error);
    }

    succes = () => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
    };

        return
            "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";


    render(){
        return (
           // <img src= "https://maps.googleapis.com/maps/api/staticmap?center="{latitude},{longitude}"&zoom=13&size=300x300&sensor=false";{}>
           // </img>
        );
    }
}
export default Component
