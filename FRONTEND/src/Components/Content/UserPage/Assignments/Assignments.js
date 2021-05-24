import React from "react";
import "./Assignments.css";

import AssignmentsAllContent from "./AssignmentsAllContent/AssignmentsAllContent";
import AssignmentsDoExcercise from "./AssignmentsDoExcercise/AssignmentsDoExcercise";

export default class Assignments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setAssignmentRender: "doexcercise",
      ExcerciseID: "",
      TimeToDoExcercise: ""
    };
  }

  updateRenderAssignmentsControl = state => {
    this.setState({
      setAssignmentRender: state
    });
  };

  renderAssignmentControlContent = () => {
    switch (this.state.setAssignmentRender) {
      case "doexcercise":
        return (
          <AssignmentsDoExcercise
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderAssignmentsControl={this.updateRenderAssignmentsControl}
            TimeToDoExcercise={this.state.TimeToDoExcercise}
            ExcerciseID={this.state.ExcerciseID}
          />
        );
      case "assignmentall":
        return (
          <AssignmentsAllContent
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderAssignmentsControl={this.updateRenderAssignmentsControl}
          />
        );
      default:
        // return (
        //   <AssignmentsAllContent
        //     MemberID={this.props.MemberID}
        //     socket={this.props.socket}
        //     updateRenderAssignmentsControl={this.updateRenderAssignmentsControl}
        //     getExcerciseIDAndTimeMemberChoice={
        //       this.getExcerciseIDAndTimeMemberChoice
        //     }
        //   />
        // );
        return (
          <AssignmentsDoExcercise
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderAssignmentsControl={this.updateRenderAssignmentsControl}
            TimeToDoExcercise={this.state.TimeToDoExcercise}
            ExcerciseID={this.state.ExcerciseID}
          />
        );
    }
  };

  render() {
    return (
      <div className="user-assignments">
        {this.renderAssignmentControlContent()}
      </div>
    );
  }
}
