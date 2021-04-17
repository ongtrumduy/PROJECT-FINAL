import React from "react";
import defaultavatar from "../../../../Main/Image-Icons/default-avatar.png";
import TeamDiscussContentReplyInput from "./TeamDiscussContentReplyInput";

export default class TeamDiscussContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setDiscussReply: false };
  }

  handleSetDiscussReply = () => {
    this.setState({
      setDiscussReply: true
    });
  };

  renderContentDiscussReply = () => {
    if (this.state.setDiscussReply) {
      return (
        <TeamDiscussContentReplyInput
          MemberDiscussID={this.props.MemberDiscussID}
          TeamDiscussID={this.props.TeamDiscussID}
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          TeamCommentContent={this.props.TeamCommentContent}
          socket={this.props.socket}
        />
      );
    } else {
      return (
        <div>
          <div
            className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________reply"
            onClick={() => this.handleSetDiscussReply()}
          >
            <div>
              <i className="material-icons">&#xe15e;</i>
            </div>
            <div>
              <span>Xem bình luận</span>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss">
        <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______avatar">
          <img alt="default-avatar" src={defaultavatar} />
        </div>
        <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox">
          <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime">
            <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________fullname">
              {this.props.MemberDiscussID}
            </div>
            <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________timedate">
              {this.props.MemberDiscussTime}
            </div>
          </div>
          <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________content">
            <p>{this.props.MemberDiscussContent}</p>
          </div>
          {this.renderContentDiscussReply()}
        </div>
      </div>
    );
  }
}
