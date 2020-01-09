import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./Layout/AppNavigation";
import LoginView from "./Views/LoginView";
import UserView from "./Views/UserView";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegisterView from "./Views/RegisterView";
import WelcomeView from "./Views/WelcomeView";


function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <AppNavigation/>
                    <Switch>
                        <Route path="/welcome" component={WelcomeView}/>
                        <Route path="/user" component={UserView}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
