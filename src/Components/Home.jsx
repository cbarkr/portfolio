import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {IoFingerPrint} from 'react-icons/io5';
import {RiBracesFill} from 'react-icons/ri';
import {FiArrowUpRight} from 'react-icons/fi';
import HomeTitle from './Home-Title';
import * as Icons from './Tree/Icons';
import {useMeasure, usePrevious} from './Tree/Helpers';
import {Frame, Content, toggle} from './Tree/Styles';
import Slideshow from './Slideshow';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

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
        <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} tabIndex={children ? "0" : "-1"} aria-label={!isOpen ? "Expand" : "Contract"} onClick={() => setOpen(!isOpen)} onKeyDown={() => setOpen(!isOpen)} onKeyUp={() => setOpen(isOpen)}/>
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
            <div className="page-container">
                <section className="content-padding text-center" tabIndex="0">
                    <div className="static-container">
                        <h1><HomeTitle className="author" /></h1>
                    </div>
                </section>
                <section className="content-padding background-tertiary" tabIndex="0">
                    <div className="static-container" data-aos="fade-up">
                        <h2 className="heading">A little <a href="/about" className="hidden-link">about</a> me</h2>
                        <div className="flex-container flex-column">
                            <p>I am a computing science student with an interest in design and web development</p>
                            <p>Currently working on learning back end technologies and improving skills in UX design</p>
                            <p>I am open to any opportunities to develop my skills and learn :)</p>
                        </div>
                        <span className="comment">{'//'}Timeline</span>
                        <br />
                        <div className="flex-container flex-column">
                            <div className="flex-container flex-row">
                                <p>2019:&nbsp;</p><p>👨‍🎓&nbsp;</p><p>Began studying computing science at Simon Fraser University</p>
                            </div>
                            <div className="flex-container flex-row">
                                <p>2021:&nbsp;</p><p>👨‍💻&nbsp;</p><p>Studying and working on projects</p>
                            </div>
                            <div className="flex-container flex-row">
                                <p>2021:&nbsp;</p><p>👔&nbsp;</p><p>Completed my first co-op!</p>
                            </div>
                            <div className="flex-container flex-row">
                                <p>2024:&nbsp;</p><p>🧾&nbsp;</p><p>Expected graduation</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-padding" tabIndex="0">
                    <div className="static-container" data-aos="fade-up">
                        <h2 className="heading">Interests</h2>
                        <div className="flex-container interests">
                            <div className="interest-item">
                                <IoFingerPrint className="icon" size={25} aria-label="Fingerprint Icon"/>
                                <h5>
                                    <Tree name="Fine_Art">
                                        <Tree name="Photography">
                                            <br />
                                            <p>Focus on fashion and fine art photography</p>
                                            <br />
                                            <a href="https://cbarkr.tumblr.com" className="visible-link" target="_blank" rel="noreferrer">
                                                <span className="visible-link">Temporary portfolio</span><FiArrowUpRight title="FlixList" size={20} />
                                            </a>
                                            <br />
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
                            <div className="interest-item">
                                <RiBracesFill className="icon" size={25} aria-label="Curly Braces Icon"/>
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
                <section className="content-padding background-tertiary" tabIndex="0">
                    <div className="static-container" data-aos="fade-up">
                        <h2 className="heading"><a href="/work" className="hidden-link">Projects</a></h2>
                        <div className="flex-container">
                            <Slideshow />
                        </div>
                    </div>
                </section>
                <section className="content-padding" tabIndex="0">
                    <div className="static-container text-center" data-aos="fade-up">
                        <h5 className="subheading">Want to get in touch? <a href="/contact" className="visible-link">Contact Me</a>!</h5>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;