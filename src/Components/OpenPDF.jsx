import React from 'react';
import Pdf from './Assets/Images/CallumBarker-Resume.pdf';
import {Button} from 'react-bootstrap';
import { Document, Page, pdfjs } from "react-pdf";
import ScrollToTop from '../ScrollToTop';

class OpenPDF extends React.Component {
  state = {numPages: null, pageNumber: 1};
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  };
  onDocumentLoadSuccess = ({numPages}) => {
      this.setState({numPages});
  };
  prevPage = () => {
      if (this.state.pageNumber > 1){
          this.setState(state => ({ pageNumber: this.state.pageNumber - 1 })); 
      }
  };
  nextPage = () => {
      if (this.state.pageNumber < this.state.numPages){
          this.setState(state => ({ pageNumber: this.state.pageNumber + 1}));    
      }
  }

  render() {
    const {numPages, pageNumber} = this.state;
    return (
        <div className="document-pdf">
            <ScrollToTop>
                <Document file={Pdf} onLoadSuccess={this.onDocumentLoadSuccess} renderAnnotationLayer="false">
                    <Page pageNumber={pageNumber} width={600} />
                </Document>
                <div className="document-nav">
                    <div className="pdf-nav-buttons">
                        <Button onClick={this.prevPage} variant="outline-light">Prev</Button>
                        <Button onClick={this.nextPage} variant="outline-light">Next</Button>
                    </div>
                    <div className="pdf-nav-pages">
                        <p>{pageNumber} of {numPages}</p>
                    </div>
                </div>
            </ScrollToTop>
        </div>
    );

  }
}

export default OpenPDF;