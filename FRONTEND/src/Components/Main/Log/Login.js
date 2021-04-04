import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      setHiddenPass: false
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
      this.props.updateRenderLogPage("User");
    }
  };

  pressEnterPassword = event => {
    if (event.key === "Enter") {
      this.props.updateRenderLogPage("User");
    }
  };

  setStateHiddenPass = () => {
    if (this.state.setHiddenPass) {
      this.setState({
        setHiddenPass: false
      });
    } else {
      this.setState({
        setHiddenPass: true
      });
    }
  };

  handleLoginSubmit = () => {
    this.props.updateRenderLogPage("User");
  };

  renderLoginForm = () => {
    return (
      <div className="user-login">
        <form onSubmit={() => this.handleLoginSubmit()}>
          <div className="user-login_form">
            <p>
              Tên đăng nhập <span>(*)</span>
            </p>
            <input
              type="text"
              onChange={this.handleUsernameChange}
              value={this.state.username}
              onKeyPress={this.pressEnterUsername}
            />
            <p>
              Mật khẩu <span>(*)</span>
            </p>
            <input
              style={{ width: "240px" }}
              type={(this.state.setHiddenPass && "text") || "password"}
              onChange={this.handlePasswordChange}
              value={this.state.password}
              onKeyPress={this.pressEnterPassword}
            />
            <i
              class="material-icons"
              style={{ cursor: "pointer" }}
              onClick={() => this.setStateHiddenPass()}
            >
              {(this.state.setHiddenPass && "visibility") || "visibility_off"}
            </i>
          </div>

          <div className="user-login_button">
            <div className="user-login_button__loginbutton">
              <input type="submit" value="Đăng nhập" />
            </div>
            <div>
              <div className="user-login_button__forgotbutton">
                <input
                  type="button"
                  value="Quên mật khẩu?"
                  onClick={() => this.props.updateLoginPage("forgot")}
                />
              </div>
              <div className="user-login_button__registerbutton">
                <input
                  type="submit"
                  value="Đăng kí"
                  onClick={() => this.props.updateLoginPage("register")}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return <div>{this.renderLoginForm()}</div>;
  }
}
