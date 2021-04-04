import React from "react";
import ChatList from "./ChatList";
import ChatContent from "./ChatContent";
import "./Chats.css";

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-chat">
        <ChatList />
        <ChatContent />
      </div>
    );
  }
}
