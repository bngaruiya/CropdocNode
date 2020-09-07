import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <MDBContainer className='product-container'>
        <br />
        <MDBRow>
          <MDBCol md='12' className='section'>
            <h2 className='title'>Our Solution</h2>
            <h5 className='description subtitle'>
              Cropdoc empowers farmers around the world to quickly and
              accurately identify pests and diseases in their crops, and empower
              you with information about the disease so that you can avoid it in
              future. All this in three easy steps...
            </h5>
          </MDBCol>
        </MDBRow>
        <MDBRow className='section'>
          <MDBCol md='4'>
            <div className='title'>
              <MDBIcon className='blue-text' icon='upload' size='3x' />
              <h3 className='titlehead'>Upload Photo</h3>
            </div>
            <p className='description'>
              Take a photo of the plant you suspect might be infected or if it
              does not look healthy enough to you. Upload it to Cropdoc.
            </p>
          </MDBCol>
          <MDBCol md='4'>
            <div className='title'>
              <MDBIcon className='green-text' icon='tasks' size='3x' />
              <h3 className='titlehead'>Get Recommendations</h3>
            </div>
            <p className='description'>
              Should your crops be infected, Cropdoc sends you information on
              the disease. We will also recommend the best solutions and
              products to use to fight the infection.
            </p>
          </MDBCol>
          <MDBCol md='4'>
            <div className='title'>
              <MDBIcon className='purple-text' icon='directions' size='3x' />
              <h3 className='titlehead'>Talk to a local Agrovet</h3>
            </div>
            <p className='description infosection'>
              Cropdoc will also send you information on the best deals in your
              locality where you can obtain the solution or assistance.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Product;
