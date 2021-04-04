import React from "react";
import logo11 from "../../../Main/Image-Icons/11.PNG";
import logo22 from "../../../Main/Image-Icons/22.PNG";
import logo33 from "../../../Main/Image-Icons/33.PNG";
import logo44 from "../../../Main/Image-Icons/44.PNG";

export default class TeamName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_name">
        <div className="user-team_name__title">
          <img src={logo11} />
        </div>
        <div className="user-team_name__content">
          <p>Học lập trình</p>
        </div>
      </div>
    );
  }
}
