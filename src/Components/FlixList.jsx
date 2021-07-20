import React from 'react';
import {Button} from 'react-bootstrap';
import {FiArrowUpRight} from 'react-icons/fi';
import FlixListImg from './Assets/Images/FlixList-Search.png';
import 'aos/dist/aos.css';
import '.././App.css';

class FlixList extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="flixlist" data-aos="fade-right">
                    <div className="project-image-wrapper">
                        <img className="project-image" src={FlixListImg} alt="FlixList"/>
                    </div>
                    <div className="project-desc-sub">
                        <div className="project-desc-sub-title">
                            <h2>FlixList Web App</h2>
                            <Button href="https://flixxlist.herokuapp.com/" target="_blank" rel="noreferrer" title="FlixList Link" variant="outline-light">
                                <FiArrowUpRight title="FlixList" size={25}/> Link
                            </Button>
                        </div>
                        <h4>Description</h4>
                        <p>Social movie rating and review site</p>
                        <br />

                        <h4>Responsibilites</h4>
                        <p>Designing and creating mockups for each view</p>
                        <p>Producing UI and front end components - navigation, profile pages, user searching, errors</p>
                        <br />

                        <h4 className="specComment">{'//'}Specs</h4>
                        <p>Front End - ReactJS, Bootstrap</p>
                        <p>Back End - MongoDB, NodeJS</p>
                        <p>Other Ends - RapidAPI Movie Database API</p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default FlixList;