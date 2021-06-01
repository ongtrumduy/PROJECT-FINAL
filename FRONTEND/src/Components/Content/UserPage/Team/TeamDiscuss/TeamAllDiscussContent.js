import React from "react";
import TeamDiscussContentItem from "./TeamDiscussContentItem";

export default class TeamAllDiscussContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTeamDiscussContent = teamitem => {
    switch (teamitem.TeamDiscussType) {
      case "newmember":
        return (
          <p style={{ fontWeight: "bold", fontSize: "12px", color: "red" }}>
            {teamitem.MemberDiscussContent}
          </p>
        );
      case "adminmember":
        return (
          <div>
            <br></br>
            <p style={{ fontWeight: "bold", fontSize: "12px", color: "red" }}>
              {teamitem.MemberDiscussContent}
            </p>
          </div>
        );
      case "discuss":
        return (
          <TeamDiscussContentItem
            MemberDiscussID={teamitem.MemberDiscussID}
            MemberID={this.props.MemberID}
            TeamDiscussID={teamitem.TeamDiscussID}
            MemberDiscussFullName={teamitem.MemberDiscussFullName}
            TeamID={this.props.TeamID}
            MemberDiscussContent={teamitem.MemberDiscussContent}
            MemberDiscussTime={teamitem.MemberDiscussTime}
            TeamCommentContent={teamitem.TeamCommentContent}
            socket={this.props.socket}
            setChoiceTeamMemberChatID={this.props.setChoiceTeamMemberChatID}
          />
        );
      default:
    }
  };

  render() {
    return (
      <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss">
        <div
          style={
            this.props.CheckNextRenderDiscussContent
              ? { display: "block" }
              : { display: "none" }
          }
          onClick={() => this.props.sendToSeeOldDiscussContent()}
          className="user-team_team-menu-and-content__content___discuss_____alldiscuss____seen-old-discuss"
        >
          <p>Xem thêm các Thảo luận cũ !!!</p>
        </div>

        {this.props.CurrentTeamDiscussContent.map((teamitem, teamindex) => (
          <div key={teamindex}>{this.renderTeamDiscussContent(teamitem)}</div>
        ))}
      </div>
    );
  }
}
