import React from "react";
import TeamContentContent from "./TeamContentContent";
import TeamContentMenu from "./TeamContentMenu";
import TeamContentCreateNew from "./TeamContentCreateNew";

export default class TeamContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_content">
        <TeamContentMenu />
        <TeamContentContent />
        <TeamContentCreateNew />
      </div>
    );
  }
}
