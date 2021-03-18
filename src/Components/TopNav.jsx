import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import '.././App.css';

class TopNav extends React.Component{
    render(){
        return(
            <div>
                <Navbar fixed="top" id="topNav" variant="dark">
                    <Nav id="navParent">
                        <Nav.Link className="NavChild" as={Link} to="/About">About Me</Nav.Link>
                        <Nav.Link className="NavChild" as={Link} to="/Contact">Contact</Nav.Link>
                        <Nav.Link className="NavChild" as={Link} to="/Links">Links</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default TopNav;