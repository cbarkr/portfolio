import React from 'react';
import {Button} from 'react-bootstrap';
import {FiArrowUpRight} from 'react-icons/fi';
import {AiFillGithub} from 'react-icons/ai';
import FlixListImg from './Assets/Images/FlixList-Search.png';

class FlixList extends React.Component {
    render(){
        return(
            <div className="page-container">
                <section className="content-padding">
                    <div className="flex-container flex-column">
                        <div className="flex-container flex-row">
                            <span className="heading">FlixList</span>
                            <Button type="button" className="btn-sm flex-container content-center" href="https://flixxlist.herokuapp.com/" target="_blank" rel="noreferrer" title="FlixList Link" variant="outline-light">
                                <FiArrowUpRight title="FlixList" size={25}/>
                            </Button>
                            <Button type="button" className="btn-sm flex-container content-center" href="https://github.com/cbarkr/FlixList" target="_blank" rel="noreferrer" title="FlixList Link" variant="outline-light">
                                <AiFillGithub title="GitHub" size={25}/>
                            </Button>
                        </div>
                        <img className="project-image image-margin" tabIndex="-1" src={FlixListImg} alt="FlixList"/>
                        <span className="subheading comment-alt">{'//'}Description</span>
                        <p>Social movie rating and review site</p>

                        <span className="subheading comment-alt">{'//'}Responsibilites</span>
                        <p>Designing and creating mockups for each view</p>
                        <p>Producing UI and front end components - navigation, profile pages, user searching, validation errors</p>
                        
                        <span className="subheading comment-alt">{'//'}Specs</span>
                        <p>Front End - ReactJS, Bootstrap</p>
                        <p>Back End - MongoDB, NodeJS</p>
                        <p>Other Ends - RapidAPI Movie Database API</p>                    
                    </div>
                </section>
            </div>
        )
    }
}

export default FlixList;