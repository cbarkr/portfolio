import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {IoFingerPrint} from 'react-icons/io5';
import {RiBracesFill} from 'react-icons/ri';
import Aos from 'aos';
import HomeTitle from './Home-Title';
import * as Icons from './Tree/Icons';
import {useMeasure, usePrevious} from './Tree/Helpers';
import {Frame, Content, toggle} from './Tree/Styles';
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

                <section className="interests">
                    <div className="static-container" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <h2>Interests</h2>
                        <div className="interest-groups">
                            <div className="group1">
                                <IoFingerPrint title="Personal" size={25} style={{color: '#2aa198'}} />
                                <h5>
                                    <Tree name="Fine_Art">
                                        <Tree name="Photography">
                                            <br /><p>Focus on fashion and fine art photography</p><br />
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

                <section className="aboutme">
                    <div className="static-container" data-aos="fade-up">
                        <h2>A little <a href="/about">about</a> me</h2>
                        <p>I take any opportunity to learn something new</p>
                        <p>Currently working on learning Unity, C# scripting, and backend technologies</p>
                        <p className="timeline">{'//'}Timeline</p>
                        <h4 style={{float: 'left'}}>2019</h4><p> 👨‍🎓 Began studying computing science at Simon Fraser University</p>
                        <h4 style={{float: 'left'}}>2021</h4><p> 👨‍💻 [Current] </p>
                        <h4 style={{float: 'left'}}>20__</h4><p> ? </p>
                    </div>
                </section>

                <section className="projects">
                    <div className="static-container" data-aos="fade-up">
                        <h2>Projects</h2>
                        <div className="project-link">
                            <div className="path-project-bg" />
                            <div className="project-text">
                                <h3 className="pathfinding">
                                    <a href="/work">Pathfinding_Visualizer</a>
                                </h3>
                                <p className="pathfinding-info">Interactive visualizer for A*, Dijkstra, and BFS pathfinding</p>
                            </div>
                        </div>
                        <div className="project-link">
                            <div className="flixlist-project-bg" />
                            <div className="project-text">
                                <h3 className="flixlist">
                                    <a href="/work">FlixList_Web_App</a>
                                </h3>
                                <p className="flixlist-info">Social movie rating and review site</p>
                            </div>
                        </div>
                        <div className="project-link">
                            <div className="unity-project-bg" />
                            <div className="project-text">
                                <h3 className="platformer">
                                    <a href="/work">2D_Rage_Platformer</a>
                                </h3>
                                <p className="flixlist-info">Rage platformer inspired by Jump King</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;