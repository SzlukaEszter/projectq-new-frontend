import React from "react";
import RegisterForm from "../DataElements/RegisterForm";
import {Component} from "react";
import LoginView from "./LoginView";

class RegisterView extends Component {

    render() {
        return (
            <div className="App-container">
                <RegisterForm/>
            </div>
        );
    }
}
export default RegisterView;