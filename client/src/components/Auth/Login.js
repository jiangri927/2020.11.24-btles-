import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Button } from "reactstrap";
import "../../assets/css/auth.scss";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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
              <h6 className="title-text">Back Office Login</h6>
            </div>
            <div className="form-inputs">
              <form noValidate onSubmit={this.onSubmit}>
                <label className="inputs-control">
                  <input
                    placeholder="Enter Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound,
                    })}
                  ></input>
                  <span className="control-icon">
                    <i className="fa fa-envelope"></i>
                  </span>
                </label>
                <label className="inputs-control">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect,
                    })}
                  ></input>
                  <span className="control-icon">
                    <i className="fa fa-lock"></i>
                  </span>
                </label>
                <Button className="form-submit" type="submit">
                  Login
                  {loading && <span className="fa fa-spinner fa-spin"></span>}
                </Button>
              </form>
            </div>
          </div>
          <div className="navigation">
            <a href="/register">Register</a>
            <a href="/register" className="ml-3">
              Reset Password
            </a>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
