import React, {Component} from 'react';

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NumberClaimForm from "../DataElements/NumberClaimForm";
import RegisterView from "./RegisterView";
import LoginView from "./LoginView";

class WelcomeView extends Component {
    state = {
        showLogin: false,
        showRegistration: false
    };


    getStyle() {
        return {
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
            minHeight: '2vh',
            maxWidth: 'content-box',
            padding: '20px'
        };
    }


    render() {
        const login = (
            <div>
                <React.Fragment>
                    <LoginView/>
                </React.Fragment>
            </div>
        );
        const register = (
            <div>
                <React.Fragment>
                    <RegisterView/>
                </React.Fragment>
            </div>
        );

        let form;
        if (this.state.showLogin) {
            form = login;
        } else if (this.state.showRegistration) {
            form = register;
        }

        let buttons = (
                <React.Fragment>
                <div className="d-flex flex-column">
                    <ButtonGroup size="lg">
                        <Button variant="primary" onClick={this.setState({showLogin: true})}>Sign In</Button>
                        <Button variant="warning" onClick={this.setState({showRegistration: true})}>Sign Up</Button>
                    </ButtonGroup>
                </div>
                </React.Fragment>
            );

        let changingContent = this.state.showLogin || this.state.showRegistration ? form : buttons;


        return (
            <div className="welcome" style={this.getStyle()}>
                <h1>Welcome to our Client Service!</h1>
                <h2>Please Sign in or Sign Up!</h2>
                   {buttons}
                    {form}
            </div>
        );
    }
}

export default WelcomeView;