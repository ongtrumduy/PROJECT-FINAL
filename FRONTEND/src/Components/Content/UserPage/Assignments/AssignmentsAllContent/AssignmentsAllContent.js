import React from "react";
import axios from "axios";

import AssignmentsAllUnfinishedList from "./AssignmentsAllUnfinishedList";
import AssignmentsAllFinishedList from "./AssignmentsAllFinishedList";

export default class AssignmentsAllContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    axios
      .post("/getassginmentlist", {
        MemberID: this.props.MemberID
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          AllAssignmentUnfinishedList: res.data.MemberAssignmentUnfinishedList,
          AllAssignmentFinishedList: res.data.MemberAssignmentFinishedList
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.props.socket.on("update-assignment-list", data => {
      if (data.MemberID === this.props.MemberID) {
        this.setState({
          AllAssignmentUnfinishedList: data.MemberReminderUnfinishedList,
          AllAssignmentFinishedList: data.MemberReminderFinishedList
        });
      }
    });
  };

  setChooseAssignmentToCompelete = (assignmentID, assignmentType) => {
    this.setState({
      AssignmentChoiceID: assignmentID,
      AssignmentChoiceType: assignmentType
    });
  };

  setCheckToChangeUnOrFinished = changeType => {
    this.setState({
      checkToChangeUnOrFinished: changeType
    });
  };

  render() {
    return (
      <div className="user-assignments_all__list">
        <AssignmentsAllUnfinishedList
          AllAssignmentUnfinishedList={this.state.AllReminderUnfinishedList}
          MemberID={this.props.MemberID}
          socket={this.props.socket}
          setChooseAssignmentToCompelete={this.setChooseAssignmentToChange}
          checkToChangeUnOrFinished={this.state.checkToChangeUnOrFinished}
          setCheckToChangeUnOrFinished={this.setCheckToChangeUnOrFinished}
        />
        <AssignmentsAllFinishedList
          AllAssignmentFinishedList={this.state.AllReminderFinishedList}
          MemberID={this.props.MemberID}
          socket={this.props.socket}
          setChooseAssignmentToCompelete={this.setChooseAssignmentToChange}
          checkToChangeUnOrFinished={this.state.checkToChangeUnOrFinished}
          setCheckToChangeUnOrFinished={this.setCheckToChangeUnOrFinished}
        />
      </div>
    );
  }
}
