import React from 'react';
import {Button} from 'react-bootstrap';
import {AiFillGithub} from 'react-icons/ai';
import PlatformerImg from './Assets/Images/GetMeOutOfHereCity.png';
import '.././App.css';
import 'aos/dist/aos.css';

class Platformer extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="platformer" data-aos="fade-right" data-aos-anchor="project">
                    <div className="project-image-wrapper">
                        <img className="project-image" src={PlatformerImg} alt="Get Me Out Of Here"/> 
                    </div>
                    <div className="project-desc-sub">
                        <div className="project-desc-sub-title">
                            <h2>Get Me Out Of Here</h2>
                            <Button href="https://github.com/cbarkr/Get-Me-Out-Of-Here" target="_blank" rel="noreferrer" title="Platformer Link" variant="outline-light">
                                <AiFillGithub title="Platformer" size={25}/> Link
                            </Button>
                        </div>
                        <h4 className="comment">{'//'}Description</h4>
                        <p>Rage platformer inspired by Jump King</p>
                        <br />
                        
                        <h4 className="comment">{'//'}Specs</h4>
                        <p>Unity, C#</p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default Platformer;