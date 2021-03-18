import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import '.././App.css';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <header className="contactHead">
                    <Link to="https://github.com/cbarkr">
                        <AiFillGithub className="GitHub" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/cbarkr/">
                        <AiFillLinkedin className="LinkedIn" />
                    </Link>
                </header>
            </div>
        )
    }
}

export default Contact;