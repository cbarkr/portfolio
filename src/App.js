import React from 'react';
import ScrollToTop from './ScrollToTop';
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import Surprise from './Components/OpenPDF';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <React.Fragment>
      <Router>
        <ScrollToTop>
            <TopNav />
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/surprise" component={Surprise} />
            <Footer />
          </ScrollToTop>
        </Router>
      </React.Fragment>
    </div>
  )
}

export default App;
