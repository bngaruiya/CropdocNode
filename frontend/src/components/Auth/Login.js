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
  MDBModalFooter,
  MDBCardBody,
} from "mdbreact";

import { login } from "../../actions/auth";
import "./Login.css";

const regExp = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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

class Login extends Component {
  state = {
    email: "",
    password: "",
    isError: {
      email: "",
      password: "",
    },
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onChange = (e) => {
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "email":
        isError.email = regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "password":
        isError.password =
          value.length < 6 ? "Atleast 6 characaters required" : "";
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
      console.log(this.state);
      this.props.login(this.state.email, this.state.password);
    } else {
      console.log("Form is invalid!");
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    const { email, password, isError } = this.state;
    return (
      <MDBContainer id='wrapper' className='d-flex justify-content-center'>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody className='mx-4'>
                <div className='text-center'>
                  <h3 className='green-text mb-5'>
                    <strong>Sign in</strong>
                  </h3>
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
                    Sign in
                  </MDBBtn>
                </div>
                <p className='font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2'>
                  or Sign in with:
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
                  Not a member?
                  <Link className='green-text ml-1' to='/register'>
                    Sign Up
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

export default connect(mapStateToProps, { login })(Login);
