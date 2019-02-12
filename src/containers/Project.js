import React, { Component } from "react";
import "./Project.css";
import { PageHeader } from "react-bootstrap";
import { Grid, Row, Col } from 'react-flexbox-grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

var imageNum = 29;


export default class About extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
   }

   outputImages = () => {
      let oImage = []

      for(let i = 1; i <= imageNum; i++)
      {
         oImage.push(<div className="pics"><img alt="architect_design" src={"projects/design-"+i+".JPG"} /></div>)
      }

      return oImage;
   }

  render() {
    return (
        <div className="Project">
        <Grid fluid>
        <Row>
        <Col lg={11}>
        <PageHeader>Projects</PageHeader>
        </Col>
         <Col lgOffset={2} lg={7} className="desktop-view">
         <Carousel showIndicators={false} showThumbs={false} autoPlay infiniteLoop >
         {this.outputImages()}
         </Carousel>
         </Col>
        </Row>
        <div className="mobile-view">
           {this.outputImages()}
        </div>
        </Grid>
      </div>
    );
  }
}