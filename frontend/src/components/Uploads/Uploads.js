import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPredictions } from "../../actions/predictions";
import { MDBRow, MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";

export class Uploads extends Component {
  static propTypes = {
    predictions: PropTypes.array.isRequired,
    getPredictions: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getPredictions();
  }

  render() {
    console.log(this.props);
    return (
      <div className="section">
        <h2 className="title">Recent User Uploads</h2>
        <MDBRow className="card-section">
          {this.props.predictions.map((prediction) => (
            <MDBCol
              key={prediction._id}
              lg="4"
              md="12"
              className="mb-lg-0 mb-4"
            >
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src={prediction.imageUrl}
                  alt="user upload"
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <p className="dark-grey-text">
                The photo indicates your crop might have a{" "}
                {prediction.prediction} infection.
              </p>
              <MDBBtn
                // onClick={this.props.deletePrediction.bind(this, prediction.id)}
                color="green"
                rounded
                size="md"
              >
                Read More...
              </MDBBtn>
              <MDBBtn
                // onClick={this.props.deletePrediction.bind(this, prediction.id)}
                color="pink"
                rounded
                size="md"
              >
                Delete
              </MDBBtn>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  predictions: state.predictions.predictions,
});

export default connect(mapStateToProps, { getPredictions })(Uploads);
