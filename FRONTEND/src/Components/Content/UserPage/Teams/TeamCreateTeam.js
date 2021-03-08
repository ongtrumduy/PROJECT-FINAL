import React from "react";
import logo11 from "../../../Main/Image-Icons/11.PNG";
import logo22 from "../../../Main/Image-Icons/22.PNG";
import logo33 from "../../../Main/Image-Icons/33.PNG";
import logo44 from "../../../Main/Image-Icons/44.PNG";

export default class TeamCreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setLogoChoose: logo11 };
  }

  handleChooseLogo = event => {
    const chooseLogo = event.target.value;
    switch (chooseLogo) {
      case "logo11":
        this.setState({
          setLogoChoose: logo11
        });
        break;
      case "logo22":
        this.setState({
          setLogoChoose: logo22
        });
        break;

      case "logo33":
        this.setState({
          setLogoChoose: logo33
        });
        break;

      case "logo44":
        this.setState({
          setLogoChoose: logo44
        });
        break;
    }
  };

  createTeamForm = () => {
    return (
      <div className="user-teams_create">
        <div
          className="user-teams_create__backtoteamall"
          onClick={() => this.props.updateRenderTeamControl("teamall")}
        >
          <div>
            <i class="material-icons"> &#xe5c4;</i>
          </div>
          <div>
            <span>Quay lại</span>
          </div>
        </div>
        <div className="user-teams_create__team">
          <div className="user-teams_create__team___form">
            <div>
              <p>Tên nhóm</p>
              <input type="text" placeholder="Nhập tên nhóm..." />
              <p>Mô tả</p>
              <input type="text" placeholder="Nhập mô tả..." />
              <p>Chọn ảnh đại diện cho nhóm</p>
              <select onChange={this.handleChooseLogo}>
                <option value="logo11">Ảnh 1</option>
                <option value="logo22">Ảnh 2</option>
                <option value="logo33">Ảnh 3</option>
                <option value="logo44">Ảnh 4</option>
              </select>
            </div>
            <div>
              <button>Tạo Nhóm</button>
            </div>
          </div>

          <div className="user-teams_create__team___logo">
            <div>
              <img src={this.state.setLogoChoose} />
            </div>
            <div>
              <p>Ảnh đại diện nhóm</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.createTeamForm()}</div>;
  }
}
