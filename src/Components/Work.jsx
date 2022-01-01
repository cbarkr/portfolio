import React from 'react';
import Pathfinding from './Assets/Images/PathfindingVisualizer.jpg';
import FlixList from './Assets/Images/FlixList-Search.png';
import UnityGame from './Assets/Images/GetMeOutOfHereCity.png';

class Work extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="project">
                    <a href="/work/pathfinding" className="work-project-link">
                        <div className="project-image-wrapper">
                            <img className="project-image" src={Pathfinding} alt="Pathfinding"/>
                        </div>
                    </a>
                    <div className="project-desc">
                        <a href="/work/pathfinding">
                            <h2>Pathfinding Visualizer</h2>
                            <p>Interactive visualizer for A*, Dijkstra, and BFS pathfinding</p>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="/work/flixlist" className="work-project-link">
                        <div className="project-image-wrapper">
                            <img className="project-image" src={FlixList} alt="FlixList"/>
                        </div>
                    </a>
                    <div className="project-desc">
                        <a href="/work/flixlist"> 
                            <h2>FlixList Web App</h2>
                            <p>Social movie rating and review site</p>
                        </a>
                    </div>
                </div>

                <div className="project">
                    <a href="/work/platformer" className="work-project-link">
                        <div className="project-image-wrapper">
                            <img className="project-image" src={UnityGame} alt="Get Me Out Of Here"/> 
                        </div>
                    </a>
                    <div className="project-desc">
                        <a href="/work/platformer">
                            <h2>Get Me Out Of Here</h2>
                            <p>Rage platformer inspired by Jump King</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;