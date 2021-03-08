import React from "react";
import avatar from "../../../Main/Image-Icons/default-avatar.png";

export default class ChatListContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-chat_list__content">
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <div className="user-chat_list__infor">
                  <div className="user-chat_list__infor___avatar">
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={avatar}
                    />
                  </div>
                  <div className="user-chat_list__infor___fullname">
                    <span> Phạm Duy</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-chat_list__infor">
                  <div className="user-chat_list__infor___avatar">
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={avatar}
                    />
                  </div>
                  <div className="user-chat_list__infor___fullname">
                    <span> Phạm Duy</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-chat_list__infor">
                  <div className="user-chat_list__infor___avatar">
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={avatar}
                    />
                  </div>
                  <div className="user-chat_list__infor___fullname">
                    <span> Phạm Duy</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-chat_list__infor">
                  <div className="user-chat_list__infor___avatar">
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={avatar}
                    />
                  </div>
                  <div className="user-chat_list__infor___fullname">
                    <span> Phạm Duy</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-chat_list__infor">
                  <div className="user-chat_list__infor___avatar">
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={avatar}
                    />
                  </div>
                  <div className="user-chat_list__infor___fullname">
                    <span> Phạm Duy</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-chat_list__infor">
                  <div className="user-chat_list__infor___avatar">
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={avatar}
                    />
                  </div>
                  <div className="user-chat_list__infor___fullname">
                    <span> Phạm Duy</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-chat_list__infor">
                  <div className="user-chat_list__infor___avatar">
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={avatar}
                    />
                  </div>
                  <div className="user-chat_list__infor___fullname">
                    <span> Phạm Duy</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-chat_list__infor">
                  <div className="user-chat_list__infor___avatar">
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={avatar}
                    />
                  </div>
                  <div className="user-chat_list__infor___fullname">
                    <span> Phạm Duy</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
