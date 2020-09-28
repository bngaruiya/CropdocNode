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

class BusinessDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
                      Enter Your Business Details
                    </p>
                    <div className="grey-text">
                      <MDBInput
                        label="Business Name"
                        icon="home"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="firstName"
                        onChange={handleChange("businessName")}
                        value={values.businessName}
                      />
                      <MDBInput
                        label="Business Type"
                        icon="align-justify"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={handleChange("businessType")}
                        value={values.businessType}
                      />
                      <MDBInput
                        type="textarea"
                        rows="5"
                        label="Business Profile Statement"
                        icon="audio-description"
                        onChange={handleChange("profileStatement")}
                        value={values.profileStatement}
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn
                        color="purple"
                        type="button"
                        onClick={this.continue}
                      >
                        Continue
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

export default BusinessDetails;
