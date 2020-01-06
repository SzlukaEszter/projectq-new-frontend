import React, {Component} from "react";
import LoginForm from "../DataElements/LoginForm";
import axios from 'axios';

class LoginView extends Component {

    render() {
        return (
            <div className="App-container">
                <LoginForm/>
            </div>
        );
    }


}

export default LoginView;