import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {FiArrowUpRight} from 'react-icons/fi';
import '.././App.css';

class Work extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="project">
                    <a href="https://github.com/cbarkr/PathfindingVisualizer" className="project-link">
                        <h3>
                            <span className="project-path">Pathfinding Visualizer </span>
                            <span><AiFillGithub title="GitHub" size={25} style={{color: "lightgrey"}}/></span>
                        </h3>
                    </a>
                    <div className="project-desc">
                        <h5>Description</h5>
                        <h5>Specs</h5>
                        <p>Made in Python and Pygame</p>
                    </div>
                </div>
                <div className="project">
                    <a href="https://flixxlist.herokuapp.com/" className="project-link">
                        <h3>
                            <span className="project-path">FlixList Web App </span>
                            <span><FiArrowUpRight title="FlixList" size={25} style={{color: "lightgrey"}}/></span>
                        </h3>
                    </a>
                    <div className="project-desc">
                        <h5>Description</h5>
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