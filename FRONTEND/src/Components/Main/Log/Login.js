import React from "react";
import request from "request";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  pressEnterUsername = event => {
    if (event.key === "Enter") {
      this.props.updateUserDashBoard();
    }
  };

  pressEnterPassword = event => {
    if (event.key === "Enter") {
      this.props.updateUserDashBoard();
    }
  };

  loginForm = () => {
    return (
      <div>
        <div className="login">
          <p>Tên đăng nhập (*)</p>
          <input
            type="text"
            onChange={this.handleUsernameChange}
            value={this.state.username}
            onKeyPress={this.pressEnterUsername}
          />
          <p>Mật khẩu (*)</p>
          <input
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            onKeyPress={this.pressEnterPassword}
          />
          <div className="login-button">
            <input
              type="button"
              value="Đăng nhập"
              onClick={() => this.props.updateUserDashBoard()}
            />
          </div>
          <div className="forest-button">
            <div className="forgotpass-button">
              <input
                type="button"
                value="Quên mật khẩu?"
                onClick={() => this.props.updateForgotPassPage()}
              />
            </div>
            <div className="register-button">
              <input
                type="button"
                value="Đăng kí"
                onClick={() => this.props.updateRegisterPage()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.loginForm()}</div>;
  }
}
