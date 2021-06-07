import React from "react";
import ChatsMainMenu from "./ChatsMainMenu";

import ChatsMessage from "../ChatsMessage/ChatsMessage";
import ChatsNotes from "../ChatsNotes/ChatsNotes";
import ChatsSetting from "../ChatsSetting/ChatsSetting";
import ChatsFiles from "../ChatsFiles/ChatsFiles";

export default class ChatsMainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setSelectChatContent: "message"
    };
  }

  setSelectChatContentClickChoose = setSelect => {
    this.setState({
      setSelectChatContent: setSelect
    });
  };

  renderChatOrNonChatMainChooseContent = () => {
    if (this.props.CheckNonMemberToChat) {
      return <div>{this.renderChatMainChooseContent()}</div>;
    } else {
      return (
        <div style={{ fontWeight: "bold" }}>
          <p>
            Bạn chưa có trò chuyện với ai cả !!! Hãy liên lạc với các thành viên
            trong nhóm mà bạn tham gia !!!
          </p>
        </div>
      );
    }
  };

  renderChatMainChooseContent = () => {
    switch (this.state.setSelectChatContent) {
      case "message":
        return (
          <ChatsMessage
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            MemberChoiceChatID={this.props.MemberChoiceChatID}
          />
        );
      case "files":
        return (
          <ChatsFiles
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            MemberChoiceChatID={this.props.MemberChoiceChatID}
          />
        );
      case "setting":
        return (
          <ChatsSetting
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            MemberChoiceChatID={this.props.MemberChoiceChatID}
            MemberChoiceChatFullName={this.props.MemberChoiceChatFullName}
          />
        );
      case "notes":
        return (
          <ChatsNotes
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            MemberChoiceChatID={this.props.MemberChoiceChatID}
          />
        );
      default:
        return (
          <ChatsMessage
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            MemberChoiceChatID={this.props.MemberChoiceChatID}
          />
        );
    }
  };

  render() {
    return (
      <div className="user-chat_content">
        {this.props.CheckNonMemberToChat === true ? (
          <ChatsMainMenu
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            setSelectChatContentClickChoose={
              this.setSelectChatContentClickChoose
            }
            MemberChoiceChatFullName={this.props.MemberChoiceChatFullName}
          />
        ) : (
          <div></div>
        )}
        {this.renderChatOrNonChatMainChooseContent()}
      </div>
    );
  }
}
