import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai';
import {Button} from 'react-bootstrap';
import '.././App.css';

class About extends React.Component{
    render(){
        return(
            <div className="container">
                <h1 className="about">About</h1>
                <div className="author">
                    <h5>Hi, my name is Callum Barker</h5>
                </div>
                <div className="bio">
                    <p> Coffee enthusiast, amateur tinkerer, and occasional programmer. I am currently attending Simon Fraser University for computing science and will be based out of Vancouver for the near future </p>
                </div>
                <div className="skills">
                    <div className="tools">
                        <p>C/C++</p>
                        <p>Python</p>
                        <p>ReactJS</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>Visual Studio</p>
                        <p>Github</p>
                        <p>Gitlab</p>
                        <p>Photoshop</p>
                    </div>
                </div>
                <div className="links">
                    <a href="https://github.com/cbarkr">
                        <AiFillGithub  title="GitHub" style={{color: 'lightgrey'}} size={25}/>
                    </a>
                    <a href="https://www.linkedin.com/in/cbarkr/">
                        <AiFillLinkedin title="LinkedIn" style={{color: 'lightgrey'}} size={25}/>
                    </a>
                    <a href="https://www.instagram.com/cbarkr/">
                        <AiOutlineInstagram title="LinkedIn" style={{color: 'lightgrey'}} size={25}/>
                    </a>
                    <Button href="/CallumBarker-Resume.pdf" variant="outline-light" target="_blank">Surprise</Button>
                </div>
            </div>
        )
    }
}

export default About;