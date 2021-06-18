import React from "react";

import AssignmentsAllUnfinishedList from "../AssignmentUnOrFinished/AssignmentsAllUnfinishedList";
import AssignmentsAllFinishedList from "../AssignmentUnOrFinished/AssignmentsAllFinishedList";

export default class AssignmentsAllContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-assignments_all__list">
        <div>
          <p>Được giao</p>
          <AssignmentsAllUnfinishedList
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderAssignmentsControl={
              this.props.updateRenderAssignmentsControl
            }
            setChooseAssignmentAndExcerciseToDoExcericse={
              this.props.setChooseAssignmentAndExcerciseToDoExcericse
            }
          />
        </div>
        <div>
          <p>Đã hoàn thành</p>
          <AssignmentsAllFinishedList
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderAssignmentsControl={
              this.props.updateRenderAssignmentsControl
            }
            setChooseAssignmentAndExcerciseToDoExcericse={
              this.props.setChooseAssignmentAndExcerciseToDoExcericse
            }
          />
        </div>
      </div>
    );
  }
}
