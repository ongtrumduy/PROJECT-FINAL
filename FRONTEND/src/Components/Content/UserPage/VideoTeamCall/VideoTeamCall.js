import React from "react";
import VideoTeamCallMain1 from "./VideoTeamCallMain1";

export default class VideoTeamCall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <VideoTeamCallMain1
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
          updateRenderTeamControl={this.updateRenderTeamControl}
        />
      </div>
    );
  }
}
