import React from "react";
import Activities from "../../../Content/UserPage/Activities/Activities";
import Assignments from "../../../Content/UserPage/Assignments/Assignments";
import Chats from "../../../Content/UserPage/Chats/Chats";
import Excercises from "../../../Content/UserPage/Excercises/Excercises";
import Teams from "../../../Content/UserPage/Teams/Teams";
import Reminders from "../../../Content/UserPage/Reminders/Reminders";

export default class UserContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderUserContent = () => {
    switch (this.props.contentState) {
      case "activities":
        return <Activities MemberID={this.props.MemberID} />;
      case "chats":
        return <Chats MemberID={this.props.MemberID} />;
      case "teams":
        return <Teams MemberID={this.props.MemberID} />;
      case "assignments":
        return <Assignments MemberID={this.props.MemberID} />;
      case "excercises":
        return <Excercises MemberID={this.props.MemberID} />;
      case "reminders":
        return <Reminders MemberID={this.props.MemberID} />;
      default:
        return <Teams MemberID={this.props.MemberID} />;
    }
  };

  render() {
    return (
      <div className="user-dashboard_container__content">
        {this.renderUserContent()}
      </div>
    );
  }
}
