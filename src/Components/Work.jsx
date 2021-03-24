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
                        <h2>
                            <a href="https://github.com/cbarkr/PathfindingVisualizer" className="project-link" target="_blank" rel="noreferrer">Pathfinding Visualizer
                                <AiFillGithub title="GitHub" size={25} style={{color: "lightgrey"}}/>
                            </a>
                        </h2>
                    <div className="project-desc">
                        <h4>Description</h4>
                        <p>Interactive shortest path visualizer using A*, Dijkstra, and BFS algorithms. Users select start, end, and barrier nodes 
                            (or opt for randomly generated barriers), then watch as the selected algorithm finds a path between nodes.</p>

                        <h4>Specs</h4>
                        <p>Made in Python and Pygame</p>
                    </div>
                </div>
                <div className="project" data-aos="fade-left">
                        <h2>
                            <a href="https://flixxlist.herokuapp.com/" className="project-link" target="_blank" rel="noreferrer">FlixList Web App
                                <FiArrowUpRight title="FlixList" size={25} style={{color: "lightgrey"}}/>
                            </a>
                        </h2>
                    <div className="project-desc">
                        <h4>Description</h4>
                        <p>Social movie rating and review site</p>

                        <h4>Specs</h4>

                        <h5>Front End</h5>
                        <p>ReactJS, bootstrap</p>

                        <h5>Back End</h5>
                        <p>MongoDB, NodeJS</p>

                        <h5>Other Ends</h5>
                        <p>RapidAPI Movie Database API</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;