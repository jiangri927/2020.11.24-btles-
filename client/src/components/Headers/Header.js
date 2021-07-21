import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
// core components

function IndexHeader() {
  return (
    <div className="landing-page-header">
      <Container>
        <Navbar className="bg-transparent" expand="lg">
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            HOME
          </NavbarBrand>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
            data-target="#navbar-menu"
            data-toggle="collapse"
            id="navbar-menu"
            type="button"
          >
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-menu">
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  NEWS
                </NavLink>
              </NavItem>

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
                  ECOSYSTEM
                </DropdownToggle>
                <DropdownMenu
                  aria-labelledby="dropdownMenuButton"
                  className="dropdown-info"
                >
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Cryp-Spider AI
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Bitles Academy
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    BTL Explorer
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    BitleStore
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    BitLEX
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
                  DOCUMENTATION
                </DropdownToggle>
                <DropdownMenu
                  aria-labelledby="dropdownMenuButton"
                  className="dropdown-info"
                >
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Company Registration
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Terms & Condiations
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Privacy & Cookie Policy
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Risk Disclaimer
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Business Presentation
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Affliate Plan
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  BOUNTY
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default IndexHeader;
