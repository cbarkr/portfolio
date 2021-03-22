import React from 'react';
import Aos from 'aos';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Logo from '.././Logos/logo-white.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '.././App.css';

Aos.init();

class TopNav extends React.Component{
    render(){
        return(
            <Navbar variant="dark" sticky="top" className="navbar" id="topNav" data-aos="fade-down" data-aos-easing="ease-in-out">
                <Navbar.Brand as={Link} to="/" title="Home">
                    <img src={Logo} alt="Logo"/>
                </Navbar.Brand>
                <Nav className="navbar-nav ml-auto">
                    <Nav.Link as={Link} to="/work" title="Work">work</Nav.Link>
                    <Nav.Link as={Link} to="/about" title="About">about</Nav.Link>
                    <Nav.Link as={Link} to="/contact" title="Contact">contact</Nav.Link>
                    <a href="https://github.com/cbarkr" className="nav-link">
                        <AiFillGithub title="GitHub" size={25} style={{color: 'yellowgreen'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/cbarkr/" className="nav-link">
                        <AiFillLinkedin title="LinkedIn" size={25} style={{color: 'yellowgreen'}} />
                    </a>
                </Nav>
            </Navbar>
        )
    }
}

export default TopNav;