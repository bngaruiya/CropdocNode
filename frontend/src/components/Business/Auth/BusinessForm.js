import React, { Component } from "react";
import BusinessDetails from "./BusinessDetails";
import Contacts from "./Contacts";
import Confirm from "./Confirm";
import Success from "./Success";

export class BusinessForm extends Component {
  state = {
    step: 1,
    businessName: "",
    profileStatement: "",
    businessType: "",
    location: "",
    phoneNumber: "",
    email: "",
    facebookPage: "",
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle field Change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      businessName,
      profileStatement,
      businessType,
      location,
      phoneNumber,
      email,
      facebookPage,
    } = this.state;
    const values = {
      businessName,
      profileStatement,
      businessType,
      location,
      phoneNumber,
      email,
      facebookPage,
    };

    switch (step) {
      case 1:
        return (
          <BusinessDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Contacts
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        console.log("MultiStep form");
    }

    return <div></div>;
  }
}

export default BusinessForm;
