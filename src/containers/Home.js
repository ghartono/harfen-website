import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col } from 'react-flexbox-grid';
import ModalImage from 'react-modal-image'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      project: []
    };
  }
  async componentDidMount() {
   if (!this.props.isAuthenticated) {
     return;
   }
 
   try {
     const notes = await this.notes();
     this.setState({ notes });
   } catch (e) {
     alert(e);
   }
 
   this.setState({ isLoading: false });
 }
 
 notes() {
   return API.get("notes", "/project");
 }

 renderNotesList(notes) {
   return [{}].concat(notes).map(
     (note, i) =>
       i !== 0
         ? <LinkContainer
             key={note.noteId}
             to={`/project/${note.noteId}`}
           >
             <ListGroupItem header={note.content.trim().split("\n")[0]}>
               {"Created: " + new Date(note.createdAt).toLocaleString()}
             </ListGroupItem>
           </LinkContainer>
         : <LinkContainer
             key="new"
             to="/project/new"
           >
             <ListGroupItem>
               <h4>
                 <b>{"\uFF0B"}</b> Create a new note
               </h4>
             </ListGroupItem>
           </LinkContainer>
   );
 }

  renderLander() {
    return (
      <div className="lander">
        <h1>Harfen</h1>
        <p>Design & Architecture</p>
      </div>
    );
  }

  renderNothing() {
   return;
  }

  renderNotes() {
    return (
      <ListGroup>
      {!this.state.isLoading && this.renderNotesList(this.state.notes)}
    </ListGroup>
    );
  }

  render() {
    return (
      <div className="Home">
        <Grid fluid>
        <Row>
        <Col lg={11}>
        <PageHeader>Projects</PageHeader>
        <p>This page is under construction. Sorry for the inconvenience.</p>
        <p>The plan for this page is to list and describe all the current and finished projects by Harfen Design & Architecture. </p>
        </Col>
        </Row>
        </Grid>
        <Grid fluid className="mobile-view">
        <Row>
        <Col lg={4}>
           <img alt="img" class="photo" src="/design-1.png"></img>
        </Col>
        <Col lg={4}>
            <img alt="img" class="photo" src="/design-2.png"></img>
         </Col>
         <Col lg={4}>
            <img alt="img" class="photo" src="/design-3.png"></img>
         </Col>
        </Row>
        <Row>
        <Col lg={4}>
           <img alt="img" class="photo" src="/design-4.png"></img>
        </Col>
        <Col lg={4}>
            <img alt="img" class="photo" src="/design-5.png"></img>
        </Col>
        </Row>
        </Grid>
        <Grid fluid className="desktop-view">
        <Row>
        <Col lg={4}>
           <ModalImage small={'/design-1.png'} large={'/design-1.png'} alt="Laksana Business Park Office living room" />
        </Col>
        <Col lg={4}>
            <ModalImage small={'/design-2.png'} large={'/design-2.png'} alt="Laksana Business Park Office living room" />
         </Col>
         <Col lg={4}>
            <ModalImage small={'/design-3.png'} large={'/design-3.png'} alt="Laksana Business Park Office living room" />
         </Col>
        </Row>
        <Row>
        <Col lgOffset={2} lg={4}>
            <ModalImage small={'/design-4.png'} large={'/design-4.png'} alt="Laksana Business Park Office Meeting Room" />
        </Col>
        <Col lg={4}>
            <ModalImage small={'/design-5.png'} large={'/design-5.png'} alt="Laksana Business Park Office Wine Rack" />
        </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}