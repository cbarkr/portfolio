import React from 'react';
import Aos from 'aos';
import {AiFillGithub} from 'react-icons/ai';
import {FiArrowUpRight} from 'react-icons/fi';
import {Button} from 'react-bootstrap';
import Pathfinding from './Assets/Images/PathfindingVisualizer.jpg';
import FlixList from './Assets/Images/FlixList-Search.png';
import UnityGame from './Assets/Images/GetMeOutOfHereCity.png';
import 'aos/dist/aos.css';
import '.././App.css';

Aos.init({duration: 2000});

class Work extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="project" data-aos="fade-right">
                    <a href="/work/pathfinding" className="work-project-link">
                        <div className="project-image-wrapper">
                            <img className="project-image" src={Pathfinding} alt="Pathfinding"/>
                        </div>
                    </a>
                    <div className="project-desc">
                        <h2><a href="/work/pathfinding">Pathfinding Visualizer</a></h2>
                        <Button href="https://github.com/cbarkr/PathfindingVisualizer" target="_blank" rel="noreferrer" title="Pathfinding Link" variant="outline-light">
                            <AiFillGithub title="GitHub" size={25} style={{color: "lightgrey"}}/> GitHub Link
                        </Button>
                        <p>Interactive visualizer for A*, Dijkstra, and BFS pathfinding</p>
                    </div>
                </div>
                <div className="project" data-aos="fade-right">
                    <a href="/work/flixlist" className="work-project-link">
                        <div className="project-image-wrapper">
                            <img className="project-image" src={FlixList} alt="FlixList"/>
                        </div>
                    </a>
                    <div className="project-desc">
                        <h2><a href="/work/flixlist"> FlixList Web App</a></h2>
                        <Button href="https://flixxlist.herokuapp.com/" target="_blank" rel="noreferrer" title="FlixList Link" variant="outline-light">
                            <FiArrowUpRight title="FlixList" size={25} style={{color: "lightgrey"}}/> FlixList Link
                        </Button>
                        <p>Social movie rating and review site</p>
                    </div>
                </div>

                <div className="project" data-aos="fade-right" data-aos-anchor="project">
                    <a href="/work/platformer" className="work-project-link">
                        <div className="project-image-wrapper">
                            <img className="project-image" src={UnityGame} alt="Get Me Out Of Here"/> 
                        </div>
                    </a>
                    <div className="project-desc">
                        <h2><a href="/work/platformer">Get Me Out Of Here</a></h2>
                        <Button href="https://github.com/cbarkr/Get-Me-Out-Of-Here" target="_blank" rel="noreferrer" title="Platformer Link" variant="outline-light">
                            <AiFillGithub title="Platformer" size={25} style={{color: "lightgrey"}}/> GitHub Link
                        </Button>
                        <p>Rage platformer inspired by Jump King</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;