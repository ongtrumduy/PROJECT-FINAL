import React from "react";
import "./TeamDiscuss.css";
import TeamDiscussContent from "./TeamAllDiscussContent";
import TeamDiscussCreateNew from "./TeamDiscussCreateNew";

export default class TeamDiscuss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_team-menu-and-content__content___discuss">
        <TeamDiscussContent
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
        />
        <TeamDiscussCreateNew
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
        />
      </div>
    );
  }
}
