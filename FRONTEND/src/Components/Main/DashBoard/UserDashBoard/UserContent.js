import React from "react";
import Activities from "../../../Content/Activities";
import Assignments from "../../../Content/Assignments";
import Chats from "../../../Content/Chats";
import Excercises from "../../../Content/Excercises";
import Teams from "../../../Content/Teams";

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
