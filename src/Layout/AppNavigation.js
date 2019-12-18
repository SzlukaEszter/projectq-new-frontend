import Navbar from "react-bootstrap/Navbar";
import React, {Component} from "react";

class AppNavigation extends Component{

    render(){
        return(
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
                alt=""
                src="/letter-q-alphabet-clip-art-letter-q-cliparts.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            <h4>Q</h4>
        </Navbar.Brand>
    </Navbar>);
    }
}

export default AppNavigation;
