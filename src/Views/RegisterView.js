import React from "react";
import RegisterForm from "../DataElements/RegisterForm";
import {Component} from "react";
import LoginView from "./LoginView";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import LoginForm from "../DataElements/LoginForm";

class RegisterView extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                            <RegisterForm/>
                    </Col>
                    <Col>
                            <LoginForm/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RegisterView;