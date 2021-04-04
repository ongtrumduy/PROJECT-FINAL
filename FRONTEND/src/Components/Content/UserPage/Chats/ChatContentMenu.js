import React from "react";
import defaultavatar from "../../../Main/Image-Icons/default-avatar.png";

export default class ChatContentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-chat_content__menu">
        <div>
          <img src={defaultavatar} />
        </div>
        <div className="user-chat_content__menu___fullname">
          <p>Phạm Duy</p>
        </div>
        <div>
          <button>Tệp</button>
        </div>
        <div>
          <button>Ghi chú</button>
        </div>
        <div className="user-chat_content__callsetting">
          <div className="user-chat_content__callsetting___call">
            <button>
              <i class="material-icons" style={{ fontSize: "32px" }}>
                &#xe070;
              </i>
            </button>
          </div>
          <div className="user-chat_content__callsetting___screenshare">
            <button>
              <i class="material-icons" style={{ fontSize: "32px" }}>
                &#xe0e2;
              </i>
            </button>
          </div>
          <div className="user-chat_content__callsetting___setting">
            <button>
              <i class="material-icons" style={{ fontSize: "32px" }}>
                &#xe8b8;
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
