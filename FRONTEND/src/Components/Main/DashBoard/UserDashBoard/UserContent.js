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
        return <Activities />;
      case "chats":
        return <Chats />;
      case "teams":
        return <Teams />;
      case "assignments":
        return <Assignments />;
      case "excercises":
        return <Excercises />;
      case "reminders":
        return <Reminders />;
      default:
        return <Teams />;
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
