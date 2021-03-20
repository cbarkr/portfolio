import React from 'react';
import {FaCode, FaBrain} from 'react-icons/fa';
import {GiSoundWaves} from 'react-icons/gi';
import '.././App.css';

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <section className="intro">
                    <h3 className="user-head">[user]</h3>
                    <h3 className="name">
                        <span className="name-left">name:</span>
                        <span className="name-right"> callum_barker</span>
                    </h3>
                    <h3 className="bio-short">
                        <span className="bio-short-left">bio:</span>
                        <span className="bio-short-right"> life long learner, inspired by my surroundings</span>
                    </h3>
                </section>

                <section className="projects">
                    <h3>Projects</h3>
                    <div className="project-link">
                        <a href="/work" className="project-link">
                            <h4 className="pathfinding">Pathfinding_Visualizer</h4>
                        </a>
                        <p className="pathfinding-info">Interactive visualizer for A*, Dijkstra, and BFS pathfinding</p>
                    </div>
                    <div className="project-link">
                        <a href="/work" className="project-link">
                            <h4 className="flixlist">FlixList_Web_App</h4>
                        </a>
                        <p className="flixlist-info">Social movie rating and review site</p>
                    </div>
                </section>

                <section className="interests">
                    <h3>Interests</h3>
                    <div className="group1">
                        <h5>Art</h5>
                        <h5>Graphic_Design</h5>
                        <h5>The_Outdoors</h5>
                    </div>
                    <div className="group2">
                        <h5>GAN</h5>
                        <h5>Computer_Vision</h5>
                    </div>
                </section>

                <section className="inspiration">
                    <div className="tools">
                        <FaCode title="Tools" size={25} style={{color: 'yellowgreen'}} />
                        <h5>ReactJS</h5>
                        <h5>Bootstrap</h5>
                        <h5>Photoshop</h5>
                        <h5>ScrollMagic</h5>
                        <h5>AOS</h5>
                    </div>
                    <div className="music">
                        <GiSoundWaves title="Music" size={30} style={{color: 'yellowgreen'}} />
                        <h5>Ryo Fukui</h5>
                        <h5>Nujabes</h5>
                        <h5>Uyama Hiroto</h5>
                        <h5>Toe</h5>
                        <h5>Misogi</h5>
                    </div>
                    <div className="mental">
                        <FaBrain title="Mental" size={25} style={{color: 'yellowgreen'}} />
                        <h5>Many cups of coffee</h5>
                        <h5>Hours of procastination</h5>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;