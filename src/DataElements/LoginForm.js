import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class LoginForm extends Component {
 state = {
     username: null,
     password: null
 }
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
                            <Form.Control type="username" placeholder="Username" onChange={event => this.setState({username: event.target.value})}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={event => this.setState({password: event.target.value})}/>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={this.sendCredentials}>Sign In</Button><br/>
                        <Button variant="secondary" type="button" disabled>Sign Up</Button>
                    </Form>
                </div>
        );
    }

    sendCredentials = () => {
        axios.post("http://localhost:8080/auth/signin", {"username" :this.state.username, "password": this.state.password})
            .then(
                res => {
                    console.log(res.data);
                    document.cookie ="token="+ res.data.token;
                });
    }
}

export default LoginForm;