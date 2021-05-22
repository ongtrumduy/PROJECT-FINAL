import React from "react";
import ExcercisesDoExcercise from "../../Excercises/ExcercisesDoExcercise/ExcercisesDoExcercise";
import ExcercisesDoExcerciseContent from "../../Excercises/ExcercisesDoExcercise/ExcercisesDoExcercise/ExcercisesDoExcerciseContent";
import AssignmetsExcerciseDetailItem from "./AssignmentsExcerciseDetailItem";

export default class AssignmentsDoExcercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkDoExcercise: false,
      renderAssignmentDoExcercise: "excercisedetail"
    };
  }

  getExcerciseIDAndTimeMemberChoice = (excerciseID, timeToDoExcercise) => {
    this.setState({
      ExcerciseID: excerciseID,
      TimeToDoExcercise: timeToDoExcercise
    });
  };

  updateRenderExcerciseControl = state => {
    if (state === "excerciseall") {
      this.props.updateRenderAssignmentsControl("assignmentall");
    }
  };

  renderAssignmentDoExcercise = () => {
    switch (this.state.renderAssignmentDoExcercise) {
      case "doexcercise":
        <ExcercisesDoExcercise
          MemberID={this.props.MemberID}
          socket={this.props.socket}
          updateRenderExcerciseControl={this.updateRenderExcerciseControl}
          TimeToDoExcercise={this.state.TimeToDoExcercise}
          ExcerciseID={this.props.ExcerciseID}
        />;
      case "excercisedetail":
        <AssignmetsExcerciseDetailItem
          MemberID={this.props.MemberID}
          socket={this.props.socket}
          updateRenderExcerciseOwnedControl={
            this.updateRenderExcerciseOwnedControl
          }
          ExcerciseID={this.state.ExcerciseID}
          getExcerciseIDAndTimeMemberChoice={
            this.props.getExcerciseIDAndTimeMemberChoice
          }
          updateRenderExcerciseControl={this.props.updateRenderExcerciseControl}
        />;
      default:
        <AssignmetsExcerciseDetailItem
          MemberID={this.props.MemberID}
          socket={this.props.socket}
          updateRenderExcerciseOwnedControl={
            this.updateRenderExcerciseOwnedControl
          }
          ExcerciseID={this.state.ExcerciseID}
          getExcerciseIDAndTimeMemberChoice={
            this.props.getExcerciseIDAndTimeMemberChoice
          }
          updateRenderExcerciseControl={this.props.updateRenderExcerciseControl}
        />;
    }
  };

  render() {}
}
