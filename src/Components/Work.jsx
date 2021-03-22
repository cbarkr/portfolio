import React from 'react';
import Aos from 'aos';
import {AiFillGithub} from 'react-icons/ai';
import {FiArrowUpRight} from 'react-icons/fi';
import 'aos/dist/aos.css';
import '.././App.css';

Aos.init({duration: 2000});

class Work extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="project" data-aos="fade-right">
                        <h3>
                            <a href="https://github.com/cbarkr/PathfindingVisualizer" className="project-link" target="_blank" rel="noreferrer">Pathfinding Visualizer
                                <AiFillGithub title="GitHub" size={25} style={{color: "lightgrey"}}/>
                            </a>
                        </h3>
                    <div className="project-desc">
                        <h5>Description</h5>
                        <p>Interactive shortest path visualizer using A*, Dijkstra, and BFS algoriths. Users select start, end, and barrier nodes 
                            (or opt for randomly generated barriers), then watch as the selected algorithm finds a path between nodes.</p>

                        <h5>Specs</h5>
                        <p>Made in Python and Pygame</p>
                    </div>
                </div>
                <div className="project" data-aos="fade-left">
                        <h3>
                            <a href="https://flixxlist.herokuapp.com/" className="project-link" target="_blank" rel="noreferrer">FlixList Web App
                                <FiArrowUpRight title="FlixList" size={25} style={{color: "lightgrey"}}/>
                            </a>
                        </h3>
                    <div className="project-desc">
                        <h5>Description</h5>
                        <p>Social movie rating and review site</p>

                        <h5>Specs</h5>

                        <b>Front End</b>
                        <p>ReactJS, Bootstrap</p>

                        <b>Back End</b>
                        <p>MongoDB, NodeJS</p>

                        <b>Other Ends</b>
                        <p>RapidAPI Movie Database API</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;