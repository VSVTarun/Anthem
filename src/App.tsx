import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import MYHeader from './components/navbars/Header';
import MyNavbar from './components/navbars/Navbar';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MYHeader/>
      <LandingPage/>
     
    </div>
  );
}

export default App;
