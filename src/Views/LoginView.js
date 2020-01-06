import React, {Component} from "react";
import LoginForm from "../DataElements/LoginForm";
import axios from 'axios';

class LoginView extends Component {

    state = {
        token: null,
        credentials: {
            username: null,
            password: null
        }
    };


    render() {
        return (
            <div className="App-container">
                <LoginForm/>
            </div>
        );
    }

    sendCredentials = () => {
        axios.post("http://localhost:8080/auth/signin", {"credentials" :this.state.credentials})
            .then(
            res => {
                console.log(res.data);
                this.setState(
                    {
                        token: res.data.token
                    })
            });

    }
}

export default LoginView;