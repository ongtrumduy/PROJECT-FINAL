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
      default:
        return (
          <Login
            updateLoginPage={this.updateLoginPage}
            updateAdminDashBoard={this.props.updateAdminDashBoard}
            updateUserDashBoard={this.props.updateUserDashBoard}
            updateRegisterPage={this.updateRegisterPage}
            updateForgotPassPage={this.updateForgotPassPage}
          />
        );
    }
  };

  updateLoginPage = () => {
    this.setState({
      checkSign: "login"
    });
  };

  updateRegisterPage = () => {
    this.setState({
      checkSign: "register"
    });
  };

  updateForgotPassPage = () => {
    this.setState({
      checkSign: "forgot"
    });
  };

  render() {
    return <div>{this.updateLogPage()}</div>;
  }
}
