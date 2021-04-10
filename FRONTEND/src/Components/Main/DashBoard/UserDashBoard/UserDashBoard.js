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
      .post("http://localhost:8081/getfullname", {
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
        />
        <div className="user-dashboard_container">
          <UserMenu updateContentState={this.updateContentState} />
          <UserContent
            contentState={this.state.contentState}
            MemberID={this.props.MemberID}
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
