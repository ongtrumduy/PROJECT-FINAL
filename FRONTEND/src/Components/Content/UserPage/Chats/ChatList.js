import React from "react";
import ChatListContent from "./ChatListContent";

export default class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-chat_list">
        <div className="user-chat_list__title">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            Trò chuyện
          </p>
        </div>
        <ChatListContent />
      </div>
    );
  }
}
