import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Button } from "reactstrap";
import classnames from "classnames";
import "../../assets/css/auth.scss";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      loading: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    this.setState({ loading: false });
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors, loading } = this.state;
    return (
      <div className="login-main">
        <div className="auth-wrapper">
          <div className="auth-logo">
            <a href="/" className="auth-link">
              <img src={require("assets/img/Dashboard/logo.png")}></img>
            </a>
          </div>
          <div className="auth-container">
            <div className="title">
              <h6 className="title-text">Register New Account</h6>
            </div>
            <div className="form-inputs">
              <form noValidate onSubmit={this.onSubmit}>
                <label className="inputs-control">
                  <input
                    placeholder="Enter Name"
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    className={classnames("", {
                      invalid: errors.name,
                    })}
                  ></input>
                  <span className="control-icon">
                    <i className="fa fa-user"></i>
                  </span>
                </label>
                <label className="inputs-control">
                  <input
                    placeholder="Enter Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email,
                    })}
                  ></input>
                  <span className="control-icon">
                    <i className="fa fa-envelope"></i>
                  </span>
                </label>
                <label className="inputs-control">
                  <input
                    placeholder="Enter Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password,
                    })}
                  ></input>
                  <span className="control-icon">
                    <i className="fa fa-lock"></i>
                  </span>
                </label>
                <label className="inputs-control">
                  <input
                    placeholder="Re Enter Password"
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2,
                    })}
                  ></input>
                  <span className="control-icon">
                    <i className="fa fa-lock"></i>
                  </span>
                </label>
                <Button className="form-submit" type="submit">
                  Register
                  {loading && <span className="fa fa-spinner fa-spin"></span>}
                </Button>
              </form>
            </div>
          </div>
          <div className="navigation">
            <h6 class="navigation-item text">Already have a Bitles Account?</h6>
            <a href="/login" className="ml-3">
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
