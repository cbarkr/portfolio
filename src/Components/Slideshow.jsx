import React from 'react';
import Pathfinding from './Assets/Images/PathfindingVisualizer.jpg';
import FlixList from './Assets/Images/FlixList-Search.png';
import UnityGame from './Assets/Images/GetMeOutOfHereCity.png';
import '../scss/App.scss';

const delay = 5000;
const projects = [
  <div className="flex-container content-center image-opacity-transition">
    <a href="/work/pathfinding" className="hidden-link">
      <img className="project-image" src={Pathfinding} alt="Pathfinding"/>
      <p className="hidden-link text-center">Pathfinding_Visualizer</p>
    </a>
  </div>
  ,
  <div className="flex-container content-center image-opacity-transition">
    <a href="/work/flixlist" className="hidden-link">
      <img className="project-image" src={FlixList} alt="FlixList"/>  
      <p className="hidden-link text-center">FlixList_Web_App</p>
    </a>
  </div>
  ,
  <div className="flex-container content-center image-opacity-transition">
    <a href="/work/platformer" className="hidden-link">
      <img className="project-image" src={UnityGame} alt="Get Me Out Of Here"/> 
      <p className="hidden-link text-center">2D_Rage_Platformer</p>
    </a>
  </div>
];

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      ),
    delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshow-transition" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {projects.map((project, index) => (
          <div className="slide" key={index}>{project}</div>
        ))}
      </div>
      <div className="slideshow-dots">
        {projects.map((_, idx) => (
          <div key={idx} className={`slideshow-dot${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx); }} tabIndex="0"></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;