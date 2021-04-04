import React from "react";

export default class TeamContentCreateNewInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-team_content__createnewinput">
        <div>
          <input type="text" placeholder="Bắt đầu cuộc thảo luận mới" />
        </div>
        <div>
          <i class="material-icons">&#xe163;</i>
        </div>
      </div>
    );
  }
}
