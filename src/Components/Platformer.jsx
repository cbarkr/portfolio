import React from 'react';
import {Button} from 'react-bootstrap';
import {AiFillGithub} from 'react-icons/ai';
import PlatformerImg from './Assets/Images/GetMeOutOfHereCity.png';

class Platformer extends React.Component {
    render(){
        return(
            <div className="page-container">
                <section className="content-padding">
                    <div className="flex-container flex-column">
                        <div className="flex-container flex-row">
                            <span className="heading">Get Me Out Of Here</span>
                            <Button className="btn-sm flex-container content-center" href="https://github.com/cbarkr/Get-Me-Out-Of-Here" target="_blank" rel="noreferrer" title="Platformer Link" variant="outline-light">
                                <AiFillGithub title="Platformer" size={25}/>
                            </Button>
                        </div>
                        <img className="project-image image-margin" tabIndex="-1" src={PlatformerImg} alt="Get Me Out Of Here"/> 
                        <span className="subheading comment-alt">{'//'}Description</span>
                        <p>Rage platformer inspired by Jump King</p>
                        
                        <span className="subheading comment-alt">{'//'}Specs</span>
                        <p>Unity, C#</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Platformer;