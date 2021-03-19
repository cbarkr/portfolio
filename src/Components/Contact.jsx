import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import '.././App.css';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <header className="contactHead">
                    <div className="links">
                        <a href="https://github.com/cbarkr">
                            <AiFillGithub className="GitHub" style={{color: 'black'}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/cbarkr/">
                            <AiFillLinkedin className="LinkedIn" style={{color: 'black'}}/>
                        </a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Contact;