import React from "react";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      password: "",
      birthday: "",
      gender: "",
      setHiddenPass: false
    };
  }

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

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleFirstnameChange = event => {
    this.setState({
      firstname: event.target.value
    });
  };

  handleLastnameChange = event => {
    this.setState({
      lastname: event.target.value
    });
  };

  handlePhonenumberChange = event => {
    this.setState({
      phonenumber: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleBirthChange = event => {
    this.setState({
      birthday: event.target.value
    });
  };

  handleGenderChange = event => {
    this.setState({
      gender: event.target.value
    });
  };

  handleRegisterSubmit = () => {
    this.props.updateLoginPage("login");
  };

  renderRegisterForm = () => {
    return (
      <div className="user-register">
        <form onSubmit={() => this.handleRegisterSubmit()}>
          <div className="user-register_form">
            <div
              className="user-register_button__returnloginbutton"
              onClick={() => this.props.updateLoginPage("login")}
            >
              <div>
                <i class="material-icons"> &#xe5c4;</i>
              </div>
              <div>Quay lại</div>
            </div>

            <div className="user-register_form__form1">
              <p>
                Tên đăng nhập <span>(*)</span>
              </p>
              <input
                type="text"
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
              <p>
                Họ và tên <span>(*)</span>
              </p>
              <div className="user-register_form__fullname">
                <div className="user-register_form__fullname___firstname">
                  <input
                    type="text"
                    onChange={this.handleLastnameChange}
                    value={this.state.lastname}
                    placeholder="Họ"
                  />
                </div>
                <div className="user-register_form__fullname___lastname">
                  <input
                    type="text"
                    onChange={this.handleFirstnameChange}
                    value={this.state.firstname}
                    placeholder="Tên"
                  />
                </div>
              </div>

              <p>
                Giới tính <span>(*)</span>
              </p>
              <div className="user-register_form__genderchoose">
                <select onChange={this.handleGenderChange}>
                  <option value="">Chọn</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
            </div>

            <div className="user-register_form__form2">
              <p>
                Số điện thoại <span>(*)</span>
              </p>
              <input
                type="text"
                onChange={this.handlePhonenumberChange}
                value={this.state.usernumber}
              />
              <p>
                Mật khẩu <span>(*)</span>
              </p>
              <input
                style={{ width: "240px" }}
                type={(this.state.setHiddenPass && "text") || "password"}
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
              <i
                class="material-icons"
                style={{ cursor: "pointer" }}
                onClick={() => this.setStateHiddenPass()}
              >
                {(this.state.setHiddenPass && "visibility") || "visibility_off"}
              </i>
              <p>
                Ngày sinh <span>(*)</span>
              </p>
              <input
                type="date"
                onChange={this.handleBirthdayChange}
                value={this.state.birth}
              />
            </div>
          </div>
          <div className="user-register_button__registerbutton">
            <input
              type="submit"
              value="Đăng kí"
              //   onClick={() => this.onRegisterNewUser()}
            />
          </div>
        </form>
      </div>
    );
  };

  render() {
    return <div>{this.renderRegisterForm()}</div>;
  }
}
