import React, { Component } from "react";
import {
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import "./BusinessForm.css";

class Contacts extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MDBContainer id="wrapper" className="d-flex justify-content-center">
          <MDBRow>
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">
                      Enter Your Business Contact Information
                    </p>
                    <div className="grey-text">
                      <MDBInput
                        label="Enter Your Location"
                        icon="map-marker-alt"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={handleChange("location")}
                        value={values.location}
                      />
                      <MDBInput
                        label="Enter the Business Phone Number"
                        icon="phone-alt"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={handleChange("phoneNumber")}
                        value={values.phoneNumber}
                      />
                      <MDBInput
                        label="Enter the Business Email Address"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={handleChange("email")}
                        value={values.email}
                      />
                      <MDBInput
                        type="textarea"
                        rows="2"
                        label="Enter your Facebook Page Url"
                        icon="facebook-square"
                        onChange={handleChange("facebookPage")}
                        value={values.facebookPage}
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn
                        color="green"
                        type="button"
                        onClick={this.continue}
                      >
                        Continue
                      </MDBBtn>
                      <MDBBtn color="orange" type="button" onClick={this.back}>
                        Back
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Contacts;
