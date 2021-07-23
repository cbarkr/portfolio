import React from 'react';
import Aos from 'aos';
//import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai';
import {ProgressBar, Button} from 'react-bootstrap';
import Scan from './Assets/Images/Scan.png';
//import {Link} from 'react-router-dom';
import 'aos/dist/aos.css';
import '.././App.css';

Aos.init({duration: 2000});

class About extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="author" data-aos="fade-right">
                    <div className="profile-photo-wrapper">
                        <img className="profile-photo" src={Scan} alt="3D Scan"></img>
                    </div>
                    <div className="author-text">
                        <h2>Callum Barker</h2>
                            <div className="bio">
                                <p>Coffee enthusiast and occasional programmer</p>
                                <br />
                                <p>Computing science student attending Simon Fraser University - Based out of Vancouver</p>
                            </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="languages" data-aos="fade-right">
                        <h4>Languages</h4>
                        <div className="cpp-skill" data-aos="fade-right" data-aos-duration="1000">
                            <span>C/C++</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="react-skill" data-aos="fade-right" data-aos-duration="1250" data-aos-anchor="cpp-skill">
                            <span>ReactJS</span>
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                        <div className="js-skill" data-aos="fade-right" data-aos-duration="1250" data-aos-anchor="cpp-skill">
                            <span>JavaScript</span>
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                        <div className="python-skill" data-aos="fade-right" data-aos-duration="1500" data-aos-anchor="cpp-skill">
                            <span>Python</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                    </div>
                    <div className="tools" data-aos="fade-right">
                        <h4>Tools</h4>
                        <div className="css-skill" data-aos="fade-right" data-aos-duration="1750" data-aos-anchor="cpp-skill">
                            <span>CSS</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="html-skill" data-aos="fade-right" data-aos-duration="2250" data-aos-anchor="cpp-skill">
                            <span>HTML</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="ps-skill" data-aos="fade-right" data-aos-duration="2500" data-aos-anchor="cpp-skill">
                            <span> Photoshop</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="vs-skill" data-aos="fade-right" data-aos-duration="2750" data-aos-anchor="cpp-skill">
                            <span>Visual Studio</span> 
                            <ProgressBar variant="info" now={75} label="75" />
                        </div>
                        <div className="github-skill" data-aos="fade-right" data-aos-duration="3000" data-aos-anchor="cpp-skill">
                            <span>GitHub</span> 
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                        <div className="gitlab-skill" data-aos="fade-right" data-aos-duration="3500" data-aos-anchor="cpp-skill">
                            <span>GitLab</span> 
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                    </div>
                </div>
                <div className="links">
                    {/*
                    <h5>Other places to find me</h5>
                    <div className="icons">
                        <a href="https://github.com/cbarkr" target="_blank" rel="noreferrer">
                            <AiFillGithub  title="GitHub" style={{color: 'lightgrey'}} size={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/cbarkr/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin title="LinkedIn" style={{color: 'lightgrey'}} size={25} />
                        </a>
                        <a href="https://www.instagram.com/cbarkr/" target="_blank" rel="noreferrer">
                            <AiOutlineInstagram title="Instagram" style={{color: 'lightgrey'}} size={25} />
                        </a>
                        <Button as={Link} to="/surprise" title="Surprise" variant="outline-light">Surprise</Button>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default About;