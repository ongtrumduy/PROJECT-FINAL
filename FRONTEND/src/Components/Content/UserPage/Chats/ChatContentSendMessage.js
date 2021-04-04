import React from "react";

export default class ChatContentSendMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-team_content__createnewinput">
        <div>
          <input type="text" placeholder="Gửi tin nhắn" />
        </div>
        <div>
          <i class="material-icons">&#xe163;</i>
        </div>
      </div>
    );
  }
}
