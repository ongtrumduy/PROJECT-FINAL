import React from "react";
import defaultavatar from "../../../../Main/Image-Icons/default-avatar.PNG";
import TeamDiscussContentReplyInput from "./TeamDiscussContentReplyInput";

export default class TeamDiscussContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setDiscussReply: false };
  }

  componentDidMount = () => {
    this.mounted = true;
    this.props.socket.on("receive-to-close-all-discuss-reply", data => {
      if (this.mounted) {
        if (
          this.props.socket.id === data.SocketID &&
          this.props.TeamID === data.TeamID
        ) {
          this.setState({
            setDiscussReply: false
          });
        }
      }
    });
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

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
          socket={this.props.socket}
          setChoiceTeamMemberChatID={this.props.setChoiceTeamMemberChatID}
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
            <div
              onClick={() =>
                this.props.setChoiceTeamMemberChatID(this.props.MemberDiscussID)
              }
              className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________fullname"
            >
              {this.props.MemberDiscussFullName}-{this.props.MemberDiscussID}
            </div>
            <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________timedate">
              {this.props.MemberDiscussTime}
            </div>
            <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________edit-and-delete">
              <i className="material-icons">{"more_horiz"}</i>
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
