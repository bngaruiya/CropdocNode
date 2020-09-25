import React, { Fragment } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Header.css";
import { logout } from "../../actions/auth";
import Form from "../Uploads/Form";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact";

const Logo = require("../../assets/cropdocicon.ico");

class Header extends React.Component {
  state = {
    collapsed: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Fragment>
        <MDBNavItem>
          <MDBNavLink className="purple-text" to="/uploads">
            <MDBIcon icon="chalkboard-teacher" className="purple-text mr-1" />
            My Uploads
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            onClick={this.props.logout}
            className="purple-text"
            to="/logout"
          >
            <MDBIcon icon="user-lock" className="purple-text" /> Logout
          </MDBNavLink>
        </MDBNavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <MDBNavItem>
          <MDBNavLink to="/login" className="purple-text">
            <MDBIcon icon="user-check" className="purple-text" /> Login
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/register" className="purple-text">
            <MDBIcon icon="user-plus" className="purple-text" />
            Register
          </MDBNavLink>
        </MDBNavItem>
      </Fragment>
    );

    const guestTagline = (
      <div className="tag">
        <h6 className="mb-4 white-text">
          CropDoc helps farmers better diagnose their plants for pests and
          diseses. Sign up for free today.
        </h6>
        <MDBBtn color="purple">
          <MDBNavLink to="/register" className="white-text">
            <MDBIcon color="white" icon="user-plus" /> Sign Up
          </MDBNavLink>
        </MDBBtn>
        <p className="sm whitee-text">
          Have an account?
          <a href="/login" color="purple-text">
            Login
          </a>
        </p>
      </div>
    );

    const authTagline = (
      <div className="tag">
        <h6 className="mb-4 white-text ">Get Started Right Here!!</h6>
        <Form />
      </div>
    );

    const { collapsed } = this.state;
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="wrapper">
        <div>
          <MDBNavbar
            color="white"
            dark
            expand="md"
            fixed="top"
            scrolling
            transparent
          >
            <MDBContainer>
              <MDBNavbarBrand
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <MDBNavLink to="/">
                  <img src={Logo} alt="MDB" className="white-text" />
                </MDBNavLink>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                className="purple"
                onClick={this.handleTogglerClick}
              />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav left></MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="/" className="purple-text">
                      <MDBIcon className="purple-text" icon="home">
                        Home
                      </MDBIcon>
                    </MDBNavLink>
                  </MDBNavItem>
                  {isAuthenticated ? authLinks : guestLinks}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
        </div>
        <MDBView className="bg-img">
          <MDBMask className="rgba-black-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%", paddingTop: "4rem" }}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                  CropDoc
                </h1>
                <hr className="hr-light my-4" />
                <div className="authlinks">
                  {isAuthenticated ? authTagline : guestTagline}
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
