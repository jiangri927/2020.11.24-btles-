import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

// reactstrap components
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

function TopHeader(props) {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("navbar-transparent");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom" to="/" tag={Link}>
            <img
              alt="..."
              src={require("assets/img/logo.png")}
              className="red-logo"
            />
            <img
              alt="..."
              src={require("assets/img/landing/footer-logo.png")}
              className="white-logo"
            />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <div className="navbar-social">
            <Nav navbar>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <i className="fa fa-telegram" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <i className="fa fa-facebook" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <i className="fa fa-twitter" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <i className="fa fa-youtube" />
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="navbar-right">
            <NavLink to="/dashboard" tag={Link}>
              <Button className="back-office-button">
                <i className="fa fa-sign-in" />
                BACK OFFICE
              </Button>
            </NavLink>

            {props.auth.isAuthenticated === true ? (
              <NavLink>
                <Button
                  className="back-office-button"
                  onClick={() => {
                    props.logoutUser();
                  }}
                >
                  <i className="fa fa-sign-out" />
                  LOG OUT
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/register" tag={Link}>
                <Button className="reigister-button">
                  <i className="fa fa-user" />
                  REGISTER
                </Button>
              </NavLink>
            )}
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
        </Collapse>
      </Container>
    </Navbar>
  );
}
TopHeader.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser, logoutUser })(TopHeader);
