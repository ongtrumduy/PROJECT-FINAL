import React from "react";
import VideoTeamCallMain2 from "./VideoTeamCallMain2";

export default class VideoTeamCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <VideoTeamCallMain2
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
          updateRenderTeamControl={this.updateRenderTeamControl}
        />
      </div>
    );
  }
}
