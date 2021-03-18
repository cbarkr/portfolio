import React from 'react';
import TopNav from "./Components/TopNav";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <TopNav></TopNav>
        <Route exact path="About" component={About} />
        <Route exact path="Contact" component={Contact} />
      </Router>
    </React.Fragment>
  );
}

export default App;
