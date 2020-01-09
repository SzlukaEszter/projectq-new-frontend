#React Notes

## How to set header in axios?
* 1. Create a config object and pass it as third variable to axios request:
```js
let config = {
            headers: {"Authorization": "Bearer " + token, "Content-Type": "application/json"},
            baseURL: 'http://localhost:8080'
       axios.post('/', {}, config)
                   .then()
                   .catch(error => alert(error));
```

* 2. Set default header (note the ticks instead of quotation marks)
```js
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.post('http://localhost:8080')
            .then(res => this.setState({selectables: res.data, isLoaded: true}))
            //this.setState({ todos: res.data }));
            .catch(error => alert(error));

```

## How to redirect to another URL?
See this artickle:
https://medium.com/@anneeb/redirecting-in-react-4de5e517354a

Usage of Redirect component:
```js
import React, {Component} from "react";
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
 state = {
     redirect: false
 };

   render() {
        return
            (<div>
                {this.renderRedirect()}
             </div>);
}

setRedirect = () => {
        this.setState({redirect: true});
    };

renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/user' />
        }
    };
}
```

## Routing components

Note: ha bármelyik url egy másik folytatása, akkor az alap url mögé kell tenni az '''exact'''' kifejezést,
különben mindig csak az alar url-hez tartozó komponenst fogja megjeleníteni.

```js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./Layout/AppNavigation";
import LoginView from "./Views/LoginView";
import UserView from "./Views/UserView";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegisterView from "./Views/RegisterView";


function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <AppNavigation/>
                    <Switch>
                        <Route path="/register" component={RegisterView}/>
                        <Route path="/login" component={LoginView}/>
                        <Route path="/user" component={UserView}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
```

