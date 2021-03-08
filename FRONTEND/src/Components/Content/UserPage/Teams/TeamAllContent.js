import React from "react";
import TeamAllList from "./TeamAllList";

export default class TeamAllContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-teams_all">
        <div className="user-teams_all__control">
          <div className="user-teams_all__control___title">
            <p>Tất cả nhóm</p>
          </div>
          <div className="user-teams_all__control___button">
            <button
              onClick={() => this.props.updateRenderTeamControl("create")}
            >
              Tạo nhóm
            </button>
            <button
              onClick={() => this.props.updateRenderTeamControl("addcode")}
            >
              Tham gia nhóm bằng mã
            </button>
          </div>
        </div>
        <TeamAllList
          updateRenderTeamControl={this.props.updateRenderTeamControl}
        />
      </div>
    );
  }
}
