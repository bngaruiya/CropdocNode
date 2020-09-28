import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Success.css";

export class Success extends Component {
  render() {
    return (
      <MDBContainer className="product-container">
        <MDBRow>
          <MDBCol md="12" className="section">
            <h2 className="title">Thank you</h2>
            <h5 className="description subtitle">
              Congratulations for registering your business and Welcome onboard.
              We will be sending you an email with instructions soon.
            </h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Success;
