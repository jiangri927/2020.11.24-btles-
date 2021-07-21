import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
class DashboardHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }
 
  render() {
    return (
      <div className="d-header">
        <div className="d-header-left">
          <a href="/">
            <img src={require("assets/img/Dashboard/office-logo.png")}></img>
          </a>
          <div className="d-header-menu">
            <img src={require("assets/img/Dashboard/menu-icon.png")}></img>
          </div>
          <div className="d-header-lang">
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={(e) => e.preventDefault()}
                role="button"
              >
                <img src={require("assets/img/flags/en.png")}></img>
                English
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Chinese
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Japanese
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="d-header-theme ">
            <a href="/">
              {" "}
              <img src={require("assets/img/Dashboard/moon-white.png")}></img>
            </a>
          </div>
        </div>

        <div className="d-header-center">
          <div className="d-header-social">
            <a href="/">
              <img src={require("assets/img/Dashboard/review-icon.png")}></img>
            </a>
            <a href="/">
              <img src={require("assets/img/Dashboard/support-icon.png")}></img>
            </a>
            <a href="/">
              <img src={require("assets/img/Dashboard/bell-icon.png")}></img>
            </a>
          </div>
          <a href="/" className="d-header-trading airdrop">
            BTL Airdrop
          </a>
          <a href="/" className="d-header-trading">
            Trading Live!
          </a>
          <p className="header-help">Need Help?</p>
        </div>
        <div className="d-header-right">
          <div className="d-header-rank">
            <img src={require("assets/img/Dashboard/user.png")}></img>
          </div>
          <div className="d-header-user">
            <img src={require("assets/img/Dashboard/user-blue.png")}></img>
            <p>ID: 0031276</p>
          </div>
          <div className="d-header-logout ">
            <a href="/" onClick={this.props.logoutUser}>
              {" "}
              <img src={require("assets/img/Dashboard/logout-icon.png")}></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
DashboardHeader.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { logoutUser })(DashboardHeader);
