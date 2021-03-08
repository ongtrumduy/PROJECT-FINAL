import React from "react";
import "./Team.css";
import TeamAllList from "./TeamAllList";

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-teams">
        <div className="user-teams_control">
          <div className="user-teams_control__title">
            <p>Tất cả nhóm</p>
          </div>
          <div className="user-teams_control__button">
            <button>Tạo nhóm</button>
            <button>Tham gia nhóm bằng mã</button>
          </div>
        </div>
        <TeamAllList />
      </div>
    );
  }
}
