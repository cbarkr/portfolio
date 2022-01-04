import React from 'react';
import {Button} from 'react-bootstrap';
import {AiFillGithub} from 'react-icons/ai';
import PathfindingImg from './Assets/Images/PathfindingVisualizer.jpg';

class Pathfinding extends React.Component {
    render(){
        return(
            <div className="page-container">
                <section className="content-padding">
                    <div className="flex-container flex-column">
                        <div className="flex-container flex-row">
                            <span className="heading">Pathfinding Visualizer</span>
                            <Button className="btn-sm flex-container content-center" href="https://github.com/cbarkr/PathfindingVisualizer" target="_blank" rel="noreferrer" title="Pathfinding Link" variant="outline-light">
                                <AiFillGithub title="GitHub" size={25}/>
                            </Button>
                        </div>
                        <img className="project-image image-margin" tabIndex="-1" src={PathfindingImg} alt="Pathfinding"/>
                        <span className="subheading comment-alt">{'//'}Description</span>
                        <p>Interactive shortest path visualizer using A*, Dijkstra, and BFS algorithms. Users select start, end, and barrier nodes 
                            (or opt for randomly generated barriers), then watch as the selected algorithm finds a path between nodes</p>

                        <span className="subheading comment-alt">{'//'}Specs</span>
                        <p>Made in Python and Pygame</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Pathfinding;