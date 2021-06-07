import React from "react";
import ChatsMessageContentItem from "./ChatsMessageContentItem";

export default class ChatsMessageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-chat_content__message___content">
        {this.props.CurrentRoomChatContent.map(
          (membermessageitem, membermessageindex) => (
            <div key={membermessageindex}>
              <ChatsMessageContentItem
                MemberChattedID={membermessageitem.MemberChattedID}
                MemberChattedContent={membermessageitem.MemberChattedContent}
                MemberChattedDate={membermessageitem.MemberChattedDate}
                MemberID={this.props.MemberID}
                MemberChoiceChatID={this.props.MemberChoiceChatID}
              />
            </div>
          )
        )}
      </div>
    );
  }
}
