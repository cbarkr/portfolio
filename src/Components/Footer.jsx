import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import '.././App.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="info">
                    <p>Callum Barker · 2021</p>
                </div>
                <div className="contact-links">
                    <a href="https://github.com/cbarkr">
                        <AiFillGithub className="GitHub" style={{color: 'lightgrey'}} size={15} />
                    </a>
                    <a href="https://www.linkedin.com/in/cbarkr/">
                        <AiFillLinkedin className="LinkedIn" style={{color: 'lightgrey'}} size={15} />
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;