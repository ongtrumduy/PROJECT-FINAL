import React from "react";
import ForgotPass from "./ForgotPass";
import Login from "./Login";
import "./Login.css";
import Register from "./Register";
import "./Register.css";

export default class LogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkSign: "login"
    };
  }

  updateLogPage = () => {
    switch (this.state.checkSign) {
      case "register":
        return <Register updateLoginPage={this.updateLoginPage} />;
      case "forgot":
        return <ForgotPass updateLoginPage={this.updateLoginPage} />;
      case "login":
        return (
          <Login
            updateLoginPage={this.updateLoginPage}
            updateRenderLogPage={this.props.updateRenderLogPage}
          />
        );
      default:
        return (
          <Login
            updateLoginPage={this.updateLoginPage}
            updateRenderLogPage={this.props.updateRenderLogPage}
          />
        );
    }
  };

  updateLoginPage = state => {
    this.setState({
      checkSign: state
    });
  };

  render() {
    return <div>{this.updateLogPage()}</div>;
  }
}
