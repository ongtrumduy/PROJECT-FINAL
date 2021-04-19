import React from "react";
import TeamDiscussContent from "./TeamDiscussContent";
import axios from "axios";

export default class TeamAllDiscussContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { TeamDiscussContent: [] };
  }

  componentDidMount = () => {
    axios
      .post("/getteamlist/getteamdiscuss", {
        TeamID: this.props.TeamID
      })
      .then(res => {
        this.setState({
          TeamDiscussContent: res.data.TeamDiscussContent
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.props.socket.on("update-discuss-content", data => {
      console.log(data);
    });
  };

  renderTeamDiscussContent = teamitem => {
    switch (teamitem.TeamDiscussType) {
      case "non-activitied":
        return <p>{teamitem.MemberDiscussContent}</p>;
      // case "newmember":
      //   return <p>{teamitem.MemberDiscussContent}</p>;
      case "discuss":
        return (
          <TeamDiscussContent
            MemberDiscussID={teamitem.MemberDiscussID}
            MemberID={this.props.MemberID}
            TeamDiscussID={teamitem.TeamDiscussID}
            TeamID={this.props.TeamID}
            MemberDiscussContent={teamitem.MemberDiscussContent}
            MemberDiscussTime={teamitem.MemberDiscussTime}
            TeamCommentContent={teamitem.TeamCommentContent}
            socket={this.props.socket}
          />
        );
    }
  };

  render() {
    return (
      <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss">
        {this.state.TeamDiscussContent.map(teamitem => (
          <div>{this.renderTeamDiscussContent(teamitem)}</div>
        ))}
      </div>
    );
  }
}
