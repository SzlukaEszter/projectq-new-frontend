import React, {Component} from 'react';

import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import RegisterView from "./RegisterView";
import HeadLine from "../Layout/HeadLine";

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
            padding: '50px',
            color: 'white'

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
                <div style={{paddingTop: '300'}}>
                    <h3>Have you ever wished if you could get back the time you spent waiting in queues?</h3><br/>
                    <h4>We give back your time.</h4><br/>
                    <Button variant="primary" onClick={() => this.setState({redirect: true})}>Great!</Button>
                    <p>All you have to do is to select where and what case you would like to deal with.
                        We will notify you on your phone just before your call.</p>
                </div>
                    {this.goToRegistration()}
            </div>
        );
    }
}

export default WelcomeView;