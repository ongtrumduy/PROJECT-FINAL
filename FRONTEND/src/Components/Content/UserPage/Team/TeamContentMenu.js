import React from "react";
import logo11 from "../../../Main/Image-Icons/11.PNG";
import logo22 from "../../../Main/Image-Icons/22.PNG";
import logo33 from "../../../Main/Image-Icons/33.PNG";
import logo44 from "../../../Main/Image-Icons/44.PNG";
export default class TeamContentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_content__menu">
        <div>
          <img src={logo11} />
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
              <i class="material-icons" style={{ fontSize: "32px" }}>
                &#xe070;
              </i>
            </button>
          </div>
          <div className="user-team_content__callsetting___setting">
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
