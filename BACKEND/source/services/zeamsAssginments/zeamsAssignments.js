import fs from "fs";
import { v1 as uuidv1 } from "uuid";

import zeamsExcercisesMemberResults from "../zeamsExcercises/zeamsExcercisesMemberResults";

class ZeamsAssignments {
  constructor() {
    let assignments = fs.readFileSync(
      "../BACKEND/source/databases/zeamsAssignments/zeamsAssignments.json"
    );
    if (assignments.length > 0) {
      this.ZeamsAssignments = JSON.parse(assignments);
    } else {
      this.ZeamsAssignments = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/source/databases/zeamsAssignments/zeamsAssignments.json",
      JSON.stringify(this.ZeamsAssignments),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewAssignmentsForMember(assignmentinfor) {
    let memberassignmentindex = this.ZeamsAssignments.findIndex(
      memberassignmentitem => {
        return memberassignmentitem.MemberID === assignmentinfor.MemberID;
      }
    );

    if (memberassignmentindex < 0) {
      let memberassignment = {
        MemberID: assignmentinfor.MemberID,
        AssignmentMemberUnfinishedList: [],
        AssignmentMemberFinishedList: []
      };

      this.ZeamsAssignments.push(memberassignment);

      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  addNewAssignmentOfMember(assignmentinfor) {
    this.createNewAssignmentsForMember(assignmentinfor);

    let memberassignmentindex = this.ZeamsAssignments.findIndex(
      memberassignmentitem => {
        return memberassignmentitem.MemberID === assignmentinfor.MemberID;
      }
    );

    let assignmentmemberinfor = {
      AssignmentID: uuidv1(),
      TeamID: assignmentinfor.TeamID,
      TeamNoteID: assignmentinfor.TeamNoteID,
      TeamNoteName: assignmentinfor.TeamNoteName,
      TeamNoteCreateDate: assignmentinfor.TeamNoteCreateDate,
      TeamNoteEndDate: assignmentinfor.TeamNoteEndDate,
      ExcerciseID: assignmentinfor.ExcerciseID
    };

    let checkFinishedExcercise = zeamsExcercisesMemberResults.checkMemberHaveDoneExcericse(
      assignmentinfor
    );

    if (checkFinishedExcercise) {
      this.ZeamsAssignments[
        memberassignmentindex
      ].AssignmentMemberFinishedList.unshift(assignmentmemberinfor);
    } else {
      this.ZeamsAssignments[
        memberassignmentindex
      ].AssignmentMemberUnfinishedList.unshift(assignmentmemberinfor);
    }

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  setAssignmentOfMemberToFinished(assignmentinfor) {
    let memberassignmentindex = this.ZeamsAssignments.findIndex(
      memberassignmentitem => {
        return memberassignmentitem.MemberID === assignmentinfor.MemberID;
      }
    );

    if (memberassignmentindex >= 0) {
      let allAssignmentIDToFinishedList = [];

      this.ZeamsAssignments[
        memberassignmentindex
      ].AssignmentMemberUnfinishedList.forEach(assignmentitem => {
        let memberexcerciseinfor = {
          MemberID: assignmentinfor.MemberID,
          ExcerciseID: assignmentitem.ExcerciseID
        };
        let checkFinishedExcercise = zeamsExcercisesMemberResults.checkMemberHaveDoneExcericse(
          memberexcerciseinfor
        );
        if (checkFinishedExcercise) {
          allAssignmentIDFinished.push(assignmentitem.AssignmentID);

          this.ZeamsAssignments[
            memberassignmentindex
          ].AssignmentMemberFinishedList.unshift(assignmentitem);
        }
      });

      allAssignmentIDToFinishedList.forEach(assignmentiditem => {
        let assignmentidindex = this.ZeamsAssignments[
          memberassignmentindex
        ].AssignmentMemberUnfinishedList.findIndex(assignmentitem => {
          return assignmentitem.AssignmentID == assignmentiditem.AssignmentID;
        });

        this.ZeamsAssignments[
          memberassignmentindex
        ].AssignmentMemberUnfinishedList.splice(assignmentidindex, 1);
      });

      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  getAllAssignmentUnfinishedList(assignmentinfor) {
    this.setAssignmentOfMemberToFinished(assignmentinfor);

    let memberassignmentindex = this.ZeamsAssignments.findIndex(
      memberassignmentitem => {
        return memberassignmentitem.MemberID === assignmentinfor.MemberID;
      }
    );

    let allAssignmentUnfinishedList = [];

    if (memberassignmentindex >= 0) {
      allAssignmentUnfinishedList = this.ZeamsAssignments[memberassignmentindex]
        .AssignmentMemberUnfinishedList;
    }

    return allAssignmentUnfinishedList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getAllAssignmentUnfinishedList(assignmentinfor) {
    this.setAssignmentOfMemberToFinished(assignmentinfor);

    let memberassignmentindex = this.ZeamsAssignments.findIndex(
      memberassignmentitem => {
        return memberassignmentitem.MemberID === assignmentinfor.MemberID;
      }
    );

    let allAssignmentUnfinishedList = [];

    if (memberassignmentindex >= 0) {
      allAssignmentUnfinishedList = this.ZeamsAssignments[memberassignmentindex]
        .AssignmentMemberUnfinishedList;
    }

    return allAssignmentUnfinishedList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getAllAssignmentFinishedList(assignmentinfor) {
    this.setAssignmentOfMemberToFinished(assignmentinfor);

    let memberassignmentindex = this.ZeamsAssignments.findIndex(
      memberassignmentitem => {
        return memberassignmentitem.MemberID === assignmentinfor.MemberID;
      }
    );

    let allAssignmentFinishedList = [];

    if (memberassignmentindex >= 0) {
      allAssignmentFinishedList = this.ZeamsAssignments[memberassignmentindex]
        .AssignmentMemberFinishedList;
    }

    return allAssignmentFinishedList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseAllAssignmentUnfinishedList(assignmentinfor) {
    let resAssignmentUnfinished = {
      MemberID: assignmentinfor.MemberID,
      AllAssignmentUnfinishedList: this.getAllAssignmentUnfinishedList(
        assignmentinfor
      )
    };

    return resAssignmentUnfinished;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseAllAssignmentFinishedList(assignmentinfor) {
    let resAssignmentFinished = {
      MemberID: assignmentinfor.MemberID,
      AllAssignmentFinishedList: this.getAllAssignmentFinishedList(
        assignmentinfor
      )
    };

    return resAssignmentFinished;
  }

  //-----------------------------------------------------------------------------------------------------------------

  removeMemberAssignmentFromList(assignmentinfor) {
    let memberassignmentindex = this.ZeamsAssignments.findIndex(
      memberassignmentitem => {
        return memberassignmentitem.MemberID === assignmentinfor.MemberID;
      }
    );

    if (memberassignmentindex >= 0) {
      let assignmentunfinishedindex = this.ZeamsAssignments[
        memberassignmentindex
      ].AssignmentMemberUnfinishedList.findIndex(assignmentunfinisheditem => {
        return (
          assignmentunfinisheditem.TeamNoteID ===
          assignmentinfor.TeamNoteID
        );
      });

      if (assignmentunfinishedindex >= 0) {
        this.ZeamsAssignments[
          memberassignmentindex
        ].AssignmentMemberUnfinishedList.splice(assignmentunfinishedindex, 1);
      }

      let assignmentfinishedindex = this.ZeamsAssignments[
        memberassignmentindex
      ].AssignmentMemberFinishedList.findIndex(assignmentfinisheditem => {
        return (
          assignmentfinisheditem.TeamNoteID === assignmentinfor.TeamNoteID
        );
      });

      if (assignmentfinishedindex >= 0) {
        this.ZeamsAssignments[
          memberassignmentindex
        ].AssignmentMemberFinishedList.splice(assignmentfinishedindex, 1);
      }

      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkExcericiseOfAssignmentMember(assignmentinfor) {
    let checkExcerciseOfAssignment = false;

    let memberassignmentindex = this.ZeamsAssignments.findIndex(
      memberassignmentitem => {
        return memberassignmentitem.MemberID === assignmentinfor.MemberID;
      }
    );

    if (memberassignmentindex >= 0) {
      let excercisefinishedindex = this.ZeamsAssignments[
        memberassignmentindex
      ].AssignmentMemberUnfinishedList.findIndex(assignmentfinisheditem => {
        return (
          assignmentfinisheditem.ExcerciseID ===
          assignmentinfor.ExcerciseID
        );
      });

      if (excercisefinishedindex >= 0) {
        checkExcerciseOfAssignment = true;
      }
    }

    return checkExcerciseOfAssignment;
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
}

let zeamsAssignments = new ZeamsAssignments();

module.exports = zeamsAssignments;
