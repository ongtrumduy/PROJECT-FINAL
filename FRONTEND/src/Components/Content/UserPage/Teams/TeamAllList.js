import React from "react";
import logo11 from "../../../Main/Image-Icons/11.PNG";
import logo22 from "../../../Main/Image-Icons/22.PNG";
import logo33 from "../../../Main/Image-Icons/33.PNG";
import logo44 from "../../../Main/Image-Icons/44.PNG";

export default class TeamAllList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-teams_all__list">
        <div onClick={() => this.props.updateRenderTeamControl("teamcontent")}>
          <img
            style={{ height: "120px", width: "120px", margin: "32px 0 0 0" }}
            src={logo22}
          />
          <p style={{ fontWeight: "bold" }}>Học lập trình</p>
        </div>
        <div onClick={() => this.props.updateRenderTeamControl("teamcontent")}>
          <img
            style={{ height: "120px", width: "120px", margin: "32px 0 0 0" }}
            src={logo11}
          />
          <p style={{ fontWeight: "bold" }}>Học lập trình</p>{" "}
        </div>
        <div onClick={() => this.props.updateRenderTeamControl("teamcontent")}>
          <img
            style={{ height: "120px", width: "120px", margin: "32px 0 0 0" }}
            src={logo44}
          />
          <p style={{ fontWeight: "bold" }}>Học lập trình</p>{" "}
        </div>
        <div onClick={() => this.props.updateRenderTeamControl("teamcontent")}>
          <img
            style={{ height: "120px", width: "120px", margin: "32px 0 0 0" }}
            src={logo22}
          />
          <p style={{ fontWeight: "bold" }}>Học lập trình</p>
        </div>
        <div onClick={() => this.props.updateRenderTeamControl("teamcontent")}>
          <img
            style={{ height: "120px", width: "120px", margin: "32px 0 0 0" }}
            src={logo11}
          />
          <p style={{ fontWeight: "bold" }}>Học lập trình</p>
        </div>
        <div onClick={() => this.props.updateRenderTeamControl("teamcontent")}>
          <img
            style={{ height: "120px", width: "120px", margin: "32px 0 0 0" }}
            src={logo33}
          />
          <p style={{ fontWeight: "bold" }}>Học lập trình</p>
        </div>
        <div onClick={() => this.props.updateRenderTeamControl("teamcontent")}>
          <img
            style={{ height: "120px", width: "120px", margin: "32px 0 0 0" }}
            src={logo11}
          />
          <p style={{ fontWeight: "bold" }}>Học lập trình</p>
        </div>
        <div onClick={() => this.props.updateRenderTeamControl("teamcontent")}>
          <img
            style={{ height: "120px", width: "120px", margin: "32px 0 0 0" }}
            src={logo33}
          />
          <p style={{ fontWeight: "bold" }}>Học lập trình</p>
        </div>
      </div>
    );
  }
}
