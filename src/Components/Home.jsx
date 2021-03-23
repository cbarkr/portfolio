import React from 'react';
import Aos from 'aos';
import {FaCode, FaBrain} from 'react-icons/fa';
import {GiSoundWaves} from 'react-icons/gi';
import {IoFingerPrint} from 'react-icons/io5'
import {RiBracesFill} from 'react-icons/ri'
import 'aos/dist/aos.css';
import '.././App.css';

Aos.init({duration: 2000});

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <section className="intro">
                    <div className="static-container" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <h1 className="name"  data-aos="flip-up" data-aos-easing="ease-in-out" style={{color: '#b2fc13'}}>callum_barker</h1>
                    </div>
                </section>

                <section className="projects">
                    <div className="static-container" data-aos="fade-right">
                        <h2>Projects</h2>
                        <div className="project-link">
                            <h3 className="pathfinding">
                                <a href="/work" className="project-link">Pathfinding_Visualizer</a>
                            </h3>
                            <p className="pathfinding-info">Interactive visualizer for A*, Dijkstra, and BFS pathfinding</p>
                        </div>
                        <div className="project-link">
                            <h3 className="flixlist">
                                <a href="/work" className="project-link">FlixList_Web_App</a>
                            </h3>
                            <p className="flixlist-info">Social movie rating and review site</p>
                        </div>
                    </div>
                </section>

                <section className="interests">
                    <div className="static-container" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <h2>Interests</h2>
                        <div className="interest-groups">
                            <div className="group1">
                                <IoFingerPrint title="Personal" size={25} style={{color: 'yellowgreen'}} />
                                <h5>Fine_Art</h5>
                                <h5>Graphic_Design</h5>
                                <h5>The_Great_Outdoors</h5>
                            </div>
                            <div className="group2">
                                <RiBracesFill title="Tech" size={25} style={{color: 'yellowgreen'}} />
                                <h5>GAN</h5>
                                <h5>Computer_Vision</h5>
                                <h5>Web_Development</h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="inspiration">
                    <div className="static-container"  data-aos="fade-up">
                        <h2>For This Adventure</h2>
                        <div className="inspiration-groups">
                            <div className="tools">
                                <FaCode title="Tools" size={25} style={{color: 'yellowgreen'}} />
                                <h5>ReactJS</h5>
                                <h5>Bootstrap</h5>
                                <h5>AOS</h5>
                                <h5>Photoshop</h5>
                            </div>
                            <div className="music">
                                <GiSoundWaves title="Music" size={30} style={{color: 'yellowgreen'}} />
                                <h5>Ryo_Fukui</h5>
                                <h5>Nujabes</h5>
                                <h5>Uyama_Hiroto</h5>
                                <h5>Toe</h5>
                                <h5>Misogi</h5>
                            </div>
                            <div className="mental">
                                <FaBrain title="Mental" size={25} style={{color: 'yellowgreen'}} />
                                <h5>Many_cups_of_coffee</h5>
                                <h5>Hours_of_procastination</h5>
                                <h5>A_few_Google_searches</h5>
                                <h5>Love</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;