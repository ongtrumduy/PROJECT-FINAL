import React from "react";
import "./Assignments.css";

import AssignmentsAllContent from "./AssignmentsAllContent/AssignmentsAllContent";
import ExcercisesDoExcercise from "../Excercises/ExcercisesDoExcercise/ExcercisesDoExcercise";

export default class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setAssignmentRender: "assignmentall",
      ExcerciseID: "",
      TimeToDoExcercise: ""
    };
  }

  updateRenderAssignmentsControl = state => {
    this.setState({
      setAssignmentRender: state
    });
  };

  updateRenderExcerciseControl = state => {
    if (state === "excerciseall")
      this.setState({
        setAssignmentRender: "assignmentall"
      });
  };

  getExcerciseIDAndTimeMemberChoice = (excerciseID, timeToDoExcercise) => {
    this.setState({
      ExcerciseID: excerciseID,
      TimeToDoExcercise: timeToDoExcercise
    });
  };

  renderReminderControlContent = () => {
    switch (this.state.setAssignmentRender) {
      case "doexcercise":
        return (
          <AssignmentsDoExcercise
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderAssignmentsControl={this.updateRenderExcerciseControl}
            TimeToDoExcercise={this.state.TimeToDoExcercise}
            ExcerciseID={this.state.ExcerciseID}
          />
        );
      case "assignmentall":
        return (
          <AssignmentsAllContent
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderAssignmentsControl={this.updateRenderReminderControl}
            getExcerciseIDAndTimeMemberChoice={
              this.getExcerciseIDAndTimeMemberChoice
            }
          />
        );
      default:
        return (
          <AssignmentsAllContent
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderAssignmentsControl={this.updateRenderReminderControl}
            getExcerciseIDAndTimeMemberChoice={
              this.getExcerciseIDAndTimeMemberChoice
            }
          />
        );
    }
  };

  render() {
    return (
      <div className="user-assignments">
        {this.renderReminderControlContent()}
      </div>
    );
  }
}
