import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import "./ContactUs.css";

export class ContactUs extends Component {
  render() {
    return (
      <div>
        <MDBContainer className='product-container'>
          <MDBRow>
            <MDBCol className='section'>
              <h2 className='title'>Talk to us</h2>
              <h5 className='description subtitle'>
                We would love to hear from you. Drop us a message below.
              </h5>
            </MDBCol>
          </MDBRow>
          <div className='card-container'>
            <MDBCard className='card-section'>
              <MDBRow>
                <MDBCol md='6' className='purple-text'>
                  <MDBInput
                    label='First Name'
                    icon='user'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                  />
                </MDBCol>
                <MDBCol md='6' className='purple-text'>
                  <MDBInput
                    label='Last Name'
                    icon='user'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='purple-text'>
                  <MDBInput
                    label='Your Email'
                    icon='envelope'
                    group
                    type='email'
                    validate
                    error='wrong'
                    success='right'
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='purple-text'>
                  <MDBInput
                    type='textarea'
                    rows='2'
                    label='Your message'
                    icon='pencil-alt'
                  />
                </MDBCol>
              </MDBRow>
              <div className='text-center py-4 mt-3'>
                <MDBBtn color='green' type='submit'>
                  Send Message
                </MDBBtn>
              </div>
            </MDBCard>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default ContactUs;
