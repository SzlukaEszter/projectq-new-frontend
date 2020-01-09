import React, {Component} from 'react';

import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import RegisterView from "./RegisterView";

class WelcomeView extends Component {
    state = {
        redirect: false
    };

    componentDidMount() {
        console.log(this.state);
        console.log(this);
    }

    getStyle() {
        return {
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
            minHeight: '2vh',
            maxWidth: 'content-box',
            padding: '20px'
        };
    }

    goToRegistration() {
        if (this.state.redirect) {
            console.log("redirect");
            return (<Redirect to="/register"/>);
        }
    }


    render() {

        return (
            <div className="welcome" style={this.getStyle()}>
                <h1>Project Q</h1>
                <h3>No more waiting client service management</h3><br/>
                <h2>What we do?</h2>
                <h4>Have you ever wished if just you could get back the time you spent waiting to your call at a client
                    service?</h4><br/>
                <h4>We give back your time.</h4><br/>
                <p>We provide smartphone ticket claiming at our partner's client services.
                    All you have to do is to select the client service and the case you would like to deal with and
                    claim a number.
                    We will notify you just before your call.</p>
                <Button variant="primary" onClick={() => this.setState({redirect: true})}>Primary</Button>
                {this.goToRegistration()}
            </div>
        );
    }
}

export default WelcomeView;