import React from "react";

export default class TeamName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_name">
        <div className="user-team_name__title">
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>Tên nhóm</p>
        </div>
        <div className="user-team_name__content">TeamName</div>
      </div>
    );
  }
}
