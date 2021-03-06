import React from "react";
import "./UserDashBoard.css";
import UserFooter from "./UserFooter";
import UserContent from "./UserContent";
import UserHeader from "./UserHeader";
import UserMenu from "./UserMenu";

export default class UserDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contentState: "" };
  }

  updateContentState = state => {
    this.setState({ contentState: state });
  };

  renderUserDashBoard = () => {
    return (
      <div className="user-dashboard">
        <UserHeader updateLogPage={this.props.updateLogPage} />
        <div className="user-dashboard_container">
          <UserMenu updateContentState={this.updateContentState} />
          <UserContent contentState={this.state.contentState} />
        </div>
        <UserFooter />
      </div>
    );
  };

  render() {
    return <div>{this.renderUserDashBoard()}</div>;
  }
}
