import React from "react";
import axios from "axios";

export default class TeamsAllList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AllTeamList: [] };
  }

  componentDidMount = () => {
    axios
      .post("/getteamlist", {
        MemberID: this.props.MemberID
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          AllTeamList: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  chooseOneJoinedTeam = TeamID => {
    this.props.getTeamIDMemberChoice(TeamID);
    this.props.updateRenderTeamControl("teamcontent");
  };

  render() {
    return (
      <div className="user-teams_all__list">
        {this.state.AllTeamList.map((teamitem, teamindex) =>
          teamitem.TeamInfor.map(teamnameitem => {
            return (
              <div
                key={teamindex}
                onClick={() => this.chooseOneJoinedTeam(teamitem.TeamID)}
              >
                <img
                  style={{
                    height: "120px",
                    width: "120px",
                    margin: "32px 0 0 0"
                  }}
                  alt="team-logo"
                  src={teamnameitem.TeamLogo}
                />
                <p style={{ fontWeight: "bold" }}>{teamnameitem.TeamName}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
