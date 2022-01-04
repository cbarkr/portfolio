import React from 'react';
import Pathfinding from './Assets/Images/PathfindingVisualizer.jpg';
import FlixList from './Assets/Images/FlixList-Search.png';
import UnityGame from './Assets/Images/GetMeOutOfHereCity.png';

class Work extends React.Component{
    render(){
        return(
            <div className="page-container">
                <section className="content-padding">
                    <h2 className="heading">Work</h2>
                    <div className="flex-gallery">
                        <div className="gallery-item image-opacity-transition">
                            <a href="/work/pathfinding">
                                <img src={Pathfinding} alt="Pathfinding"/>
                                <h5>Pathfinding Visualizer</h5>
                                <p>Interactive visualizer for A*, Dijkstra, and BFS pathfinding</p>
                            </a>
                        </div>
                        <div className="gallery-item image-opacity-transition">
                            <a href="/work/flixlist">
                                <img src={FlixList} alt="FlixList"/>
                                <h5>FlixList Web App</h5>
                                <p>Social movie rating and review site</p>
                            </a>
                        </div>
                        <div className="gallery-item image-opacity-transition">
                            <a href="/work/platformer">
                                <img src={UnityGame} alt="Unity Rage Platformer"/> 
                                <h5>Unity Rage Platformer</h5>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Work;