import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import Scan from './Assets/Images/Scan.png';

class About extends React.Component{
    render(){
        return(
            <div className="page-container">
                <section className="content-padding">
                    <h2 className="heading">About</h2>
                    <div className="flex-container flex-column">
                        <div className="profile-photo-wrapper">
                            <img className="profile-photo" tabIndex="-1" src={Scan} alt="3D Scan"></img>    
                        </div>
                        <h3 className="subheading">「Callum Barker」</h3>
                        <p>Computing science student and software developer based in Vancouver, Canada</p>
                    </div>
                    <div className="flex-container flex-column">
                        <span className="subheading comment-alt">Languages</span>
                        <div>
                            <span>C/C++</span>
                            <ProgressBar className="skills-bar" variant="info" now={80} label="80" />
                        </div>
                        <div>
                            <span>C#</span>
                            <ProgressBar className="skills-bar" variant="info" now={80} label="80" />
                        </div>
                        <div>
                            <span>JavaScript</span>
                            <ProgressBar className="skills-bar" variant="info" now={80} label="80" />
                        </div>
                        <div>
                            <span>Python</span>
                            <ProgressBar className="skills-bar" variant="info" now={75} label="75" />
                        </div>
                        <div>
                            <span>SQL</span>
                            <ProgressBar className="skills-bar" variant="info" now={70} label="70" />
                        </div>
                        <div>
                            <span>ASP.NET</span>
                            <ProgressBar className="skills-bar" variant="info" now={75} label="75" />
                        </div>
                        <div>
                            <span>ReactJS</span>
                            <ProgressBar className="skills-bar" variant="info" now={70} label="70" />
                        </div>
                    </div>
                    <br />
                    <div className="flex-container flex-column">
                        <span className="subheading comment-alt">Tools</span>
                        <div>
                            <span>CSS</span>
                            <ProgressBar className="skills-bar" variant="info" now={85} label="85" />
                        </div>
                        <div>
                            <span>HTML</span>
                            <ProgressBar className="skills-bar" variant="info" now={90} label="90" />
                        </div>
                        <div>
                            <span>Photoshop</span>
                            <ProgressBar className="skills-bar" variant="info" now={80} label="80" />
                        </div>
                        <div>
                            <span>Visual Studio</span> 
                            <ProgressBar className="skills-bar" variant="info" now={75} label="75" />
                        </div>
                        <div>
                            <span>Git</span> 
                            <ProgressBar className="skills-bar" variant="info" now={70} label="70" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;