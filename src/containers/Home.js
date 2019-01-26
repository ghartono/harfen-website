import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col } from 'react-flexbox-grid';

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

  generatePicture() {
    return (
      <img alt="img" className="photo" src="/design-4.png"></img>
    );
  }

  render() {
    return (
      <div className="Home">
      <Grid fluid>
      <Row>
        <Col lgOffset={1} lg={11}>
          {this.generatePicture()}
        </Col>
      </Row>

      </Grid>
      </div>
    );
  }
}