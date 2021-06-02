import React from "react";
import TeamDiscussCommentContentItem from "./TeamDiscussCommentContentItem";
import axios from "axios";

export default class TeamDiscussContentReplyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MemberDiscussComment: "",
      CurrentTeamDiscussCommentContent: [],
      CurrentIndexToRenderDiscussCommentContent: "1",
      NumberRenderDiscussCommentContent: "3",
      CheckNextRenderDiscussCommentContent: false
    };
  }

  componentDidMount = () => {
    axios
      .post("/getteamlist/getteamdiscusscomment", {
        MemberID: this.props.MemberID,
        TeamID: this.props.TeamID,
        TeamDiscussID: this.props.TeamDiscussID,
        CurrentIndexToRenderDiscussCommentContent: this.state
          .CurrentIndexToRenderDiscussCommentContent,
        NumberRenderDiscussCommentContent: this.state
          .NumberRenderDiscussCommentContent
      })
      .then(res => {
        // console.log("Lấy dữ liệu đổ về comment cho tao", res.data);
        this.setState({
          CurrentTeamDiscussCommentContent:
            res.data.CurrentTeamDiscussCommentContent,
          CheckNextRenderDiscussCommentContent:
            res.data.CheckNextRenderDiscussCommentContent
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.mounted = true;

    this.props.socket.on(
      "send-to-update-team-discuss-comment-content",
      data => {
        // console.log("Lấy dữ liệu xem socket thế nào ", data);
        // console.log("Lấy ra socket của thằng này đây ", this.props.socket.id);
        if (this.props.TeamID === data.TeamID) {
          if (this.props.socket.id === data.SocketID) {
            this.props.socket.emit(
              "receive-to-update-team-discuss-comment-content",
              {
                MemberID: this.props.MemberID,
                TeamID: this.props.TeamID,
                TeamDiscussID: this.props.TeamDiscussID,
                CurrentIndexToRenderDiscussCommentContent: "1",
                NumberRenderDiscussCommentContent: this.state
                  .NumberRenderDiscussCommentContent
              }
            );
            this.setState({
              CurrentIndexToRenderDiscussCommentContent: "1"
            });
          } else {
            this.props.socket.emit(
              "receive-to-update-team-discuss-comment-content",
              {
                MemberID: this.props.MemberID,
                TeamID: this.props.TeamID,
                TeamDiscussID: this.props.TeamDiscussID,
                CurrentIndexToRenderDiscussCommentContent: this.state
                  .CurrentIndexToRenderDiscussCommentContent,
                NumberRenderDiscussCommentContent: this.state
                  .NumberRenderDiscussCommentContent
              }
            );
          }
        }
      }
    );

    this.props.socket.on("update-team-discuss-comment-content", data => {
      if (this.mounted) {
        if (this.props.TeamDiscussID === data.TeamDiscussID) {
          // console.log(
          //   "Đổ về dữ lieuj cái socket này cơ mà đm mmmmmmmmmmmmmmmmm ",
          //   data
          // );
          this.setState({
            CurrentTeamDiscussCommentContent:
              data.CurrentTeamDiscussCommentContent,
            CheckNextRenderDiscussCommentContent:
              data.CheckNextRenderDiscussCommentContent
          });
        }
      }
    });
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  sendToSeeOldDiscussCommentContent = () => {
    this.props.socket.emit("receive-to-update-team-discuss-comment-content", {
      MemberID: this.props.MemberID,
      TeamID: this.props.TeamID,
      TeamDiscussID: this.props.TeamDiscussID,
      CurrentIndexToRenderDiscussCommentContent:
        Number(this.state.CurrentIndexToRenderDiscussCommentContent) + 1 + "",
      NumberRenderDiscussCommentContent: this.state
        .NumberRenderDiscussCommentContent
    });
    this.setState({
      CurrentIndexToRenderDiscussCommentContent:
        Number(this.state.CurrentIndexToRenderDiscussCommentContent) + 1 + ""
    });
  };

  handleCreateNewMemberComment = event => {
    this.setState({
      MemberDiscussComment: event.target.value
    });
  };

  sentNewDiscussCommentCreate = () => {
    this.props.socket.emit("create-new-discuss-comment", {
      MemberID: this.props.MemberID,
      MemberDiscussID: this.props.MemberDiscussID,
      TeamDiscussID: this.props.TeamDiscussID,
      TeamID: this.props.TeamID,
      MemberDiscussComment: this.state.MemberDiscussComment
    });
  };

  pressEnterNewDiscussComment = event => {
    if (event.key === "Enter") {
      this.sentNewDiscussCommentCreate();
      this.setState({
        MemberDiscussComment: ""
      });
    }
  };

  render() {
    return (
      <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________discussreplyinput">
        <div
          style={
            this.state.CheckNextRenderDiscussCommentContent
              ? { display: "block" }
              : { display: "none" }
          }
          onClick={() => this.sendToSeeOldDiscussCommentContent()}
          className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________discussreplyinput________seen-old-comment"
        >
          <p>Xem lại các bình luận trước đó!!!</p>
        </div>
        {this.state.CurrentTeamDiscussCommentContent.map(
          (commentitem, commemtindex) => (
            <div key={commemtindex}>
              <TeamDiscussCommentContentItem
                MemberCommentID={commentitem.MemberCommentID}
                MemberCommentTime={commentitem.MemberCommentTime}
                MemberCommentContent={commentitem.MemberCommentContent}
                MemberCommentFullName={commentitem.MemberCommentFullName}
                setChoiceTeamMemberChatID={this.props.setChoiceTeamMemberChatID}
              />
            </div>
          )
        )}
        <div className="user-team_team-menu-and-content__content___discuss_____alldiscuss_____discuss_______discussbox________discussreplyinput_________send">
          <div>
            <input
              type="text"
              onChange={event => this.handleCreateNewMemberComment(event)}
              onKeyPress={this.pressEnterNewDiscussComment}
              value={this.state.MemberDiscussComment}
              maxLength="4000"
              placeholder="Trả lời"
            />
          </div>
          <div onClick={() => this.sentNewDiscussCommentCreate()}>
            <i className="material-icons">&#xe163;</i>
          </div>
        </div>
      </div>
    );
  }
}
