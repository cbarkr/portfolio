import React from 'react';
import Aos from 'aos';
import {IoFingerPrint} from 'react-icons/io5';
import {RiBracesFill} from 'react-icons/ri';
import HomeTitle from './Home-Title';
import 'aos/dist/aos.css';
import '.././App.css';
import Pathfinding from './Assets/Images/PathfindingVisualizer.jpg';
import FlixList from './Assets/Images/FlixList-Search.png';

Aos.init({duration: 2000});

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <section className="intro">
                    <div className="static-container">
                        <h1 className="name" style={{color: '#2aa198'}}>
                            <HomeTitle className="author" />
                        </h1>
                    </div>
                </section>

                <section className="interests">
                    <div className="static-container" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <h2>Interests</h2>
                        <div className="interest-groups">
                            <div className="group1">
                                <IoFingerPrint title="Personal" size={25} style={{color: '#2aa198'}} />
                                <h5>Fine_Art</h5>
                                <h5>Graphic_Design</h5>
                                <h5>The_Great_Outdoors</h5>
                            </div>
                            <div className="group2">
                                <RiBracesFill title="Tech" size={25} style={{color: '#2aa198'}} />
                                <h5>
                                    <a href="https://en.wikipedia.org/wiki/Generative_adversarial_network" target="_blank" rel="noreferrer">
                                        GAN
                                    </a>
                                </h5>
                                <h5>Computer_Vision</h5>
                                <h5>Web_Development</h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="aboutme">
                    <div className="static-container" data-aos="fade-up">
                        <h2>A little <a href="/about">about</a> me</h2>
                        <p>I am a second year cs student who takes any opportunity to learn something new</p>
                                
                        <h4 style={{float: 'left'}}>2019</h4><p> 👨‍🎓 Began studying computing science at Simon Fraser University</p>
                        <h4 style={{float: 'left'}}>2021</h4><p> 👨‍💻 [Current] </p>
                        <h4 style={{float: 'left'}}>20__</h4><p> ? </p>
                    </div>
                </section>

                <section className="projects">
                    <div className="static-container" data-aos="fade-up">
                        <h2>Projects</h2>
                        <div className="project-link">
                            <a href="/work" className="project-inner-link">
                                <img className="project-image" src={Pathfinding} alt="Pathfinding"/>
                            </a>
                            <div className="project-text">
                                <h3 className="pathfinding">
                                    <a href="/work" className="project-link">Pathfinding_Visualizer</a>
                                </h3>
                                <p className="pathfinding-info">Interactive visualizer for A*, Dijkstra, and BFS pathfinding</p>
                            </div>
                        </div>
                        <div className="project-link">
                            <a href="/work" className="project-inner-link">
                                <img className="project-image" src={FlixList} alt="FlixList"/>
                            </a>
                            <div className="project-text">
                                <h3 className="flixlist">
                                    <a href="/work" className="project-link">FlixList_Web_App</a>
                                </h3>
                                <p className="flixlist-info">Social movie rating and review site</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;