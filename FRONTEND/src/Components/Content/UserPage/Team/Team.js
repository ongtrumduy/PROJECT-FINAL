import React from "react";
import axios from "axios";

import TeamName from "./TeamName";
import TeamContent from "./TeamContent";
import "./Team.css";

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ChooseTeamInfor: [] };
  }

  componentDidMount = () => {
    axios
      .post("http://localhost:8081/getteamlist/getteaminfor", {
        TeamID: this.props.TeamID
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          ChooseTeamID: res.data.TeamID,
          ChooseTeamInfor: res.data.TeamInfor
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="user-team">
        <div className="user-team_teamname">
          <div
            className="user-team_teamname__backtoteamall"
            onClick={() => this.props.updateRenderTeamControl("teamall")}
          >
            <div>
              <i className="material-icons"> &#xe5c4;</i>
            </div>
            <div>
              <span>Tất cả các nhóm</span>
            </div>
          </div>
          <TeamName
            TeamID={this.state.ChooseTeamID}
            ChooseTeamInfor={this.state.ChooseTeamInfor}
          />
        </div>
        <TeamContent TeamID={this.props.TeamID} />
      </div>
    );
  }
}
