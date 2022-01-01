import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import Scan from './Assets/Images/Scan.png';

class About extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="author">
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
                    <div className="languages">
                        <h4>Languages</h4>
                        <div className="cpp-skill">
                            <span>C/C++</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="react-skill">
                            <span>ReactJS</span>
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                        <div className="js-skill">
                            <span>JavaScript</span>
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                        <div className="python-skill">
                            <span>Python</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                    </div>
                    <div className="tools">
                        <h4>Tools</h4>
                        <div className="css-skill">
                            <span>CSS</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="html-skill">
                            <span>HTML</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="ps-skill">
                            <span> Photoshop</span>
                            <ProgressBar variant="info" now={80} label="80" />
                        </div>
                        <div className="vs-skill">
                            <span>Visual Studio</span> 
                            <ProgressBar variant="info" now={75} label="75" />
                        </div>
                        <div className="github-skill">
                            <span>GitHub</span> 
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                        <div className="gitlab-skill">
                            <span>GitLab</span> 
                            <ProgressBar variant="info" now={70} label="70" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;