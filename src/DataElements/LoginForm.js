import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
 state = {
     username: null,
     password: null,
     redirect: false
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
        return (
                <div className="Formcontainer" style={this.getStyle()}>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" onChange={event => this.setUn(event)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={event => this.setPw(event)}/>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={this.sendCredentials}>Sign In</Button><br/>
                        <Button variant="secondary" type="button" disabled>Sign Up</Button>
                    </Form>
                    //this.renderRedirect()
                </div>
        );
    }

    setPw = (e) => {
        this.setState({password: e.target.value});
    };

    setUn = (e) => {
        this.setState({username: e.target.value});
    };

    setRedirect = () => {
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/user' />
        }
    };

    sendCredentials = () => {
        axios.post("http://localhost:8080/auth/signin", {"username" :this.state.username, "password": this.state.password}, {withCredentials: true})
            .then(
                res => {

                    axios.get("http://localhost:8080/test", {withCredentials: true})
                })
            .catch(error => alert(error));
    }
}

export default LoginForm;