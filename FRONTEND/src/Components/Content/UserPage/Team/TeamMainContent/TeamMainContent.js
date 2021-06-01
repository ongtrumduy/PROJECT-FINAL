import React from "react";
import TeamDiscuss from "../TeamDiscuss/TeamDiscuss";
import TeamFiles from "../TeamFiles/TeamFiles";
import TeamNotes from "../TeamNotes/TeamNotes";
import TeamSettings from "../TeamSetting/TeamSetting";

export default class zTeamMainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chooseTeamContentToRender = () => {
    switch (this.props.setSelectTeamContent) {
      case "discuss":
        return (
          <TeamDiscuss
            MemberID={this.props.MemberID}
            TeamID={this.props.TeamID}
            socket={this.props.socket}
            ChooseTeamInfor={this.props.ChooseTeamInfor}
            checkMemberIsAdmin={this.props.checkMemberIsAdmin}
          />
        );
      case "files":
        return <TeamFiles />;
      case "notes":
        return (
          <TeamNotes
            MemberID={this.props.MemberID}
            TeamID={this.props.TeamID}
            socket={this.props.socket}
            ChooseTeamInfor={this.props.ChooseTeamInfor}
            checkMemberIsAdmin={this.props.checkMemberIsAdmin}
          />
        );
      case "settings":
        return <TeamSettings />;
      default:
        return (
          <TeamDiscuss
            MemberID={this.props.MemberID}
            TeamID={this.props.TeamID}
            socket={this.props.socket}
            ChooseTeamInfor={this.props.ChooseTeamInfor}
            checkMemberIsAdmin={this.props.checkMemberIsAdmin}
          />
        );
    }
  };

  render() {
    return (
      <div className="user-team_team-menu-and-content__content">
        {this.chooseTeamContentToRender()}
      </div>
    );
  }
}
