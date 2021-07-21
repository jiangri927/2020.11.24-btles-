/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, Col } from "reactstrap";

function Footer() {
  return (
    <footer className="my-footer">
      <Container>
        <Row>
          <Col md="6">
            <div className="footer-right">
              <img src={require("assets/img/landing/footer-logo.png")}></img>
              <h6 className="footer-long-arrow"></h6>
              <h6 className="footer-comment">
                This website is operated by Bitles Limited, registered in the
                United Kingdom under number 11975430 (registered address: 27 Old
                Gloucester Street, London, United Kingdom, WC1N 3AX)
              </h6>
            </div>
          </Col>
          <Col md="2">
            <h5 className="footer-list-title">Bitles</h5>
            <a href="javascript:void(0)" className="footer-list-link">
              Roadmap
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              Presentation
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              Affiliate Plan
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              Start Using
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              Log In
            </a>
          </Col>
          <Col md="2">
            <h5 className="footer-list-title">Ecosystem</h5>
            <a href="javascript:void(0)" className="footer-list-link">
              Cryp-Spider AI
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              Biltes Academy
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              BTL Explorer
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              BitleStore
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              BitLEX
            </a>
          </Col>
          <Col md="2">
            <h5 className="footer-list-title">Documentation</h5>
            <a href="javascript:void(0)" className="footer-list-link">
              Company Registration
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              Terms & Conditions
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              Privacy & Cookie Policy
            </a>
            <a href="javascript:void(0)" className="footer-list-link">
              Risk Disclaimer
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
