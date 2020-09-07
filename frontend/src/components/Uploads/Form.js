import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { MDBBtn, MDBIcon } from "mdbreact";
import { addPrediction } from "../../actions/predictions";

export class Form extends Component {
  state = {
    image: "",
    prediction: "",
  };

  static propTypes = {
    addPrediction: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    switch (e.target.name) {
      case "image":
        this.setState({ image: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  getPrediction = () => {
    console.log("Predictor Called");
    const { image } = this.state;
    let form = new FormData();
    form.append("image", image);
    axios
      .post("http://127.0.0.1:5000/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        this.setState({ prediction: res.data["prediction"] });
        console.log("Prediction Generated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.image !== this.state.image) {
      this.getPrediction();
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { image, prediction } = this.state;
    let formData = new FormData();
    formData.append("prediction", prediction);
    formData.append("image", image);
    this.props.addPrediction(formData);
  };

  render() {
    // const { image } = this.state;
    return (
      <div>
        <input
          style={{ display: "none" }}
          type='file'
          name='image'
          onChange={this.onChange}
          ref={(fileInput) => (this.fileInput = fileInput)}
          required
        />
        <div className='btn-toolbar'>
          <MDBBtn color='purple' onClick={() => this.fileInput.click()}>
            <MDBIcon style={{ marginRight: "5px" }} icon='upload' />
            Pick a File
          </MDBBtn>
          <MDBBtn color='success' type='button' onClick={this.onSubmit}>
            <MDBIcon style={{ marginRight: "5px" }} icon='cloud' />
            Upload
          </MDBBtn>
        </div>
      </div>
    );
  }
}

export default connect(null, { addPrediction })(Form);
