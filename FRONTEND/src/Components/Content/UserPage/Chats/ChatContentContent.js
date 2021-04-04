import React from "react";
import ChatContentMessage from "../Chats/ChatContentMessage";

export default class ChatContentContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_content__content">
        <div>
          <ChatContentMessage />
        </div>
        <div>
          <ChatContentMessage />
        </div>
        <div>
          <ChatContentMessage />
        </div>
        <div>
          <ChatContentMessage />
        </div>
        <div>
          <ChatContentMessage />
        </div>
        <div>
          <ChatContentMessage />
        </div>
        <div>
          <ChatContentMessage />
        </div>
        <div>
          <ChatContentMessage />
        </div>
      </div>
    );
  }
}
