import React from "react";
import axios from "axios";

export default class AssignmentsFinishedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkRenderDetail: "0",
      TeamLogo: "",
      TeamName: "",
      ExcerciseName: "",
      ExcerciseLogo: "",
      MemberDidHighestScore: "",
      ExcerciseNumberQuestion: ""
    };
  }

  componentDidMount = () => {
    axios
      .post("./getteamofassignsmentinfor", {
        TeamID: this.props.TeamID
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          TeamName: res.data.TeamName,
          TeamLogo: res.data.TeamLogo
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .post("./getexcerciseofassignmentinfor", {
        ExcerciseID: this.props.ExcerciseID
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          ExcerciseName: res.data.ExcerciseName,
          ExcerciseLogo: res.data.ExcerciseLogo,
          MemberDidHighestScore: res.data.MemberDidHighestScore,
          ExcerciseNumberQuestion: res.data.ExcerciseNumberQuestion
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  setChooseAssignmentItem = (assignmentID, excerciseID) => {
    this.props.setChooseAssignmentAndExcerciseToDoExcericse(
      assignmentID,
      excerciseID
    );
    this.props.updateRenderAssignmentsControl("doexcercise");
  };

  setChangeRenderDetail = () => {
    if (this.state.checkRenderDetail === "1") {
      this.setState({
        checkRenderDetail: "2"
      });
    } else if (this.state.checkRenderDetail === "2") {
      this.setState({
        checkRenderDetail: "3"
      });
    } else if (this.state.checkRenderDetail === "3") {
      this.setState({
        checkRenderDetail: "0"
      });
    } else if (this.state.checkRenderDetail === "0") {
      this.setState({
        checkRenderDetail: "1"
      });
    }
  };

  renderAllAssignmentFinishedItem = () => {
    switch (this.state.checkRenderDetail) {
      case "0":
        return (
          <div>
            <div>
              <p>{this.props.TeamNoteName}</p>
            </div>
            <div>
              <div>
                <span>Ngày tạo: {this.props.TeamNoteCreateDate}</span>
              </div>
              <div>
                <span>Hết hạn: {this.props.TeamNoteEndDate}</span>
              </div>
            </div>
          </div>
        );
      case "1":
        return (
          <div>
            <div>
              <img src={this.state.ExcerciseLogo} alt="excercise-logo" />
            </div>
            <div>
              <p>{this.state.ExcerciseName}</p>
            </div>
            <div>
              <span>{this.state.MemberDidHighestScore}</span>/
              <span>{this.state.ExcerciseNumberQuestion}</span>
              &nbsp; câu
            </div>
          </div>
        );
      case "2":
        return (
          <div>
            <div>
              <p>{this.state.TeamName}</p>
            </div>
          </div>
        );
      case "3":
        return (
          <div>
            <div>
              <p>{this.state.TeamNoteDescription}</p>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <div>
              <p>{this.props.TeamNoteName}</p>
            </div>
            <div>
              <div>
                <span>Ngày tạo: {this.props.TeamNoteCreateDate}</span>
              </div>
              <div>
                <span>Hết hạn: {this.props.TeamNoteEndDate}</span>
              </div>
            </div>
          </div>
        );
    }
  };

  render() {
    return (
      <div
        className="user-assignments_all__list___finished____assignment-item"
        onClick={() =>
          this.setChooseAssignmentItem(
            this.props.AssignmentID,
            this.props.ExcerciseID
          )
        }
      >
        <div className="user-assignments_all__list___finished____assignment-item_____content">
          <div>
            <img alt="team-logo" src={this.state.TeamLogo} />
          </div>
          {this.renderAllAssignmentFinishedItem()}
          {/* <div>
            <i className="material-icons" style={{ fontWeight: "bold" }}>
              {"all_check"}
            </i>
          </div> */}
          <div onClick={() => this.setChangeRenderDetail()}>
            <i className="material-icons" style={{ fontWeight: "bold" }}>
              {"arrow_forward"}
            </i>
          </div>
        </div>
      </div>
    );
  }
}
