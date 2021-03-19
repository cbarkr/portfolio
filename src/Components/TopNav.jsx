import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Logo from '.././Logos/logo-black.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';

class TopNav extends React.Component{
    render(){
        return(
            <div>
                <Navbar sticky="top" id="topNav">
                    <Nav id="navParent">
                        <Navbar.Brand>
                            <img src={Logo} />
                        </Navbar.Brand>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <a href="https://github.com/cbarkr" className="nav-link">
                            <AiFillGithub className="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/cbarkr/" className="nav-link">
                            <AiFillLinkedin className="LinkedIn"/>
                        </a>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default TopNav;