import React from "react";
import "./Teams.css";
import TeamAddCodeTeam from "./TeamAddCodeTeam";
import TeamAllContent from "./TeamAllContent";
import TeamCreateTeam from "./TeamCreateTeam";
import Team from "./../Team/Team";

export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setTeamRender: "", TeamID: "" };
  }

  updateRenderTeamControl = state => {
    this.setState({
      setTeamRender: state
    });
  };

  getTeamIDMemberChoice = teamID => {
    this.setState({
      TeamID: teamID
    });
  };

  renderTeamControlContent = () => {
    switch (this.state.setTeamRender) {
      case "create":
        return (
          <TeamCreateTeam
            MemberID={this.props.MemberID}
            updateRenderTeamControl={this.updateRenderTeamControl}
          />
        );
      case "addcode":
        return (
          <TeamAddCodeTeam
            MemberID={this.props.MemberID}
            updateRenderTeamControl={this.updateRenderTeamControl}
          />
        );
      case "teamcontent":
        return (
          <Team
            MemberID={this.props.MemberID}
            TeamID={this.state.TeamID}
            updateRenderTeamControl={this.updateRenderTeamControl}
          />
        );
      case "teamall":
        return (
          <TeamAllContent
            MemberID={this.props.MemberID}
            updateRenderTeamControl={this.updateRenderTeamControl}
            getTeamIDMemberChoice={this.getTeamIDMemberChoice}
          />
        );
      default:
        return (
          <TeamAllContent
            MemberID={this.props.MemberID}
            updateRenderTeamControl={this.updateRenderTeamControl}
            getTeamIDMemberChoice={this.getTeamIDMemberChoice}
          />
        );
    }
  };

  render() {
    return <div className="user-teams">{this.renderTeamControlContent()}</div>;
  }
}
