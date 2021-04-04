import React from "react";
import ChatContentMenu from "./ChatContentMenu";
import ChatContentContent from "../Team/TeamContentContent";
import ChatContentSendMessage from "./ChatContentSendMessage";

export default class ChatContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-chat_content">
        <ChatContentMenu />
        <ChatContentContent />
        <ChatContentSendMessage />
      </div>
    );
  }
}
