import React from "react";

export default class TeamMainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setSelectTeam: "discuss" };
  }

  setSelectTeamClickChoose = setSelect => {
    this.props.setSelectTeamContentClickChoose(setSelect);
    this.setState({
      setSelectTeam: setSelect
    });
  };

  render() {
    return (
      <div className="user-team_team-menu-and-content__menu">
        {this.props.ChooseTeamInfor.map((teaminforitem, teaminforindex) => (
          <div key={teaminforindex}>
            <img src={teaminforitem.TeamLogo} />
          </div>
        ))}
        <div>
          <button
            style={
              this.state.setSelectTeam === "discuss"
                ? {
                    color: "blue",
                    borderBottom: "groove",
                    outline: "none",
                    borderBottomColor: " rgb(216, 215, 215)",
                    fontWeight: "bold"
                  }
                : {}
            }
            onClick={() => this.setSelectTeamClickChoose("discuss")}
          >
            Thảo luận
          </button>
        </div>
        <div>
          <button
            style={
              this.state.setSelectTeam === "files"
                ? {
                    color: "blue",
                    borderBottom: "groove",
                    outline: "none",
                    borderBottomColor: " rgb(216, 215, 215)",
                    fontWeight: "bold"
                  }
                : {}
            }
            onClick={() => this.setSelectTeamClickChoose("files")}
          >
            Tệp
          </button>
        </div>
        <div>
          <button
            style={
              this.state.setSelectTeam === "notes"
                ? {
                    color: "blue",
                    borderBottom: "groove",
                    outline: "none",
                    borderBottomColor: " rgb(216, 215, 215)",
                    fontWeight: "bold"
                  }
                : {}
            }
            onClick={() => this.setSelectTeamClickChoose("notes")}
          >
            Ghi chú
          </button>
        </div>
        <div className="user-team_team-menu-and-content__callsetting">
          <div className="user-team_team-menu-and-content__callsetting___call">
            <button>
              <i className="material-icons" style={{ fontSize: "32px" }}>
                &#xe070;
              </i>
            </button>
          </div>
          <div className="user-team_team-menu-and-content__callsetting___setting">
            <button
              style={
                this.state.setSelectTeam === "settings"
                  ? {
                      color: "blue",
                      borderBottom: "groove",
                      outline: "none",
                      borderBottomColor: " rgb(216, 215, 215)",
                      fontWeight: "bold"
                    }
                  : {}
              }
              onClick={() => this.setSelectTeamClickChoose("settings")}
            >
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
