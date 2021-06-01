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
      CurrentTeamDiscussContent: [],
      CurrentTeamMemberRoomChatList: [],
      chooseTeamMemberChat: false,
      MemberChoiceChatID: "",
      modalCheckChatWithSelfIsOpen: false,
      CurrentIndexToRenderDiscussContent: "1",
      NumberRenderDiscussContent: "5",
      CurrentIndexToRenderMemberChatContent: "1",
      NumberMemberChatContent: "5",
      CheckNextRenderDiscussContent: false,
      CheckNextRenderChatContent: false
    };
  }

  componentDidMount = () => {
    axios
      .post("/getteamlist/getteamdiscuss", {
        TeamID: this.props.TeamID,
        CurrentIndexToRenderDiscussContent: this.state
          .CurrentIndexToRenderDiscussContent,
        NumberRenderDiscussContent: this.state.NumberRenderDiscussContent
      })
      .then(res => {
        // console.log(
        //   "Đổ về dữ lieuj cái này xem saooooooooooooooooooooooooooo ",
        //   res.data
        // );

        this.setState({
          CurrentTeamDiscussContent: res.data.CurrentTeamDiscussContent,
          CheckNextRenderDiscussContent: res.data.CheckNextRenderDiscussContent
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.mounted = true;

    this.props.socket.on("send-to-update-team-discuss-content", data => {
      if (this.props.TeamID === data.TeamID) {
        this.props.socket.emit("receive-to-update-team-discuss-content", {
          MemberID: this.props.MemberID,
          TeamID: this.props.TeamID,
          CurrentIndexToRenderDiscussContent: "1",
          NumberRenderDiscussContent: this.state.NumberRenderDiscussContent
        });
        this.setState({
          CurrentIndexToRenderDiscussContent: "1"
        });
      }
    });

    this.props.socket.on("update-team-discuss-content", data => {
      if (this.mounted) {
        if (this.props.TeamID === data.TeamID) {
          // console.log("Đổ về dữ lieuj cái này xem sao ", data);
          this.setState({
            CurrentTeamDiscussContent: data.CurrentTeamDiscussContent,
            CheckNextRenderDiscussContent: data.CheckNextRenderDiscussContent
          });
        }
      }
    });
    //=============================================================================
    this.momounted = true;

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
    this.momounted = false;
  };

  openModalCheckChatWithSelfModal = () => {
    this.setState({ modalCheckChatWithSelfIsOpen: true });
  };

  closeModalCheckChatWithSelfModal = () => {
    this.setState({ modalCheckChatWithSelfIsOpen: false });
  };

  // getCurrentIndexToRenderMemberChatContent = currentIndexToRender => {
  //   this.setState({
  //     currentIndexToRenderMemberChatContent: currentIndexToRender
  //   });
  // };

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

  sendToSeeOldDiscussContent = () => {
    this.props.socket.emit("receive-to-update-team-discuss-content", {
      MemberID: this.props.MemberID,
      TeamID: this.props.TeamID,
      CurrentIndexToRenderDiscussContent:
        Number(this.state.CurrentIndexToRenderDiscussContent) + 1 + "",
      NumberRenderDiscussContent: this.state.NumberRenderDiscussContent
    });
    this.setState({
      CurrentIndexToRenderDiscussContent:
        Number(this.state.CurrentIndexToRenderDiscussContent) + 1 + ""
    });
  };

  render() {
    return (
      <div className="user-team_team-menu-and-content__content___discuss">
        <TeamDiscussContent
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
          CurrentTeamDiscussContent={this.state.CurrentTeamDiscussContent}
          CheckNextRenderDiscussContent={
            this.state.CheckNextRenderDiscussContent
          }
          setChoiceTeamMemberChatID={this.setChoiceTeamMemberChatID}
          sendToSeeOldDiscussContent={this.sendToSeeOldDiscussContent}
        />
        <TeamMemberChat
          chooseTeamMemberChat={this.state.chooseTeamMemberChat}
          MemberChoiceChatID={this.state.MemberChoiceChatID}
          CurrentTeamMemberRoomChatList={
            this.state.CurrentTeamMemberRoomChatList
          }
          setChooseTeamMemberChat={this.setChooseTeamMemberChat}
          // getCurrentIndexToRenderMemberChatContent={
          //   this.getCurrentIndexToRenderMemberChatContent
          // }
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
