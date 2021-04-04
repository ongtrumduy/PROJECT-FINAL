import React from "react";
import defaultavatar from "../../../Main/Image-Icons/default-avatar.png";
import ChatContentSendMessage from "./ChatContentSendMessage";

export default class ChatContentMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setStatusReply: false };
  }

  handleSetStatusReply = () => {
    this.setState({
      setStatusReply: true
    });
  };

  renderContentStatusReply = () => {
    if (this.state.setStatusReply) {
      return <ChatContentSendMessage />;
    } else {
      return (
        <div
          className="user-team_content__status___reply"
          onClick={() => this.handleSetStatusReply()}
        >
          <div>
            <i class="material-icons">&#xe15e;</i>
          </div>
          <div>
            <span>Trả lời</span>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="user-team_content__status">
        <div className="user-team_content__status___avatar">
          <img style={{ height: "40px", width: "40px" }} src={defaultavatar} />
        </div>
        <div className="user-team_content__status___statusbox">
          <div className="user-team_content__status___nameandtime">
            <div className="user-team_content__status___fullname">Phạm Duy</div>
            <div className="user-team_content__status___timedate">
              31/03/2021 21:05
            </div>
          </div>
          <div className="user-team_content__status___content">
            <p>Chào anh em nha!!!</p>
          </div>
          {this.renderContentStatusReply()}
        </div>
      </div>
    );
  }
}
