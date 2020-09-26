import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Map from "../Map/Map";

class SingleUpload extends Component {
  render() {
    const { prediction } = this.props;
    return (
      <Fragment>
        <Map />
        <div>
          <h4>{prediction.prediction}</h4>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.upload_id;
  return {
    prediction: state.predictions.predictions.find(
      (prediction) => prediction._id === id
    ),
  };
};

export default connect(mapStateToProps)(SingleUpload);
