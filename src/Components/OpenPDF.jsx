import React from 'react';
import {Button} from 'react-bootstrap';
import Pdf from './Assets/Images/CallumBarker-Resume.pdf';

class OpenPDF extends React.Component {

  render() {
    return (
        <div>
            <a href={Pdf} target="_blank" rel="noreferrer">
                <Button variant="outline-light">Surprise</Button>
            </a>
        </div>
    );

  }
}

export default OpenPDF;