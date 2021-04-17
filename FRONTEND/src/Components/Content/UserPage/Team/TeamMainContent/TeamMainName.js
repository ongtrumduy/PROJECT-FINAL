import React from "react";

export default class TeamMainName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-team_team-name__teammainname">
        {this.props.ChooseTeamInfor.map((teaminforitem, teaminforindex) => {
          return (
            <div key={teaminforindex}>
              <div className="user-team_team-name__teammainname___title">
                <img alt="team-logo" src={teaminforitem.TeamLogo} />
              </div>
              <div className="user-team_team-name__teammainname___content">
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
