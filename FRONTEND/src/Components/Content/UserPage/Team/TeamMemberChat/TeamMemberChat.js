import React from "react";
import Draggable from "react-draggable";
import defaultavatar from "../../../../Main/Image-Icons/default-avatar.png";

export default class TeamMemberChat extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTeamMemberChat = () => {
    return (
      <div>
        <div className="user-team_team-menu-and-content__content___discuss____member-chat______avatar-fullname">
          <div className="user-team_team-menu-and-content__content___discuss____member-chat______avatar-fullname______avatar">
            <img src={defaultavatar} alt="default-avatar" />
          </div>
          <div className="user-team_team-menu-and-content__content___discuss____member-chat______avatar-fullname______fullname">
            <p>Phạm Duy-gsdsdhsdhs</p>
          </div>
          <div
            onClick={() => this.props.setChooseTeamMemberChat(false)}
            className="user-team_team-menu-and-content__content___discuss____member-chat______avatar-fullname______close-box"
          >
            <i className="material-icons">&#xe5cd;</i>
          </div>
        </div>

        <div className="user-team_team-menu-and-content__content___discuss____member-chat______team-chat-content">
          <p>Hello nha</p>
        </div>
        <div className="user-team_team-menu-and-content__content___discuss____member-chat______send-message">
          <div>
            <input type="text" placeholder="Nhập tin nhắn..." />
          </div>
          <div>
            <i className="material-icons">&#xe163;</i>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Draggable bounds={{ top: -300, left: 0, right: 600, bottom: 0 }}>
        <div
          style={
            this.props.chooseTeamMemberChat
              ? { display: "block" }
              : { display: "none" }
          }
          className="user-team_team-menu-and-content__content___discuss____member-chat"
        >
          {this.renderTeamMemberChat()}
        </div>
      </Draggable>
    );
  }
}
