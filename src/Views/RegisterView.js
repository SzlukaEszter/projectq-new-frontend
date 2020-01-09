import React from "react";
import RegisterForm from "../DataElements/RegisterForm";
import {Component} from "react";
import LoginView from "./LoginView";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import LoginForm from "../DataElements/LoginForm";

class RegisterView extends Component {

    getStyle() {
        return {
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
        };
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col style={this.getStyle()}>
                            <RegisterForm/>
                    </Col>
                    <Col style={this.getStyle()}>
                            <LoginForm/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RegisterView;