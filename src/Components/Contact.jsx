import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import '.././App.css';

class Contact extends React.Component{
    render(){
        return(
            <div className="container">
                <a href="https://github.com/cbarkr">
                    <AiFillGithub className="GitHub" style={{color: 'lightgrey'}} size={25} />
                </a>
                <a href="https://www.linkedin.com/in/cbarkr/">
                    <AiFillLinkedin className="LinkedIn" style={{color: 'lightgrey'}} size={25} />
                </a>
            </div>
        )
    }
}

export default Contact;