import React from 'react';
//import axios from 'axios';
import Amplify, {API} from 'aws-amplify';
import awsExports from "../aws-exports";
import Aos from 'aos';
import '../App.css';
import 'aos/dist/aos.css';

Amplify.configure(awsExports);
Aos.init({duration: 2000});

//var getUrl = window.location;
//var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
var myAPI = "ContactAPI";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        await API.post(myAPI, '/contact/send', {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
        .then((response) => {
            if (response.status === 200){
                alert("Message Sent");
                this.formReset()
            }
            else {
                alert("Message failed to send :(")
            }
        }, (err) => {
            console.log(err);
        });
    }

    /*
    handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(baseUrl + '/send', {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
        .then((response) => {
            if (response.status === 200){
                alert("Message Sent");
                this.formReset()
            }
            else {
                alert("Message failed to send :(")
            }
        }, (err) => {
            console.log(err);
        });
    }
    */

    formReset(){
        this.setState({name: '', email: '', message: ''})
    }

    onNameChange(e){
        this.setState({name: e.target.value})
    }

    onEmailChange(e){
        this.setState({email: e.target.value})
    }

    onMessageChange(e){
        this.setState({message: e.target.value})
    }

    render(){
        return(
            <div className="container">
                <div className="contact-form-email"  data-aos="fade-right">
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name" style={{color: "#2aa198"}}>Name</label>
                            <input type="text" className="form-control" placeholder="Firstname Lastname" onChange={this.onNameChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleEmail" style={{color: "#2aa198"}}>Email Address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="example@email.com" onChange={this.onEmailChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" style={{color: "#2aa198"}}>Message</label>
                            <textarea className="form-control" rows="5" placeholder="Message goes here!" onChange={this.onMessageChange.bind(this)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-light" style={{color: "#2aa198"}} onSubmit={this.handleSubmit.bind(this)}>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;