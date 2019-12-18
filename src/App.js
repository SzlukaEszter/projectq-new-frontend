import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from "./Layout/AppNavigation";
import LoginForm from "./DataElements/LoginForm";


function App() {
    return (
        <div className="App">

           <AppNavigation/>
           <div className="App-container">
              <LoginForm/>
           </div>
        </div>
);
}

export default App;
