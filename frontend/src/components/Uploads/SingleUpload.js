import React, { Component } from "react";
import { connect } from "react-redux";

class SingleUpload extends Component {
  render() {
    const { prediction } = this.props;
    return (
      <div>
        <h4>{prediction.prediction}</h4>
      </div>
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
