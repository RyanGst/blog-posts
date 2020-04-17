import React from "react";
import "./App.css";
import Routes from './routes/route';
import logo from './assets/logo.svg';

function App() {


  return (
    <div className="container">
      <img className="logo" src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;