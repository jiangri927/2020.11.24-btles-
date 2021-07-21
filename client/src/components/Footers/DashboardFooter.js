
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DashboardFooter() {
  return (
    <footer className="footer d-footer">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="/" target="_blank">
                  <i className="fa fa-telegram"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa fa-google"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}Bitles Limited. All Rights Reserved.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DashboardFooter;
