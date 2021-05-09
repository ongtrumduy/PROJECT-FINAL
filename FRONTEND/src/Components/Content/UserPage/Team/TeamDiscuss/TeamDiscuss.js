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
      TeamDiscussContent: [],
      chooseTeamMemberChat: false,
      ChoiceMemberChatID: "",
      modalIsOpen: false
    };
  }

  componentDidMount = () => {
    axios
      .post("/getteamlist/getteamdiscuss", {
        TeamID: this.props.TeamID
      })
      .then(res => {
        this.setState({
          TeamDiscussContent: res.data.TeamDiscussContent
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.props.socket.on("update-team-discuss-content", data => {
      this.setState({
        TeamDiscussContent: data.TeamDiscussContent
      });
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  setChoiceTeamMemberChatID = memberID => {
    if (this.props.MemberID !== memberID) {
      this.setState({
        ChoiceMemberChatID: memberID
      });
      this.setChooseTeamMemberChat(true);
    } else {
      this.openModal();
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
          TeamDiscussContent={this.state.TeamDiscussContent}
          setChoiceTeamMemberChatID={this.setChoiceTeamMemberChatID}
        />
        <TeamMemberChat
          chooseTeamMemberChat={this.state.chooseTeamMemberChat}
          ChoiceMemberChatID={this.state.ChoiceMemberChatID}
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
              backgroundColor: "#ecf0f1"
            }
          }}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <div>
            <p style={{ fontWeight: "bold" }}>
              Bạn không thể chọn nhắn tin với bản thân !!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={this.closeModal}
          >
            Đóng
          </button>
        </Modal>
        ;
      </div>
    );
  }
}
