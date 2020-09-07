import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBModalFooter,
} from "mdbreact";

import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import "./Register.css";

const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === "") {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  return isValid;
};

const regExp = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    isError: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
    },
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onChange = (e) => {
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "firstName":
        isError.name = value.length < 1 ? "Atleast 4 characaters required" : "";
        break;
      case "lastName":
        isError.name = value.length < 1 ? "Atleast 4 characaters required" : "";
        break;
      case "email":
        isError.email = regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "password":
        isError.password =
          value.length < 6 ? "Atleast 6 characaters required" : "";
        break;
      case "password2":
        isError.password2 =
          value === this.state.password ? "" : "Passwords Need to Match";
        break;
      default:
        break;
    }
    this.setState({
      isError,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      const { firstName, lastName, email, password } = this.state;
      const newUser = {
        firstName,
        lastName,
        email,
        password,
      };
      this.props.register(newUser);
    } else {
      console.log("Register form is not valid");
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    const {
      firstName,
      lastName,
      email,
      password,
      password2,
      isError,
    } = this.state;
    return (
      <MDBContainer id='wrapper' className='d-flex justify-content-center'>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody className='mx-4'>
                <div className='text-center'>
                  <h3 className='green-text mb-5'>
                    <strong>Sign Up</strong>
                  </h3>
                </div>
                <div>
                  <MDBInput
                    label='First Name'
                    group
                    className={
                      isError.firstName.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    type='text'
                    validate
                    name='firstName'
                    value={firstName}
                    onChange={this.onChange}
                  />
                  {isError.firstName.length > 0 && (
                    <span className='invalid-feedback'>
                      {isError.firstName}
                    </span>
                  )}
                </div>
                <div>
                  <MDBInput
                    label='Last Name'
                    group
                    className={
                      isError.email.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    type='text'
                    validate
                    name='lastName'
                    value={lastName}
                    onChange={this.onChange}
                  />
                  {isError.lastName.length > 0 && (
                    <span className='invalid-feedback'>{isError.lastName}</span>
                  )}
                </div>
                <div>
                  <MDBInput
                    label='Email'
                    group
                    className={
                      isError.email.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    type='email'
                    validate
                    name='email'
                    value={email}
                    onChange={this.onChange}
                  />
                  {isError.email.length > 0 && (
                    <span className='invalid-feedback'>{isError.email}</span>
                  )}
                </div>
                <div>
                  <MDBInput
                    label='Password'
                    group
                    className={
                      isError.password.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    type='password'
                    validate
                    containerClass='mb-0'
                    name='password'
                    value={password}
                    onChange={this.onChange}
                  />
                  {isError.password.length > 0 && (
                    <span className='invalid-feedback'>{isError.password}</span>
                  )}
                </div>
                <div>
                  <MDBInput
                    label='Confirm Password'
                    group
                    className={
                      isError.password2.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    type='password'
                    validate
                    containerClass='mb-0'
                    name='password2'
                    value={password2}
                    onChange={this.onChange}
                  />
                  {isError.password2.length > 0 && (
                    <span className='invalid-feedback'>
                      {isError.password2}
                    </span>
                  )}
                </div>
                <p className='font-small green-text d-flex justify-content-end pb-3'>
                  Forgot
                  <a href='#!' className='green-text ml-1'>
                    Password?
                  </a>
                </p>
                <div className='text-center mb-3'>
                  <MDBBtn
                    type='submit'
                    gradient='purple'
                    rounded
                    onClick={this.onSubmit}
                    className='btn-block z-depth-1a'
                  >
                    Sign Up
                  </MDBBtn>
                </div>
                <p className='font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2'>
                  or Sign Up with:
                </p>
                <div className='row my-3 d-flex justify-content-center'>
                  <MDBBtn
                    type='button'
                    color='white'
                    rounded
                    className='mr-md-3 z-depth-1a'
                  >
                    <MDBIcon
                      fab
                      icon='facebook-f'
                      className='purple-text text-center'
                    />
                  </MDBBtn>
                  <MDBBtn
                    type='button'
                    color='white'
                    rounded
                    className='mr-md-3 z-depth-1a'
                  >
                    <MDBIcon fab icon='twitter' className='purple-text' />
                  </MDBBtn>
                  <MDBBtn
                    type='button'
                    color='white'
                    rounded
                    className='z-depth-1a'
                  >
                    <MDBIcon fab icon='google-plus-g' className='purple-text' />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className='mx-5 pt-3 mb-1'>
                <p className='font-small grey-text d-flex justify-content-end'>
                  Have an account?
                  <Link className='green-text ml-1' to='/login'>
                    Sign In
                  </Link>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
