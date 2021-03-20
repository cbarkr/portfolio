import React from 'react';
import TopNav from './Components/TopNav';
import Home from './Components/Home';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <React.Fragment>
        <Router>
          <TopNav />
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </React.Fragment>
    </div>
  )
}

export default App;
