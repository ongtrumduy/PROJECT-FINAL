import React from "react";
import axios from "axios";

import AssignmentsUnfinishedItem from "./AssignmentsUnfinishedItem";

export default class AssignmentsAllUnfinishedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ReminderChoiceID: "",
      AllAssignmentUnfinishedList: []
    };
  }

  componentDidMount = () => {
    axios
      .post("/getassignmentunfinishedlist", {
        MemberID: this.props.MemberID
      })
      .then(res => {
        console.log("bắn về thằng getassginmentunfinishedlist", res.data);
        this.setState({
          AllAssignmentUnfinishedList: res.data.AllAssignmentUnfinishedList
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.semounted = true;
    this.mounted = true;

    this.props.socket.on("send-to-update-assignment-unfinished-list", data => {
      if (this.semounted) {
        if (data.MemberID === this.props.MemberID) {
          this.props.socket.on("receive-to-update-assignment-unfinished-list", {
            MemberID: this.props.MemberID
          });
        }
      }
    });

    this.props.socket.on("update-assignment-unfinished-list", data => {
      if (this.mounted) {
        if (data.MemberID === this.props.MemberID) {
          this.setState({
            AllAssignmentUnfinishedList: data.AllAssignmentUnfinishedList
          });
        }
      }
    });
  };

  componentWillUnmount = () => {
    this.semounted = false;
    this.mounted = false;
  };

  setChooseAssignmentToChangeIcon = assigmentChoiceID => {
    this.setState({
      AssigmentChoiceID: assigmentChoiceID
    });
  };

  render() {
    return (
      <div className="user-assignments_all__list___unfinished">
        {this.state.AllAssignmentUnfinishedList.map(
          (assignmentitem, assignmentindex) => (
            <div key={assignmentindex}>
              <AssignmentsUnfinishedItem
                TeamNoteName={assignmentitem.TeamNoteName}
                TeamNoteCreateDate={assignmentitem.TeamNoteCreateDate}
                TeamNoteEndDate={assignmentitem.TeamNoteEndDate}
                TeamID={assignmentitem.TeamID}
                ExcerciseID={assignmentitem.ExcerciseID}
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
          )
        )}
      </div>
    );
  }
}
