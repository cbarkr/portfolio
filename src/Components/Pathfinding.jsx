import React from 'react';
import {Button} from 'react-bootstrap';
import {AiFillGithub} from 'react-icons/ai';
import PathfindingImg from './Assets/Images/PathfindingVisualizer.jpg';

class Pathfinding extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="pathfinding">
                    <div className="project-image-wrapper">
                        <img className="project-image" src={PathfindingImg} alt="Pathfinding"/>
                    </div>
                    <div className="project-desc-sub">
                        <div className="project-desc-sub-title">
                            <h2>Pathfinding Visualizer</h2>
                            <Button href="https://github.com/cbarkr/PathfindingVisualizer" target="_blank" rel="noreferrer" title="Pathfinding Link" variant="outline-light">
                                <AiFillGithub title="GitHub" size={25}/> Link
                            </Button>
                        </div>
                        <h4 className="comment">{'//'}Description</h4>
                        <p>Interactive shortest path visualizer using A*, Dijkstra, and BFS algorithms. Users select start, end, and barrier nodes 
                            (or opt for randomly generated barriers), then watch as the selected algorithm finds a path between nodes</p>
                        <br />

                        <h4 className="comment">{'//'}Specs</h4>
                        <p>Made in Python and Pygame</p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default Pathfinding;