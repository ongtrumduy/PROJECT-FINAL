import React from "react";
import logoaaa from "../../../Main/Image-Icons/aaa.JPG";

export default class TeamContentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_content__menu">
        <div>
          <img src={logoaaa} />
        </div>
        <div>
          <button>Thảo luận</button>
        </div>
        <div>
          <button>Tệp</button>
        </div>
        <div>
          <button>Ghi chú</button>
        </div>
        <div className="user-team_content__callsetting">
          <div className="user-team_content__callsetting___call">
            <button>
              <i className="material-icons" style={{ fontSize: "32px" }}>
                &#xe070;
              </i>
            </button>
          </div>
          <div className="user-team_content__callsetting___setting">
            <button>
              <i className="material-icons" style={{ fontSize: "32px" }}>
                &#xe8b8;
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
