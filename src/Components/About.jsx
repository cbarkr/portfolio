import React from 'react';
import Aos from 'aos';
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai';
import {Button, ProgressBar} from 'react-bootstrap';
import 'aos/dist/aos.css';
import '.././App.css';

Aos.init({duration: 2000});

class About extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="author">
                    <h3>Hi, my name is Callum Barker</h3>
                        <div className="bio">
                            <p>Coffee enthusiast, amateur tinkerer, and occasional programmer</p>
                            <p>I am currently attending Simon Fraser University for computing science and will be based out of Vancouver for the near future</p>
                        </div>
                </div>
                <div className="skills">
                    <div className="languages">
                        <h5>Languages</h5>
                        <div className="cpp-skill" data-aos="fade-right" data-aos-duration="1000">
                            <span>C/C++</span>
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                        <div className="react-skill" data-aos="fade-right" data-aos-duration="1250">
                            <span>ReactJS</span>
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                        <div className="python-skill" data-aos="fade-right" data-aos-duration="1500">
                            <span>Python</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="css-skill" data-aos="fade-right" data-aos-duration="1750">
                            <span>CSS</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="html-skill" data-aos="fade-right" data-aos-duration="2000">
                            <span>HTML</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="ps-skill" data-aos="fade-right" data-aos-duration="2500">
                            <span> Photoshop</span>
                            <ProgressBar variant="info" now={90} label="90" />
                        </div>
                    </div>
                    <div className="tools">
                        <h5>Tools</h5>
                        <p>Visual Studio</p>
                        <p>Github</p>
                        <p>Gitlab</p>
                    </div>
                </div>
                <div className="links">
                    <a href="https://github.com/cbarkr" target="_blank" rel="noreferrer">
                        <AiFillGithub  title="GitHub" style={{color: 'lightgrey'}} size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/cbarkr/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin title="LinkedIn" style={{color: 'lightgrey'}} size={25} />
                    </a>
                    <a href="https://www.instagram.com/cbarkr/" target="_blank" rel="noreferrer">
                        <AiOutlineInstagram title="LinkedIn" style={{color: 'lightgrey'}} size={25} />
                    </a>
                    <Button href="/CallumBarker-Resume.pdf" variant="outline-light" target="_blank" rel="noreferrer">Surprise</Button>
                </div>
            </div>
        )
    }
}

export default About;