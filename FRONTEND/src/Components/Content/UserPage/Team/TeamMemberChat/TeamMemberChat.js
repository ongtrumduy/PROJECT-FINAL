import React from "react";
import Modal from "react-modal";
import Draggable from "react-draggable";
import defaultavatar from "../../../../Main/Image-Icons/default-avatar.PNG";
import axios from "axios";
import TeamMemberChatItem from "./TeamMemberChatItem";

export default class TeamMemberChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TeamMemberChatContent: "",
      CurrentTeamMemberRoomChatList: [],
      BannnedOfMember: false,
      BannnedOfMemberChat: false,
      CheckNextRenderChatContent: false,
      CurrentIndexToRenderMemberChatContent: "1",
      NumberMemberChatContent: "5",
      checkBannedOfMemberIsOpen: false,
      checkBannedOfMemberChatIsOpen: false,
      checkUnBannedOfMemberIsOpen: false
    };
  }

  openCheckBannedOfMemberModal = () => {
    this.setState({
      checkBannedOfMemberIsOpen: true
    });
  };

  closeCheckBannedOfMemberModal = () => {
    this.setState({
      checkBannedOfMemberIsOpen: false
    });
  };

  openCheckBannedOfMemberChatModal = () => {
    this.setState({
      checkBannedOfMemberChatIsOpen: true
    });
  };

  closeCheckBannedOfMemberChatModal = () => {
    this.setState({
      checkBannedOfMemberChatIsOpen: false
    });
  };

  openCheckUnBannedOfMemberModal = () => {
    this.setState({
      checkUnBannedOfMemberIsOpen: true
    });
  };

  closeCheckUnBannedOfMemberModal = () => {
    this.setState({
      checkUnBannedOfMemberIsOpen: false
    });
  };

  componentDidMount = () => {
    axios
      .post("/getteamlist/getteammemberchatlist", {
        MemberChatID: this.props.MemberChoiceChatID,
        MemberID: this.props.MemberID,
        CurrentIndexToRenderMemberChatContent: this.state
          .CurrentIndexToRenderMemberChatContent,
        NumberMemberChatContent: this.state.NumberMemberChatContent
      })
      .then(res => {
        this.setState({
          CurrentTeamMemberRoomChatList: res.data.CurrentRoomChatContent,
          CheckNextRenderChatContent: res.data.CheckNextRenderChatContent,
          BannnedOfMember: res.data.BannnedOfMember,
          BannnedOfMemberChat: res.data.BannnedOfMemberChat
        });
      });

    this.mounted = true;
    this.semounted = true;

    this.props.socket.on("send-to-update-room-chat-list", data => {
      if (this.semounted) {
        if (
          this.props.MemberID === data.MemberID &&
          this.props.MemberChoiceChatID === data.MemberChatID
        ) {
          this.props.socket.emit("receive-to-update-room-chat-list", {
            MemberChatID: this.props.MemberChoiceChatID,
            MemberID: this.props.MemberID,
            CurrentIndexToRenderMemberChatContent: "1",
            NumberMemberChatContent: this.state.NumberMemberChatContent
          });
          this.setState({
            CurrentIndexToRenderMemberChatContent: "1"
          });
        }
      }
    });

    this.props.socket.on("update-room-chat-list", data => {
      if (this.mounted) {
        if (
          this.props.MemberID === data.MemberID &&
          this.props.MemberChoiceChatID === data.MemberChatID
        ) {
          this.setState({
            CurrentTeamMemberRoomChatList: data.CurrentRoomChatContent,
            CheckNextRenderChatContent: data.CheckNextRenderChatContent,
            BannnedOfMember: data.BannnedOfMember,
            BannnedOfMemberChat: data.BannnedOfMemberChat
          });
        }
      }
    });
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.MemberChoiceChatID !== this.props.MemberChoiceChatID) {
      axios
        .post("/getteamlist/getteammemberchatlist", {
          MemberChatID: nextProps.MemberChoiceChatID,
          MemberID: this.props.MemberID,
          CurrentIndexToRenderMemberChatContent: this.state
            .CurrentIndexToRenderMemberChatContent,
          NumberMemberChatContent: this.state.NumberMemberChatContent
        })
        .then(res => {
          this.setState({
            CurrentTeamMemberRoomChatList: res.data.CurrentRoomChatContent,
            CheckNextRenderChatContent: res.data.CheckNextRenderChatContent,
            BannnedOfMember: res.data.BannnedOfMember,
            BannnedOfMemberChat: res.data.BannnedOfMemberChat
          });
        });
    }
  };

  componentWillUnmount = () => {
    this.mounted = false;
    this.semounted = false;
  };

  handleTeamMemberChatContent = event => {
    this.setState({
      TeamMemberChatContent: event.target.value
    });
  };

  sendToUnBannedOfMemberToChat = () => {
    this.props.socket.emit("send-to-unbanned-of-member", {
      MemberChatID: this.props.MemberChoiceChatID,
      TeamID: this.props.TeamID,
      MemberID: this.props.MemberID
    });
  };

  sentMessageToTeamMemberChat = () => {
    if (this.state.BannnedOfMember === true) {
      this.openCheckBannedOfMemberModal();
    } else if (this.state.BannnedOfMemberChat === true) {
      this.openCheckBannedOfMemberChatModal();
    } else {
      this.props.socket.emit("send-message-to-member-chat", {
        MemberChatID: this.props.MemberChoiceChatID,
        MemberID: this.props.MemberID,
        MemberChatContent: this.state.TeamMemberChatContent
      });
      this.setState({
        TeamMemberChatContent: ""
      });
    }
  };

  pressEnterSendMessageContent = event => {
    if (event.key === "Enter") {
      this.sentMessageToTeamMemberChat();
    }
  };

  renderTeamMemberChat = () => {
    return (
      <div>
        <div className="user-team_team-menu-and-content__content___discuss____member-chat______avatar-fullname">
          <div className="user-team_team-menu-and-content__content___discuss____member-chat______avatar-fullname______avatar">
            <img src={defaultavatar} alt="default-avatar" />
          </div>
          <div className="user-team_team-menu-and-content__content___discuss____member-chat______avatar-fullname______fullname">
            <p>
              {this.props.MemberChoiceChatFullName}-
              {this.props.MemberChoiceChatID}
            </p>
          </div>
          <div
            onClick={() => this.props.setChooseTeamMemberChat(false)}
            className="user-team_team-menu-and-content__content___discuss____member-chat______avatar-fullname______close-box"
          >
            <i className="material-icons">&#xe5cd;</i>
          </div>
        </div>

        <div className="user-team_team-menu-and-content__content___discuss____member-chat______team-chat-content">
          {!this.state.CurrentTeamMemberRoomChatList.length ? (
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Hãy nhắn tin để liên lạc với bạn này
            </p>
          ) : (
            <div>
              {this.state.CurrentTeamMemberRoomChatList.map(
                (roomchatitem, roomchatindex) => (
                  <div key={roomchatindex}>
                    <TeamMemberChatItem
                      MemberChattedID={roomchatitem.MemberChattedID}
                      MemberChattedContent={roomchatitem.MemberChattedContent}
                      MemberChattedDate={roomchatitem.MemberChattedDate}
                      MemberID={this.props.MemberID}
                      MemberChoiceChatID={this.props.MemberChoiceChatID}
                    />
                  </div>
                )
              )}
            </div>
          )}
        </div>
        <div className="user-team_team-menu-and-content__content___discuss____member-chat______send-message">
          <div>
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              maxLength="2000"
              onChange={event => this.handleTeamMemberChatContent(event)}
              onKeyPress={event => this.pressEnterSendMessageContent(event)}
              value={this.state.TeamMemberChatContent}
            />
          </div>
          <div onClick={() => this.sentMessageToTeamMemberChat()}>
            <i className="material-icons">&#xe163;</i>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Draggable bounds={{ top: -300, left: 0, right: 600, bottom: 0 }}>
          <div className="user-team_team-menu-and-content__content___discuss____member-chat">
            {this.renderTeamMemberChat()}
          </div>
        </Draggable>

        {/*============================================================================================================================= */}

        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.checkBannedOfMemberIsOpen}
          onRequestClose={this.closeCheckBannedOfMemberModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>THÔNG BÁO</p>
            <p style={{ fontWeight: "bold" }}>
              Bạn không thể nhắn tin với {this.props.MemberChoiceChatFullName}-
              {this.props.MemberChoiceChatID}
              vì BẠN đã chặn mất roàii!!! Bạn cần bỏ chặn để nhắn tin!!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckBannedOfMemberModal()}
          >
            Không mở chặn!!!
          </button>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.sendToUnBannedOfMemberToChat()}
          >
            Mở chặn!!!
          </button>
        </Modal>

        {/*============================================================================================================================= */}

        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.checkBannedOfMemberChatIsOpen}
          onRequestClose={this.closeCheckBannedOfMemberChatModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>THÔNG BÁO</p>
            <p style={{ fontWeight: "bold" }}>
              Bạn không thể nhắn tin với {this.props.MemberChoiceChatFullName}-
              {this.props.MemberChoiceChatID}
              vì người đó đã chặn bạn mất roàii!!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckBannedOfMemberChatModal()}
          >
            Đã hỉu!!!
          </button>
        </Modal>

        {/*============================================================================================================================= */}

        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.checkUnBannedOfMemberIsOpen}
          onRequestClose={this.closeCheckUnBannedOfMemberModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>THÔNG BÁO</p>
            <p style={{ fontWeight: "bold" }}>
              Bạn đã mở chặn người đó rồi !!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckUnBannedOfMemberModal()}
          >
            QUá OKiii
          </button>
        </Modal>
      </div>
    );
  }
}
