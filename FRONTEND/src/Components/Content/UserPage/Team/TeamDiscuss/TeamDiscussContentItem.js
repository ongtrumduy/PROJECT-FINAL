import React from "react";
import Modal from "react-modal";

import defaultavatar from "../../../../Main/Image-Icons/default-avatar.PNG";
import TeamDiscussContentReplyInput from "./TeamDiscussContentReplyInput";

export default class TeamDiscussContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TeamDiscussContent: "",
      setDiscussReply: false,
      checkEditTeamDiscussIsOpen: false,
      checkDeleteTeamDiscussIsOpen: false,
      openEditAndDeleteMode: false,
      checkChangeToEditMode: false
    };
  }

  openCheckEditTeamDiscussModal = () => {
    this.setState({
      checkEditTeamDiscussIsOpen: true
    });
  };

  closeCheckEditTeamDiscussModal = () => {
    this.setState({
      checkEditTeamDiscussIsOpen: false
    });
  };

  openCheckDeleteTeamDiscussModal = () => {
    this.setState({
      checkDeleteTeamDiscussIsOpen: true
    });
  };

  closeCheckDeleteTeamDiscussModal = () => {
    this.setState({
      checkDeleteTeamDiscussIsOpen: false
    });
  };

  setOpenEditAndDeleteMode = () => {
    this.props.setTeamChoiceDiscussID(this.props.TeamDiscussID);

    if (this.state.openEditAndDeleteMode) {
      this.setState({
        openEditAndDeleteMode: false
      });
    } else {
      this.setState({
        openEditAndDeleteMode: true
      });
    }
  };

  handleMemberDiscussContent = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  cancelChangeToEditMode = () => {
    this.setState({
      checkChangeToEditMode: false
    });
  };

  changeToEditModeToEditTeamDiscuss = () => {
    this.closeCheckEditTeamDiscussModal();
    this.setState({
      MemberDiscussContent: this.props.MemberDiscussContent,
      checkChangeToEditMode: true,
      openEditAndDeleteMode: false
    });
  };

  sendToEditTeamDiscussContent = () => {
    this.setState({
      checkChangeToEditMode: false
    });
    this.props.socket.emit("send-to-edit-team-discuss", {
      TeamID: this.props.TeamID,
      MemberID: this.props.MemberID,
      TeamDiscussID: this.props.TeamDiscussID,
      MemberDiscussContent: this.state.MemberDiscussContent
    });
  };

  sendToDeleteTeamDiscussContent = () => {
    this.setState({
      checkChangeToEditMode: false
    });
    this.closeCheckDeleteTeamDiscussModal();
    this.props.socket.emit("send-to-delete-team-discuss", {
      TeamID: this.props.TeamID,
      MemberID: this.props.MemberID,
      TeamDiscussID: this.props.TeamDiscussID
    });
  };

  componentDidMount = () => {
    this.mounted = true;
    this.edmounted = true;
    this.demounted = true;

    this.props.socket.on("receive-to-close-all-discuss-reply", data => {
      if (this.mounted) {
        if (
          this.props.socket.id === data.SocketID &&
          this.props.TeamID === data.TeamID
        ) {
          this.setState({
            setDiscussReply: false
          });
        }
      }
    });

    this.props.socket.on("update-edit-team-discuss-content", data => {
      if (this.edmounted) {
        if (
          this.props.TeamDiscussID === data.TeamDiscussID &&
          this.props.TeamID === data.TeamID
        ) {
          this.setState({
            checkChangeToEditMode: false,
            openEditAndDeleteMode: false
          });
        }
      }
    });

    this.props.socket.on("update-delete-team-discuss-content", data => {
      if (this.demounted) {
        if (
          this.props.TeamDiscussID === data.TeamDiscussID &&
          this.props.TeamID === data.TeamID
        ) {
          this.setState({
            checkChangeToEditMode: false,
            openEditAndDeleteMode: false
          });
        }
      }
    });
  };

  componentWillUnmount = () => {
    this.edmounted = false;
    this.demounted = false;
    this.mounted = false;
  };

  handleSetDiscussReply = () => {
    this.setState({
      setDiscussReply: true
    });
  };

  renderContentDiscussReply = () => {
    if (this.state.setDiscussReply) {
      return (
        <TeamDiscussContentReplyInput
          MemberDiscussID={this.props.MemberDiscussID}
          TeamDiscussID={this.props.TeamDiscussID}
          MemberID={this.props.MemberID}
          TeamID={this.props.TeamID}
          socket={this.props.socket}
          setChoiceTeamMemberChatID={this.props.setChoiceTeamMemberChatID}
          CheckMemberIsAdmin={this.props.CheckMemberIsAdmin}
        />
      );
    } else {
      return (
        <div>
          <div
            className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________reply"
            onClick={() => this.handleSetDiscussReply()}
          >
            <div>
              <i className="material-icons">&#xe15e;</i>
            </div>
            <div>
              <span>Xem b??nh lu???n</span>
            </div>
          </div>
        </div>
      );
    }
  };

  renderTeamDiscussContent = () => {
    return (
      <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss">
        <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______avatar">
          <img alt="default-avatar" src={defaultavatar} />
        </div>
        <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox">
          <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime">
            <div
              onClick={() =>
                this.props.setChoiceTeamMemberChatID(
                  this.props.MemberDiscussID,
                  this.props.MemberDiscussFullName
                )
              }
              className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________fullname"
            >
              {this.props.MemberDiscussFullName}-{this.props.MemberDiscussID}
            </div>
            <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________timedate">
              {this.props.MemberDiscussTime}
            </div>

            <div
              style={
                this.props.CheckMemberIsAdmin === true ||
                this.props.MemberID === this.props.MemberDiscussID
                  ? { display: "inline" }
                  : { display: "none" }
              }
              onClick={() => this.setOpenEditAndDeleteMode()}
              className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________edit-and-delete"
            >
              <i className="material-icons">{"more_horiz"}</i>
            </div>

            {this.props.MemberDiscussID === this.props.MemberID ? (
              <div
                style={
                  this.state.openEditAndDeleteMode === true &&
                  this.props.TeamChoiceDiscussID === this.props.TeamDiscussID
                    ? { display: "inline" }
                    : { display: "none" }
                }
                className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________edit-and-delete________edit-and-delete-button"
              >
                <p onClick={() => this.openCheckEditTeamDiscussModal()}>
                  Ch???nh s???a
                </p>
                <p onClick={() => this.openCheckDeleteTeamDiscussModal()}>
                  X??a
                </p>
              </div>
            ) : (
              <div
                style={
                  this.state.openEditAndDeleteMode === true &&
                  this.props.TeamChoiceDiscussID === this.props.TeamDiscussID
                    ? { display: "inline" }
                    : { display: "none" }
                }
                className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________nameandtime_________edit-and-delete________delete-button"
              >
                <p onClick={() => this.openCheckDeleteTeamDiscussModal()}>
                  X??a
                </p>
              </div>
            )}
          </div>

          <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________content">
            {this.state.checkChangeToEditMode === false ? (
              <p>{this.props.MemberDiscussContent}</p>
            ) : (
              <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________content________edit-mode">
                <div>
                  <textarea
                    value={this.state.MemberDiscussContent}
                    name="MemberDiscussContent"
                    onChange={event => this.handleMemberDiscussContent(event)}
                  />
                </div>
                <div>
                  <input
                    type="button"
                    value="C???p nh???t"
                    onClick={() => this.sendToEditTeamDiscussContent()}
                  />
                  <input
                    type="button"
                    value="H???y"
                    onClick={() => this.cancelChangeToEditMode()}
                  />
                </div>
              </div>
            )}
          </div>
          {this.renderContentDiscussReply()}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderTeamDiscussContent()}

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
          isOpen={this.state.checkEditTeamDiscussIsOpen}
          onRequestClose={this.closeCheckEditTeamDiscussModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>TH??NG B??O</p>
            <p style={{ fontWeight: "bold" }}>
              B???n c?? mu???n ch???nh s???a Th???o lu???n n??y kh??ng?
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.changeToEditModeToEditTeamDiscuss()}
          >
            C?? ch???
          </button>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckEditTeamDiscussModal()}
          >
            ???n nh???m
          </button>
        </Modal>

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
          isOpen={this.state.checkDeleteTeamDiscussIsOpen}
          onRequestClose={this.closeCheckDeleteTeamDiscussModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>TH??NG B??O</p>
            <p style={{ fontWeight: "bold" }}>
              B???n c?? ch???c ch???n mu???n x??a Th???o lu???n n??y kh??ng ???
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.sendToDeleteTeamDiscussContent()}
          >
            Ch???c ch???n!!
          </button>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckDeleteTeamDiscussModal()}
          >
            ???n nh???m!!
          </button>
        </Modal>
      </div>
    );
  }
}
