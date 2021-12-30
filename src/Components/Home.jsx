import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {IoFingerPrint} from 'react-icons/io5';
import {RiBracesFill} from 'react-icons/ri';
import Aos from 'aos';
import HomeTitle from './Home-Title';
import * as Icons from './Tree/Icons';
import {useMeasure, usePrevious} from './Tree/Helpers';
import {Frame, Content, toggle} from './Tree/Styles';
import {FiArrowUpRight} from 'react-icons/fi';
import {AiOutlineInstagram, AiFillMail, AiFillLinkedin} from 'react-icons/ai';
import Pathfinding from './Assets/Images/PathfindingVisualizer.jpg';
import FlixList from './Assets/Images/FlixList-Search.png';
import UnityGame from './Assets/Images/GetMeOutOfHereCity.png';
import 'aos/dist/aos.css';
import '.././App.css';

Aos.init({duration: 2000});

function Tree({ children, name, style, open = false }) {
    const [isOpen, setOpen] = useState(open)
    const prev = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    let { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
      <Frame>
        <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
        <span style={{ verticalAlign: 'middle', ...style }}>{name}</span>
        <Content style={{ opacity, height: height.to(height => (isOpen && prev === isOpen ? 'auto' : height)) }}>
          <animated.div style={{ transform }} {...bind}>
            {children}
          </animated.div>
        </Content>
      </Frame>
    )
}

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

                <section className="aboutme">
                    <div className="static-container" data-aos="fade-up">
                        <div className="aboutme-wrapper">
                            <h2>A little <a href="/about">about</a> me</h2>
                            <p>I am a computing science student with an interest in design</p>
                            <p>Currently working on learning back end technologies and improving front end skills</p>
                            <p>I am open to any opportunities to develop my skills and learn :)</p>
                            <p className="timeline">{'//'}Timeline</p>
                            <h4 style={{float: 'left'}}>2019</h4><p> 👨‍🎓 Began studying computing science at Simon Fraser University</p>
                            <h4 style={{float: 'left'}}>2021</h4><p> 👨‍💻 [Current] Studying and working on projects </p>
                            <h4 style={{float: 'left'}}>2024</h4><p> 🧾 Expected graduation date </p>
                        </div>
                    </div>
                </section>

                <section className="interests">
                    <div className="static-container" data-aos="fade-up">
                        <h2>Interests</h2>
                        <div className="interest-groups">
                            <div className="group1" style={{color: "black"}}>
                                <IoFingerPrint title="Personal" size={25} style={{color: '#2aa198'}} />
                                <h5>
                                    <Tree name="Fine_Art">
                                        <Tree name="Photography">
                                            <br /><p>Focus on fashion and fine art photography</p>
                                            <br />
                                            <a href="https://cbarkr.tumblr.com" target="_blank" rel="noreferrer">
                                                <p style={{float: 'left'}}>Temporary portfolio</p>
                                                <FiArrowUpRight title="FlixList" size={20} style={{color: "lightgrey"}}/>
                                            </a><br />
                                            <br />
                                        </Tree>
                                        <Tree name="Architecture" />
                                        <Tree name="Fashion" />
                                    </Tree>
                                    <Tree name="Graphic_Design">
                                        <Tree name="Designed personal logo" />
                                        <Tree name="Created graphics for highschool yearbooks" />
                                    </Tree>
                                    <Tree name="The_Great_Outdoors">
                                        <Tree name="Hiking" />
                                        <Tree name="Camping" />
                                        <Tree name="Snowboarding" />
                                    </Tree>
                                </h5>

                            </div>
                            <div className="group2">
                                <RiBracesFill title="Tech" size={25} style={{color: '#2aa198'}} />
                                <h5>
                                    <Tree name="Web_Development">
                                        <br /><p>Inspired by all things visual</p><br />
                                    </Tree>
                                    <Tree name="GAN" />
                                    <Tree name="Computer_Vision" />
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projects">
                    <div className="static-container" data-aos="fade-up">
                        <h2><a href="/work">Projects</a></h2>
                        <div className="project-link">
                            <a href="/work/pathfinding">
                                <div className="project-image-wrapper">
                                    <img className="project-image" src={Pathfinding} alt="Pathfinding"/>
                                    <p className="project-name">Pathfinding_Visualizer</p>
                                </div>
                            </a>
                        </div>
                        <div className="project-link">
                            <a href="/work/flixlist">
                                <div className="project-image-wrapper">
                                    <img className="project-image" src={FlixList} alt="FlixList"/>
                                    <p className="project-name">FlixList_Web_App</p>
                                </div>
                            </a>
                        </div>
                        <div className="project-link">
                            <a href="/work/platformer">
                                <div className="project-image-wrapper">
                                    <img className="project-image" src={UnityGame} alt="Get Me Out Of Here"/> 
                                    <p className="project-name">2D_Rage_Platformer</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="static-container" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <h2 className="contact-title"><a href="/contact">Contact</a></h2>
                        <div className="contact-links-home">
                            <h5>
                                <a href="https://www.instagram.com/cbarkr/" target="_blank" rel="noreferrer">
                                    <AiOutlineInstagram title="Instagram" size={25} />@cbarkr
                                </a>
                            </h5>
                            <h5>
                                <a href="mailto:callumb@sfu.ca" target="_blank" rel="noreferrer">
                                        <AiFillMail title="Mail" size={25} />callumb@sfu.ca
                                </a>
                                <span style={{color: "lightgrey"}}> (school)</span>
                            </h5>
                            <h5>
                                <a href="mailto:cbarkr@gmail.ca" target="_blank" rel="noreferrer">
                                    <AiFillMail title="Mail" size={25} />cbarkr@gmail.com
                                </a>
                                <span style={{color: "lightgrey"}}> (personal)</span>
                            </h5>
                            <h5>
                                <a href="https://www.linkedin.com/in/cbarkr/" target="_blank" rel="noreferrer">
                                    <AiFillLinkedin title="LinkedIn" size={25} />cbarkr
                                </a>
                            </h5>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;