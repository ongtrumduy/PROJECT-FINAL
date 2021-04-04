import React from "react";
import "./Teams.css";
import TeamAddCodeTeam from "./TeamAddCodeTeam";
import TeamAllContent from "./TeamAllContent";
import TeamCreateTeam from "./TeamCreateTeam";
import Team from "./../Team/Team";

export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setTeamRender: "" };
  }

  updateRenderTeamControl = state => {
    this.setState({
      setTeamRender: state
    });
  };

  renderTeamControlContent = () => {
    switch (this.state.setTeamRender) {
      case "create":
        return (
          <TeamCreateTeam
            updateRenderTeamControl={this.updateRenderTeamControl}
          />
        );
      case "addcode":
        return (
          <TeamAddCodeTeam
            updateRenderTeamControl={this.updateRenderTeamControl}
          />
        );
      case "teamcontent":
        return <Team updateRenderTeamControl={this.updateRenderTeamControl} />;
      case "teamall":
        return (
          <TeamAllContent
            updateRenderTeamControl={this.updateRenderTeamControl}
          />
        );
      default:
        return (
          <TeamAllContent
            updateRenderTeamControl={this.updateRenderTeamControl}
          />
        );
    }
  };

  render() {
    return <div className="user-teams">{this.renderTeamControlContent()}</div>;
  }
}
