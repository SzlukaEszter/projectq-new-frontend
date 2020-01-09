import Navbar from "react-bootstrap/Navbar";
import React, {Component} from "react";

class AppNavigation extends Component{


    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
            <h1 style={{ontFamily: 'Righteous, cursive'}}>Q</h1>
        </Navbar.Brand>
    </Navbar>);
    }
}

export default AppNavigation;
