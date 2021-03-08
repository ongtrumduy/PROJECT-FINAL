import React from "react";

export default class TeamCreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createTeamForm = () => {
    return (
      <div>
        <span>Tên nhóm</span>
      </div>
    );
  };

  render() {
    return <div>TeamCreateTeam</div>;
  }
}
