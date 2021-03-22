import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import '.././App.css';

class Contact extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="contact-email">
                    <h5>cbarkr@gmail.com</h5>
                </div>
                <div className="contact-links">
                    <a href="https://github.com/cbarkr">
                        <AiFillGithub className="GitHub" style={{color: 'lightgrey'}} size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/cbarkr/">
                        <AiFillLinkedin className="LinkedIn" style={{color: 'lightgrey'}} size={25} />
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;