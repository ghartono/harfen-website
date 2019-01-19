import React, { Component } from "react";
import "./Contact.css";
import { PageHeader, Glyphicon } from "react-bootstrap";
import { Grid } from 'react-flexbox-grid';


export default class Contact extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
   }

   

  render() {
    return (
      <div className="Contact">
      <Grid fluid>

        <PageHeader>Contact Us</PageHeader>
        <h2><Glyphicon glyph="earphone" /> (+62) 812 8315 8228 </h2>
        <h2><a href="https://www.google.com/maps/place/Harfen+Design+%26+Architecture/@-6.1255904,106.7433704,17z/data=!3m1!4b1!4m5!3m4!1s0x2e6a1dd3129ed4bf:0xd6578b3bd7710ba6!8m2!3d-6.1255904!4d106.7455591?hl=en-CA"><Glyphicon glyph="map-marker" />Sentra Industri Terpadu Tahap 1, Blok D2 No 1 <br/>Jl. Pantai Indah Barat II, Pantai Indah Kapuk <Glyphicon glyph="new-window" /></a></h2>
        <h2><a href="mailto:harfendesign@hotmail.com"><Glyphicon glyph="envelope"/> harfendesign@hotmail.com</a></h2>

      </Grid>
      </div>
    );
  }
}