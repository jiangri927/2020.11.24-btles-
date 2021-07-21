import React from "react";

// reactstrap components
import { Button, Input, Container, Row, Col } from "reactstrap";

import DashboardFooter from "components/Footers/DashboardFooter.js";
import DashboardHeader from "./DashboardHeader";
import "../../assets/css/dashboard.scss";
function Dashboard() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <DashboardHeader />
      <div className="d-main">
        <div className="d-subscribe">
          <Container>
            <Row>
              <Col md="8">
                <h6 className="subscribe-title">
                  <span>
                    Take our 7-day training “Find Your Edge as a Beginning
                    Networker”
                  </span>
                  And start earning from $10,000 per month!
                </h6>
              </Col>
              <Col md="4">
                <Button className="subscribe-btn">Subscribe to training</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="order-box">
          <div className="user-center">
            <h2 className="title">User Center</h2>
            <Container>
              <Row>
                <Col md="6">
                  <div className="user-center-body">
                    <div className="user-center-image">
                      <img
                        src={require("assets/img/Dashboard/Bitles_Ava.png")}
                      ></img>
                    </div>
                    <div className="user-center-info">
                      <div className="info-item without-name">
                        <h6>Vladyslav Bereda </h6>
                        <span>(vladybereda@gmail.com)</span>
                      </div>
                      <div className="info-item">
                        <div className="info-item-security">
                          <img
                            src={require("assets/img/Dashboard/lock.png")}
                          ></img>
                          <p>Security Level: 1</p>
                        </div>
                        <a href="javascript:void(0);">Level Up</a>
                      </div>
                    </div>{" "}
                  </div>
                </Col>
                <Col md="6">
                  <div className="user-center-body block">
                    <div className="user-center-checkbox">
                      <p>Notifications of New Activities:</p>
                      <label className="checkbox">
                        <input type="checkbox" disabled={true}></input>
                        <span className="check-span">Email</span>
                      </label>
                      <label className="checkbox margin-3">
                        <input type="checkbox" disabled={true}></input>
                        <span className="check-span">SMS</span>
                      </label>
                      <label className="checkbox margin-3">
                        <input type="checkbox" disabled={true}></input>
                        <span className="check-span">Telegram</span>
                      </label>
                    </div>
                    <p className="user-checkbox-login">
                      Last Login History:
                      <span>26/11/2020 03:04:04</span>
                      <span>IP: 117.136.5.67</span>
                    </p>
                    <div className="user-center-select">
                      <p>Show your account in the following currency:</p>
                      <select>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                        <option>test</option>
                      </select>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="user-center-body">
                    <div className="user-center-balance-left">
                      <p className="balance-item">
                        Personal Account Balance:
                        <span className="balance-item-span">0 BTC</span>
                      </p>
                      <p className="balance-item">
                        Funds Operated:
                        <span className="balance-item-span">0 BTC</span>
                      </p>
                      <p className="balance-item">
                        Earned:
                        <span className="balance-item-span">0 BTC</span>
                      </p>
                    </div>
                    <div className="user-center-balance">
                      <p className="balance-item">
                        Total Partners:
                        <span className="balance-item-span">0</span>
                      </p>
                      <p className="balance-item">
                        Active Partners:
                        <span className="balance-item-span">0</span>
                      </p>
                      <p className="balance-item">
                        Personal Team:
                        <span className="balance-item-span">0</span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="user-center-body">
                    <div className="user-center-image">
                      <img
                        src={require("assets/img/Dashboard/share-logo.png")}
                      ></img>
                    </div>
                    <div className="user-center-info">
                      <div className="info-item without-name">
                        <span>
                          Tell your friends about Bitles and earn even more
                          profit!
                        </span>
                      </div>
                      <div className="share-ref">
                        <p className="share-ref-p">Referral Link:</p>
                        <input type="text"></input>
                      </div>
                    </div>{" "}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="navigation">
            <Container>
              <Row>
                <Col md="3">
                  <a href="/" className="active navigation-link">
                    Home
                  </a>
                </Col>
                <Col md="3">
                  <a href="/" className="navigation-link">
                    Cryp-Spider AI
                  </a>
                </Col>
                <Col md="3">
                  <a href="/" className="navigation-link">
                    Partners
                  </a>
                </Col>
                <Col md="3">
                  <a href="/" className="navigation-link">
                    History
                  </a>
                </Col>
                <Col md="3">
                  <a href="/" className="navigation-link">
                    Binary Plan
                  </a>
                </Col>
                <Col md="3">
                  <a href="/" className="navigation-link">
                    BTL Token
                  </a>
                </Col>
                <Col md="3">
                  <a href="/" className="navigation-link">
                    Settings
                  </a>
                </Col>
                <Col md="3">
                  <a href="/" className="navigation-link">
                    Promotional Tools
                  </a>
                </Col>
                <Col md="12">
                  <a href="/" className="navigation-link active">
                    <span>
                      <img
                        src={require("assets/img/Dashboard/space-shuttle.png")}
                      ></img>
                    </span>
                    Bitles Token Pre-ICO
                    <span>
                      <img
                        src={require("assets/img/Dashboard/space-shuttle.png")}
                        className="revert-image"
                      ></img>
                    </span>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="account-block-personal">
            <h2 className="title">Personal Account</h2>
            <Container>
              <Row>
                <Col md="12">
                  <div className="account-wrapper">
                    <div className="account-container">
                      <img
                        src={require("assets/img/Dashboard/personal-account.png")}
                      ></img>
                      <div className="account-info">
                        <div className="account-info-top">
                          <h2>PA 5739 7393 2896 3697</h2>
                          <img
                            src={require("assets/img/Dashboard/personal-account-history.png")}
                          ></img>
                          <a href="/"></a>
                        </div>
                        <div className="account-info-bottom">
                          <select>
                            <option>test</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="account-container account-container-child ">
                      <div className="account-balance">
                        <p>Available Balance</p>
                        <h6>0 BTC</h6>
                      </div>
                      <div className="account-balance">
                        <p>Funds Operated</p>
                        <h6>0 BTC</h6>
                      </div>
                      <div className="account-balance">
                        <p>Earned</p>
                        <h6>0 BTC</h6>
                      </div>
                      <div className="account-balance">
                        <p>Transferred</p>
                        <h6>0 BTC</h6>
                      </div>
                      <div className="account-balance">
                        <p>Blocked</p>
                        <h6>0 BTC</h6>
                      </div>
                      <div className="account-balance">
                        <div className="account-balance-buttons">
                          <Button className="replenishment account-btn">
                            Funding
                          </Button>
                          <Button className="withdraw account-btn">
                            withdraw
                          </Button>
                        </div>
                        <div className="account-balance-buttons">
                          <Button className="send account-btn">Transfer</Button>
                          <Button className="exchange account-btn">
                            exchange
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="account-block-personal account-block-stake">
            <h2 className="title">BTL Staking Account</h2>
            <Container>
              <Row>
                <Col md="12">
                  <div className="account-wrapper">
                    <div className="account-container">
                      <img
                        src={require("assets/img/Dashboard/stake-account.png")}
                      ></img>
                      <div className="account-info">
                        <div className="account-info-top">
                          <h2>SA 5387 9221 3303 1047</h2>
                          <img
                            src={require("assets/img/Dashboard/personal-account-history.png")}
                          ></img>
                          <a href="/"></a>
                        </div>
                      </div>
                    </div>
                    <div className="account-container account-container-child ">
                      <div className="account-balance">
                        <p>Available Balance</p>
                        <h6>0 BTL</h6>
                      </div>
                      <div className="account-balance">
                        <p>Staking Reward</p>
                        <h6>0 BTL</h6>
                      </div>
                      <div className="account-balance">
                        <p>Accrued per Day</p>
                        <h6>0 BTL</h6>
                      </div>
                      <div className="account-balance">
                        <p>Frozen</p>
                        <h6>0 BTL</h6>
                      </div>
                      <div className="account-balance">
                        <div className="account-balance-buttons">
                          <Button className="to-stake stake-btn">
                            Get from Personal Account
                          </Button>
                          <Button className="stake-btn">
                            Buy BTL for staking
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="account-block-token account-block-personal">
            <div className="head">
              <h2 className="title">Bitles Token ERC-20</h2>
            </div>
            <Container>
              <Row>
                <Col md="12">
                  <div className="account-wrapper">
                    <div className="account-container">
                      <div className="account-info">
                        <div className="account-info-top">
                          <div className="title-1">
                            <h3> Your Total Balance </h3>
                          </div>
                          <div className="title-2">
                            <span>
                              <img
                                src={require("assets/img/Dashboard/icon-btn-small.png")}
                              ></img>
                            </span>
                            <h3> 0 BTL ≈ $ 0 </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="account-container account-container-child">
                      <div className="account-balance">
                        <p>Total Supply:</p>
                        <h6>88,895,678 Bitles Token</h6>
                      </div>
                      <div className="account-balance">
                        <p>Total Supply:</p>
                        <h6>52 addresses</h6>
                      </div>
                      <div className="account-balance">
                        <p>Transfers:</p>
                        <h6>94</h6>
                      </div>
                      <div className="account-balance">
                        <div className="account-balance-buttons">
                          <Button className="token">
                            Get from Personal Account
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="stake">
          <h2 className="title">BTL Staking</h2>
          <Container>
            <Row>
              <Col md="12">
                <div className="stake-explanation">
                  <p className="stake-explanation-description">
                    Earn extra from 0.5% to 1.5% per day by starting BTL
                    Staking. Freeze a minimum balance of 10 BTL to receive
                    rewards every day
                  </p>
                </div>
              </Col>
            </Row>
            <div className="stake-packages">
              <Row>
                <Col md="6">
                  <div className="stake-packages-hold">
                    <div className="stake-packages-hold-title hold-0">
                      <h2 className="stake-packages-hold-title-text">
                        HOLD 80 / 0.50% PER DAY
                      </h2>
                      <img
                        src={require("assets/img/Dashboard/question-mark-active.png")}
                      ></img>
                    </div>
                    <div className="stake-packages-hold-freeze">
                      <p className="stake-packages-hold-freeze-enter">
                        Enter the BTL amount to be frozen
                      </p>
                      <input type="text" placeholder="0.000000 BTL"></input>
                    </div>
                    <Button className="stake-package-btn">Start Staking</Button>
                  </div>
                </Col>
                <Col md="6">
                  <div className="stake-packages-hold">
                    <div className="stake-packages-hold-title hold-1">
                      <h2 className="stake-packages-hold-title-text">
                        HOLD 120 / 0.80% PER DAY
                      </h2>
                      <img
                        src={require("assets/img/Dashboard/question-mark-active.png")}
                      ></img>
                    </div>
                    <div className="stake-packages-hold-freeze">
                      <p className="stake-packages-hold-freeze-enter">
                        Enter the BTL amount to be frozen
                      </p>
                      <input type="text" placeholder="0.000000 BTL"></input>
                    </div>
                    <Button className="stake-package-btn">Start Staking</Button>
                  </div>
                </Col>
                <Col md="6">
                  <div className="stake-packages-hold">
                    <div className="stake-packages-hold-title hold-2">
                      <h2 className="stake-packages-hold-title-text">
                        HOLD 160 / 1.20% PER DAY
                      </h2>
                      <img
                        src={require("assets/img/Dashboard/question-mark-active.png")}
                      ></img>
                    </div>
                    <div className="stake-packages-hold-freeze">
                      <p className="stake-packages-hold-freeze-enter">
                        Enter the BTL amount to be frozen
                      </p>
                      <input type="text" placeholder="0.000000 BTL"></input>
                    </div>
                    <Button className="stake-package-btn">Start Staking</Button>
                  </div>
                </Col>
                <Col md="6">
                  <div className="stake-packages-hold">
                    <div className="stake-packages-hold-title hold-3">
                      <h2 className="stake-packages-hold-title-text">
                        HOLD 200 / 1.50% PER DAY
                      </h2>
                      <img
                        src={require("assets/img/Dashboard/question-mark-active.png")}
                      ></img>
                    </div>
                    <div className="stake-packages-hold-freeze">
                      <p className="stake-packages-hold-freeze-enter">
                        Enter the BTL amount to be frozen
                      </p>
                      <input type="text" placeholder="0.000000 BTL"></input>
                    </div>
                    <Button className="stake-package-btn">Start Staking</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="stake-rate">
          <h2 className="title">TOP 10 Staking Leaders</h2>
          <Container>
            <Row>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-first-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 1</p>
                      <h6>B0000999</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>300633.820000 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-second-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 2</p>
                      <h6>B0009874</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>167689.200000 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-third-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 3</p>
                      <h6>B0026091</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>124538.550000 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-other-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 4</p>
                      <h6>B0014456</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>93015.000000 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-other-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 5</p>
                      <h6>B0027650</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>91781.160000 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-other-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 6</p>
                      <h6>B0013159</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>70002.615000 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-other-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 7</p>
                      <h6>B0013593</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>46503.000000 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-other-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 8</p>
                      <h6>B0011130</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>41546.428776 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-other-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 9</p>
                      <h6>B0013406</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>37584.883069BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stake-top-position">
                  <div className="stake-top-position-num">
                    <img
                      src={require("assets/img/Dashboard/stake-top-other-place.png")}
                    ></img>

                    <div className="stake-top-position-num-desc">
                      <p>NO. 10</p>
                      <h6>B0013160</h6>
                    </div>
                  </div>
                  <div className="stake-top-position-received">
                    <div className="stake-top-position-received-desc">
                      <p>Received</p>
                      <h6>29603.809673 BTL</h6>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="token">
          <h2 className="title">BTL Token</h2>
          <div className="stat">
            <Container>
              <Row>
                <Col md="12">
                  <div className="stat-item emission">
                    <img
                      src={require("assets/img/Dashboard/token-icon.png")}
                    ></img>
                    <div className="stat-item-info">
                      <p _ngcontent->Planned Issue</p>
                      <h1>888 965 215.000</h1>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="stat-item already_released">
                    <img
                      src={require("assets/img/Dashboard/token-icon2.png")}
                    ></img>
                    <div className="stat-item-info">
                      <p _ngcontent->Total Issued</p>
                      <h1>19 863 381.279</h1>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="stat-item left_released">
                    <img
                      src={require("assets/img/Dashboard/token-icon3.png")}
                    ></img>
                    <div className="stat-item-info">
                      <p _ngcontent->Remaining to be Issued</p>
                      <h1>869 101 833.720</h1>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="rate">
            <Container>
              <Row>
                <div className="columns">
                  <div className="rate-head">
                    <h6>BTL Exchange Rate: $0.450</h6>
                  </div>
                  <div className="rate-content">
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="rate-item">
                      <div className="rate-item-image">
                        <img
                          src={require("assets/img/Dashboard/bitcoin.png")}
                        ></img>
                        <h6>Bitcoin</h6>
                      </div>
                      <div className="rate-item-info">
                        <p> BTL/btc</p>
                        <div className="rate-item-info-stat">
                          <div className="arrow">
                            <img
                              src={require("assets/img/Dashboard/token-arrow.png")}
                            ></img>
                          </div>
                          <p>0 BTC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <DashboardFooter/>
    </>
  );
}

export default Dashboard;
