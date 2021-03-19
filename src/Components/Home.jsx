import React from 'react';
import '.././App.css';

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <section className="intro">
                    <h3>Intro</h3>
                    <h5>//Cool stuff goes here</h5>
                </section>
                <section className="projects">
                    <h3>Projects</h3>
                    <h5>//In progress</h5>
                </section>
                <section className="interests">
                    <h3>Interests</h3>
                    <h5>Art</h5>
                    <h5>Outdoors</h5>
                </section>
                <section className="temp">
                    <h1>temp h1</h1>
                    <h2>temp h2</h2>
                    <h3>temp h3</h3>
                    <h4>temp h4</h4>
                    <h5>tmep h5</h5>
                </section>
            </div>
        )
    }
}

export default Home;