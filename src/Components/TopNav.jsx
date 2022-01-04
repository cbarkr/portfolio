import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Logo from './Assets/Logos/logo-white.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class TopNav extends React.Component{
    render(){
        return(
            <Navbar variant="dark" sticky="top" className="navbar" id="topNav"
                data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true"
                data-aos-delay={2500} data-aos-duration={2000}>
                <Navbar.Brand as={Link} to="/">
                    <img src={Logo} alt="Logo"/>
                </Navbar.Brand>
                <Nav className="navbar-nav ml-auto">
                    <Nav.Link as={Link} to="/work">work</Nav.Link>
                    <Nav.Link as={Link} to="/about">about</Nav.Link>
                    <Nav.Link as={Link} to="/contact">contact</Nav.Link>
                    <a href="https://github.com/cbarkr" className="nav-link" aria-label="GitHub Link">
                        <AiFillGithub title="GitHub" size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/cbarkr/" className="nav-link" aria-label="LinkedIn Link">
                        <AiFillLinkedin title="LinkedIn" size={25} />
                    </a>
                </Nav>
            </Navbar>
        )
    }
}

export default TopNav;