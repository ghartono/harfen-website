import React, { Component } from "react";
import "./About.css";
import { PageHeader } from "react-bootstrap";
import { Grid, Row, Col } from 'react-flexbox-grid';


export default class About extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
   }


  render() {
    return (
      <div className="About">
        <Grid fluid>
        <Row>
        <Col lg={11}>
        <PageHeader>About Us</PageHeader>
        <div className="description">
        <p>Harfen is an architecture firm founded by Hartono Susanto and Fenny Susianti Sosilo, 
        known in actualizing design concepts while respecting conventional and traditional design philosophies.
        Our strength is combining both requirements and unique design for each client. 
        While the firm is based in Jakarta, projects expand throughout Indonesia, including Java, Bali, Medan, and other cities.
        </p>
        <p>1979. &nbsp;Architect at Taruma Nagara Jakarta</p>
        <p>1998. &nbsp;Founded Harfen Design & Architecture</p>
        </div>
        </Col>
        </Row>
        </Grid>
        <Grid fluid>
        <Row>
        <Col lg={3}>
           <img alt="img" class="harfen-photo" src="/harfen-photo.png"></img>
        </Col>
        <Col lg={4}>
        <div className="philosopy">
         <h3>Our Philosophy</h3>
         <p>One of the most important factors in the success of Harfen has been the ability to provide architectural 
         services for a diverse range of clients in widely various sectors. </p>
         <p> Harfen operates on the philosophy that
         architecture is not merely about designing beautiful and impressive buildings; it is about creating physical 
         environments that provides maximum added value for clients and improves the lives of end users.
         </p>
         </div>
         </Col>
         <Col lg={4}>
        <div className="mission">
         <h3>Our Mission</h3>
         <p>By working with clients to understand their facility needs, budget requirements, site conditions and 
         organizational goals, rather than providing ready-made, conventional solutions, Harfen is able to adapt to 
         the changing and developing needs of clients, regardless of the nature of their project. </p><p>
         In this fashion, the Company has been able to prosper in the rapid changing environment that has affected 
         building industry in Indonesia and neighboring countries over the recent years.
         </p>
        </div>
        </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}