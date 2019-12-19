import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./Layout/AppNavigation";
import LoginForm from "./DataElements/LoginForm";
import NumberClaimForm from "./DataElements/NumberClaimForm";
import UserView from "./Views/UserView";


function App() {
    return (
        <div className="App">

           <AppNavigation/>
           <div className="App-container">
              <LoginForm/>
           </div>
           <UserView/>
        </div>

);
}

export default App;
