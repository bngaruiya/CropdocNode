import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBListGroup,
  MDBContainer,
} from "mdbreact";
import "./Confirm.css";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
        businessName,
        profileStatement,
        businessType,
        location,
        phoneNumber,
        email,
        facebookPage,
      },
    } = this.props;
    return (
      <MDBContainer id="wrapper" className="d-flex justify-content-center">
        <MDBListGroup style={{ width: "22rem" }}>
          <MDBCard className="card">
            <MDBCardBody>
              <MDBCardTitle>Business Name</MDBCardTitle>
              <MDBCardText>{businessName}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="card">
            <MDBCardBody>
              <MDBCardTitle>Profile Statement</MDBCardTitle>
              <MDBCardText>{profileStatement}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="card">
            <MDBCardBody>
              <MDBCardTitle>Business Type</MDBCardTitle>
              <MDBCardText>{businessType}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="card">
            <MDBCardBody>
              <MDBCardTitle>Location</MDBCardTitle>
              <MDBCardText>{location}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="card">
            <MDBCardBody>
              <MDBCardTitle>Business Phone Number</MDBCardTitle>
              <MDBCardText>{phoneNumber}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="card">
            <MDBCardBody>
              <MDBCardTitle>Business Email Address</MDBCardTitle>
              <MDBCardText>{email}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="card">
            <MDBCardBody>
              <MDBCardTitle>Facebook Profile Page</MDBCardTitle>
              <MDBCardText>{facebookPage}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center py-4 mt-3">
            <MDBBtn color="green" type="button" onClick={this.continue}>
              Continue
            </MDBBtn>
            <MDBBtn color="orange" type="button" onClick={this.back}>
              Back
            </MDBBtn>
          </div>
        </MDBListGroup>
      </MDBContainer>
    );
  }
}

export default Confirm;
