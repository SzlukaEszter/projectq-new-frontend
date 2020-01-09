import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Redirect} from 'react-router-dom'

class RegisterForm extends Component {
    state = {
        username: null,
        password: null,
        email: null,
        redirect: false
    };

    getStyle() {
        return {
            minHeight: '2vh',
            maxWidth: 'content-box',
            padding: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(10px + 2vmin)',
            color: 'white',

        };
    }


    render() {
        return (
            <div className="Formcontainer" style={this.getStyle()}>
                <h2>Sign Up</h2>
                <Form>
                    <Form.Group controlId="formBasicUsername" style={{paddingTop: '25px'}}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" onChange={event => this.setUn(event)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={event => this.setPw(event)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={event => this.setEmail(event)}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.sendCredentials}>Sign Up</Button><br/>
                </Form>
                {this.renderRedirect()}
            </div>


        );
    }

    setPw = (e) => {
        this.setState({password: e.target.value});
        console.log(this.state);
    };

    setUn = (e) => {
        this.setState({username: e.target.value});
        console.log(this.state);
    };

    setEmail = (e) => {
        this.setState({email: e.target.value});
        console.log(this.state);
    };

    setRedirect = () => {
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login'/>
        }
    };

    sendCredentials = () => {
        axios.post("http://localhost:8080/auth/signin", {
            "username": this.state.username,
            "password": this.state.password,
            "email": this.state.email
        })
            .then(
                res => {
                    this.setRedirect();
                })
            .catch(error => alert(error));
    }
}

export default RegisterForm;