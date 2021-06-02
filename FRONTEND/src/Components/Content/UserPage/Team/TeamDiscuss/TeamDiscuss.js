import React from "react";
import axios from "axios";
import Modal from "react-modal";

import "./TeamDiscuss.css";
import TeamDiscussContent from "./TeamAllDiscussContent";
import TeamDiscussCreateNew from "./TeamDiscussCreateNew";
import TeamMemberChat from "../TeamMemberChat/TeamMemberChat";

export default class TeamDiscuss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentTeamMemberRoomChatList: [],
      chooseTeamMemberChat: false,
      MemberChoiceChatID: "",
      modalCheckChatWithSelfIsOpen: false,
      CurrentIndexToRenderMemberChatContent: "1",
      NumberMemberChatContent: "5",
      CheckNextRenderChatContent: false
    };
  }

  componentDidMount = () => {
    this.mounted = true;

    this.props.socket.on("update-room-chat-list", data => {
      if (this.mounted) {
        if (
          (this.props.MemberID === data.MemberID &&
            this.state.MemberChoiceChatID === data.MemberChatID) ||
          (this.props.MemberID === data.MemberChatID &&
            this.state.MemberChoiceChatID === data.MemberID)
        )
          this.setState({
            CurrentTeamMemberRoomChatList: data.CurrentRoomChatContent,
            checkNextRenderMemberChatContent: data.checkNextRenderChatContent
          });
      }
    });
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  openModalCheckChatWithSelfModal = () => {
    this.setState({ modalCheckChatWithSelfIsOpen: true });
  };

  closeModalCheckChatWithSelfModal = () => {
    this.setState({ modalCheckChatWithSelfIsOpen: false });
  };

  setChoiceTeamMemberChatID = memberID => {
    if (this.props.MemberID !== memberID) {
      this.setState({
        MemberChoiceChatID: memberID
      });

      axios
        .post("/getteamlist/getteammemberchatlist", {
          MemberChatID: memberID,
          TeamID: this.props.TeamID,
          MemberID: this.props.MemberID
        })
        .then(res => {
          console.log(res.data);

          this.setState({
            CurrentTeamMemberRoomChatList: res.data.CurrentRoomChatContent,
            checkNextRenderMemberChatContent:
              res.data.checkNextRenderChatContent
          });
        });

      this.setChooseTeamMemberChat(true);
    } else {
      this.openModalCheckChatWithSelfModal();
    }
  };

  setChooseTeamMemberChat = chooseTeamMemberChat => {
    this.setState({
      chooseTeamMemberChat: chooseTeamMemberChat
    });
  };

  render() {
    return (
      <div className="user-team_team-menu-and-content__content___discuss">
        <TeamDiscussContent
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
          setChoiceTeamMemberChatID={this.setChoiceTeamMemberChatID}
        />
        <TeamMemberChat
          chooseTeamMemberChat={this.state.chooseTeamMemberChat}
          MemberChoiceChatID={this.state.MemberChoiceChatID}
          CurrentTeamMemberRoomChatList={
            this.state.CurrentTeamMemberRoomChatList
          }
          setChooseTeamMemberChat={this.setChooseTeamMemberChat}
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
        />
        <TeamDiscussCreateNew
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
        />
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
          isOpen={this.state.modalCheckChatWithSelfIsOpen}
          onRequestClose={this.closeModalCheckChatWithSelfModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NHẮC NHỞ</p>
            <p style={{ fontWeight: "bold" }}>
              Bạn không thể chọn nhắn tin với bản thân !!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={this.closeModalCheckChatWithSelfModal}
          >
            Đóng
          </button>
        </Modal>
        ;
      </div>
    );
  }
}
