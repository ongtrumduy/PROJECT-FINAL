import React from "react";
import VideoTeamCallMain from "./VideoTeamCallMain";

export default class VideoTeamCall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <VideoTeamCallMain
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
          updateRenderTeamControl={this.updateRenderTeamControl}
        />
      </div>
    );
  }
}
