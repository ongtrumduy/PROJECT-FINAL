import React from "react";
import axios from "axios";

import "./UserDashBoard.css";
import UserFooter from "./UserFooter";
import UserContent from "./UserContent";
import UserHeader from "./UserHeader";
import UserMenu from "./UserMenu";

export default class UserDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentState: "teams",
      FirstnameMember: "",
      LastnameMember: ""
    };
  }

  updateContentState = state => {
    this.setState({ contentState: state });
  };

  componentDidMount = () => {
    axios
      .post("/getfullname", {
        MemberID: this.props.MemberID
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          FirstnameMember: res.data.Firstname,
          LastnameMember: res.data.Lastname
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.props.socket.emit("sent-online-memberID", {
      MemberID: this.props.MemberID
    });
  };

  renderUserDashBoard = () => {
    return (
      <div className="user-dashboard">
        <UserHeader
          MemberID={this.props.MemberID}
          setMemberIDForMemberLogin={this.props.setMemberIDForMemberLogin}
          updateRenderLogPage={this.props.updateRenderLogPage}
          FirstnameMember={this.state.FirstnameMember}
          LastnameMember={this.state.LastnameMember}
          socket={this.props.socket}
        />
        <div className="user-dashboard_container">
          <UserMenu
            updateContentState={this.updateContentState}
            socket={this.props.socket}
          />
          <UserContent
            contentState={this.state.contentState}
            MemberID={this.props.MemberID}
            socket={this.props.socket}
          />
        </div>
        <UserFooter />
      </div>
    );
  };

  render() {
    return <div>{this.renderUserDashBoard()}</div>;
  }
}
