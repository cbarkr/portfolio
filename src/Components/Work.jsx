import React from 'react';
import Aos from 'aos';
import {AiFillGithub} from 'react-icons/ai';
import {FiArrowUpRight} from 'react-icons/fi';
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
                    <div className="project-image-wrapper">
                        <img className="project-image" src={Pathfinding} alt="Pathfinding"/>
                    </div>
                    <div className="project-desc">
                        <h2>
                            <a href="https://github.com/cbarkr/PathfindingVisualizer" className="work-project-link" target="_blank" rel="noreferrer">Pathfinding Visualizer
                                <AiFillGithub title="GitHub" size={25} style={{color: "lightgrey"}}/>
                            </a>
                        </h2>
                        <h4>Description</h4>
                        <p>Interactive shortest path visualizer using A*, Dijkstra, and BFS algorithms. Users select start, end, and barrier nodes 
                            (or opt for randomly generated barriers), then watch as the selected algorithm finds a path between nodes</p>

                        <h4 className="specComment">{'//'}Specs</h4>
                        <p>Made in Python and Pygame</p>
                    </div>
                </div>
                <div className="project" data-aos="fade-right">
                    <div className="project-image-wrapper">
                        <img className="project-image" src={FlixList} alt="FlixList"/>
                    </div>
                    <div className="project-desc">
                        <h2>
                            <a href="https://flixxlist.herokuapp.com/" className="work-project-link" target="_blank" rel="noreferrer">FlixList Web App
                                <FiArrowUpRight title="FlixList" size={25} style={{color: "lightgrey"}}/>
                            </a>
                        </h2>
                        <h4>Description</h4>
                        <p>Social movie rating and review site</p>

                        <h4 className="specComment">{'//'}Specs</h4>

                        <p>Front End - ReactJS, Bootstrap</p>
                        <p>Back End - MongoDB, NodeJS</p>
                        <p>Other Ends - RapidAPI Movie Database API</p>
                    </div>
                </div>

                <div className="project" data-aos="fade-right" data-aos-anchor="project">
                    <div className="project-image-wrapper">
                        <img className="project-image" src={UnityGame} alt="Get Me Out Of Here"/> 
                    </div>
                    <div className="project-desc">
                        <h2>
                            <a href="https://github.com/cbarkr/Get-Me-Out-Of-Here" className="work-project-link" target="_blank" rel="noreferrer">Get Me Out Of Here
                                <AiFillGithub title="Github" size={25} style={{color: "lightgrey"}}/>
                            </a>
                        </h2>
                        <h4>Description</h4>
                        <p>Rage platformer inspired by Jump King</p>
                        
                        <h4 className="specComment">{'//'}Specs</h4>
                        <p>Unity, C#</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;