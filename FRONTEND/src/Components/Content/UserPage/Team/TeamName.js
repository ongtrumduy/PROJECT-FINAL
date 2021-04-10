import React from "react";
import logoaaa from "../../../Main/Image-Icons/aaa.JPG";

export default class TeamName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_name">
        {this.props.ChooseTeamInfor.map((teaminforitem, teaminforindex) => {
          return (
            <div key={teaminforindex}>
              <div className="user-team_name__title">
                <img src={teaminforitem.TeamLogo} />
              </div>
              <div className="user-team_name__content">
                <p>{teaminforitem.TeamName}</p>
                <span>
                  Mã nhóm: <br></br>
                  {this.props.TeamID}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
