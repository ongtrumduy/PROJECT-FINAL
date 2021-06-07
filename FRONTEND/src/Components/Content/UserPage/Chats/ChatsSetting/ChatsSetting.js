import React from "react";

export default class ChatsSetting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>
          <span>
            Xóa Nội dung Cuộc trò chuyện với &nbsp;
            {this.props.MemberChoiceChatFullName}
          </span>
        </button>
        {this.props.BannedOfMemberChat ? (
          <button>
            <span>
              Chặn Cuộc trò chuyện với &nbsp;
              <span>{this.props.MemberChoiceChatFullName}</span>
            </span>
          </button>
        ) : (
          <button>
            <span>
              Bỏ chặn Cuộc trò chuyện với &nbsp;
              <span>{this.props.MemberChoiceChatFullName}</span>
            </span>
          </button>
        )}
      </div>
    );
  }
}
