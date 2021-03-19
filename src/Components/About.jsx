import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import '.././App.css';

class About extends React.Component{
    render(){
        return(
            <div className="container">
                <h1 className="about">About</h1>
                <div className="links">
                    <a href="https://github.com/cbarkr">
                        <AiFillGithub className="GitHub" title="GitHub" style={{color: 'lightgrey'}} size={25}/>
                    </a>
                    <a href="https://www.linkedin.com/in/cbarkr/">
                        <AiFillLinkedin className="LinkedIn" title="LinkedIn" style={{color: 'lightgrey'}} size={25}/>
                    </a>
                </div>
                <div className="bio">
                    <p> Coffee enthusiast, amateur tinkerer, and occasional programmer. I am currently attending Simon Fraser University for computing science, based out of Vancouver for the near future </p>
                </div>
            </div>
        )
    }
}

export default About;