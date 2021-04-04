import React from "react";
import TeamName from "./TeamName";
import TeamContent from "./TeamContent";
import "./Team.css";

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team">
        <div className="user-team_teamname">
          <div
            className="user-team_teamname__backtoteamall"
            onClick={() => this.props.updateRenderTeamControl("teamall")}
          >
            <div>
              <i class="material-icons"> &#xe5c4;</i>
            </div>
            <div>
              <span>Tất cả các nhóm</span>
            </div>
          </div>
          <TeamName />
        </div>
        <TeamContent />
      </div>
    );
  }
}
