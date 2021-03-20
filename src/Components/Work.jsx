import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import '.././App.css';

class Work extends React.Component{
    render(){
        return(
            <div className="container">
                <p className="pathfinding">Pathfinding Visualizer</p>
                <p className="flixlist">FlixList Web App</p>
            </div>
        )
    }
}

export default Work;