import React from "react";

// reactstrap components
import { Button, Input, Container, Row, Col } from "reactstrap";

// core components
import TopHeader from "components/Navbars/TopHeader.js";
import Header from "components/Headers/Header.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Footer from "components/Footers/Footer.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <TopHeader />
      <Header />
      <div className="main">
        <div className="section1">
          <Container>
            <Row>
              <Col md="8">
                <div className="section1-left">
                  <div className="section1-top">
                    <img src={require("assets/img/landing/btl-rate.png")}></img>
                    <h6>BTL: $ 0.450</h6>
                    <h6 className="section1-top-red">Day-0.000 %</h6>
                    <h6 className="section1-top-blue">Total + 125.000 %</h6>
                  </div>
                  <h2 className="section1-title">
                    Earn and multiply your crypto in a fully automated mode
                  </h2>
                  <h5 className="section1-desc">
                    Bitles lets you hold your crypto and receive BTL tokens with
                    a profit from 30% per month.
                  </h5>
                  <div className="section1-botton">
                    <Button className="section1-action">Sign Up</Button>
                    <a href="javascript:void(0)" className="section1-play">
                      <i className="fa fa-play"></i>HOW IT WORKS
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="section1-right"></div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section2">
          <Container>
            <Row>
              <Col md="8">
                <div className="section2-left">
                  <h6 className="section2-desc">
                    Bitles offers its users access to the Cryp-Spider
                    algo-trading system via our proprietary Savings Plans. After
                    activating any of our savings plan, you will enjoy daily
                    profits ranging from 0.45% to 2.5% depending on the savings
                    plan you choose. Click on the button and find our Profit
                    Calculator.
                  </h6>
                </div>
              </Col>
              <Col md="4">
                <div className="section2-right">
                  <Button className="profit-calc">profit calculator</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section3">
          <Container>
            <Row>
              <Col md="6">
                <div className="section3-left">
                  <img src={require("assets/img/landing/crypspider.png")}></img>
                </div>
              </Col>
              <Col md="6">
                <div className="section3-right">
                  <h2 className="section3-right-top-title">Cryp-Spider AI</h2>
                  <h5 className="section3-right-title">
                    Proprietary Algo-Trading System
                  </h5>
                  <h5 className="section3-right-desc">
                    Activate Cryp-Spider trading bot and receive the daily
                    returns 0.45% to 2.5% in a fully automated mode.
                  </h5>
                  <Button className="section3-right-action">
                    Start Using <i className="fa fa-long-arrow-right"></i>
                  </Button>
                  <img
                    src={require("assets/img/landing/crypspider-icon.png")}
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section3 section4">
          <Container>
            <Row>
              <Col md="6">
                <div className="section3-right">
                  <h2 className="section3-right-top-title">Bitles Academy</h2>
                  <h5 className="section3-right-title">
                    Platform User Training Center
                  </h5>
                  <h5 className="section3-right-desc">
                    Take our effective 7-day training “Find Your Edge as a
                    Beginning Networker” and start earning from $10,000 per
                    month, enjoying an extra-profitable business with Bitles.
                  </h5>
                  <Button className="section3-right-action">
                    Go to Bitles Academy{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </Button>
                  <img
                    src={require("assets/img/landing/academy-icon.png")}
                  ></img>
                </div>
              </Col>
              <Col md="6">
                <div className="section3-left">
                  <img src={require("assets/img/landing/academy.png")}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section5">
          <h4 className="section5-title">
            Subscribe To Our Effective 7-Day Training “Find Your Edge as a
            Beginning Networker”
          </h4>
          <div className="section5-subscribe-box">
            <label className="email-box">
              <i className="fa fa-envelope"></i>
              <Input placeholder="Email Address"></Input>
            </label>
            <Button className="section5-subscribe-button">Subscribe</Button>
          </div>
          <h6 className="section5-comment">
            Your information will be kept confidential and we will never spam
            you.
          </h6>
        </div>
        <div className="section3">
          <Container>
            <Row>
              <Col md="6">
                <div className="section3-left">
                  <img src={require("assets/img/landing/token.png")}></img>
                </div>
              </Col>
              <Col md="6">
                <div className="section3-right right-other">
                  <h2 className="section3-right-top-title">BTL Token</h2>
                  <h5 className="section3-right-title">
                    Internal Token With A Monthly Increase from 10%
                  </h5>
                  <h5 className="section3-right-desc">
                    Go to <a href=" www.btlexplorer.eu"> www.btlexplorer.eu </a>{" "}
                    and track the BTL price against other crypto in real time.
                    You can also see the number of transactions in the BTL
                    network and the number of new BTL holders for the last 15
                    days.
                  </h5>
                  <Button className="section3-right-action">
                    Go to BTL Explorer{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </Button>
                  <img src={require("assets/img/landing/token-icon.png")}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section3 section4">
          <Container>
            <Row>
              <Col md="6">
                <div className="section3-right right-other">
                  <h2 className="section3-right-top-title">BitleStore</h2>
                  <h5 className="section3-right-title">
                    Branded Clothing And Accessories Store
                  </h5>
                  <h5 className="section3-right-desc">
                    Here you can buy clothes and accessories of world brands, as
                    well as our exclusive products with the Bitles logo. Order
                    online, pay with BTL tokens, and your purchase will be
                    delivered FREE of charge in just a matter of days.
                  </h5>
                  <Button className="section3-right-action">
                    Go to BTLStore
                    <i className="fa fa-long-arrow-right"></i>
                  </Button>
                  <img src={require("assets/img/landing/store-icon.png")}></img>
                </div>
              </Col>
              <Col md="6">
                <div className="section3-left">
                  <img src={require("assets/img/landing/store.png")}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section3 section4">
          <Container>
            <Row>
              <Col md="6">
                <div className="section3-left">
                  <img src={require("assets/img/landing/bitlex.png")}></img>
                </div>
              </Col>
              <Col md="6">
                <div className="section3-right right-other">
                  <h2 className="section3-right-top-title">BitlEX</h2>
                  <h5 className="section3-right-title">
                    Instant Crypto Exchange
                  </h5>
                  <h5 className="section3-right-desc">
                    Instantly exchange Bitcoin and other cryptocurrencies in
                    your Bitles Account. The platform supports more than 15
                    exchange directions.
                  </h5>
                  <Button className="section3-right-action">
                    Go to BTL Explorer{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </Button>
                  <img
                    src={require("assets/img/landing/bitlex-icon.png")}
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="video-section">
          <Button className="video-section-play  video-play wow zoomIn  animated">
            <span className="play-1 play-wave"></span>
            <span className="play-2 play-wave"></span>
            <span className="play-3 play-wave"></span>
          </Button>
        </div>
        <div className="section-roadmap">
          <h2>Roadmap</h2>
          <h5 className="roadmap-comment-1">
            Want to Learn More About Our History and Future Plans?
          </h5>
          <h5 className="roadmap-comment-2">
            Check Out Our Roadmap (August 2017 » July 2021)
          </h5>
          <Button className="roadmap-action">
            Learn More <i className="fa fa-long-arrow-right"></i>
          </Button>
          <img src={require("assets/img/landing/roadmap-image.png")}></img>
        </div>
        <div className="section-partnership section3">
          <Container>
            <Row>
              <Col md="6">
                <div className="section3-right right-other">
                  <h2 className="section3-right-top-title">Partnership</h2>
                  <h5 className="section3-right-desc">
                    We reward you for sharing information about Bitles with
                    others, so that they can connect to the Cryp-Spider trading
                    bot and become part of our growing ecosystem.
                  </h5>
                  <div className="download-box">
                    <Button className="section3-right-action download-action">
                      Learn More <i className="fa fa-download"></i>
                    </Button>
                    <h5 className="download-comment">
                      Donwload Our Affiliate PDF Presenation
                    </h5>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="section3-left">
                  <img src={require("assets/img/landing/token.png")}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="chat-bot">
          <p>Welcome back! Can I help you with anything?</p>
          <span className="chat-bot-image">
            <img src={require("assets/img/landing/chat-bot.png")}></img>
          </span>
        </div> */}
      </div>
      <Footer />
      <DemoFooter />
    </>
  );
}

export default LandingPage;
