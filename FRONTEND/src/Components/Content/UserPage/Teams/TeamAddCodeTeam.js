import React from "react";

export default class TeamAddCodeTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addCodeTeamForm = () => {
    return (
      <div className="user-teams_addcode">
        <div
          className="user-teams_addcode__backtoteamall"
          onClick={() => this.props.updateRenderTeamControl("teamall")}
        >
          <div>
            <i class="material-icons"> &#xe5c4;</i>
          </div>
          <div>
            <span>Quay lại</span>
          </div>
        </div>

        <div className="user-teams_addcode__team">
          <div className="user-teams_addcode__team___form">
            <div>
              <p>Nhập mã nhóm</p>
              <input type="text" placeholder="Nhập mã nhóm..." />
            </div>
            <div>
              <button>Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.addCodeTeamForm()}</div>;
  }
}
