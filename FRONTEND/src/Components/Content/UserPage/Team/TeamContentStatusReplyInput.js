import React from "react";

export default class TeamContentStatusReplyInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-team_content__statusreplyinput">
        <div>
          <input type="text" placeholder="Trả lời" />
        </div>
        <div>
          <i class="material-icons">&#xe163;</i>
        </div>
      </div>
    );
  }
}
