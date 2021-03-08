import React from "react";
import TeamName from "./TeamName";
import TeamContent from "./TeamContent";
import "./Team.css";

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team">
        <TeamName />
        <TeamContent />
      </div>
    );
  }
}
