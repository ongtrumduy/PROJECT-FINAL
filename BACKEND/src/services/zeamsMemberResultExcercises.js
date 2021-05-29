import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class ZeamsMemberResultExcercises {
  constructor() {
    let memberresultexcercises = fs.readFileSync(
      "../BACKEND/src/databases/zeamsMemberResultExcercises.json"
    );
    if (memberresultexcercises.length > 0) {
      this.ZeamsMemberResultExcercises = JSON.parse(memberresultexcercises);
    } else {
      this.ZeamsMemberResultExcercises = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/src/databases/zeamsMemberResultExcercises.json",
      JSON.stringify(this.ZeamsMemberResultExcercises),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewFinishedExcerciseAnswerContent(finishedanswerinfor) {
    let newfinishedexcerciseanswercontent = {
      ExcerciseID: finishedanswerinfor.ExcerciseID,
      MemberDidExcerciseAllList: []
    };

    this.ZeamsMemberResultExcercises.push(newfinishedexcerciseanswercontent);

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkCreateNewFinishedExcerciseAnswerContent(finishedanswerinfor) {
    let excerciseindex = this.ZeamsMemberResultExcercises.findIndex(
      excerciseitem => {
        return excerciseitem.ExcerciseID === finishedanswerinfor.ExcerciseID;
      }
    );

    if (excerciseindex >= 0) {
      return true;
    } else {
      return false;
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberDidAnswerItemContent(
    finishedanswerinfor,
    memberDidExcerciseTimes
  ) {
    let memberhighestscore = this.countResultScoreOfMemberDidExcercise(
      finishedanswerinfor
    );

    let newmemberdidanswercontent = {
      MemberID: finishedanswerinfor.MemberID,
      MemberHighestScore: memberhighestscore + "",
      MemberDidExcerciseTimes: memberDidExcerciseTimes + "",
      MemberDidDate: moment().format("HH:mm DD-MM-YYYY"),
      MemberAllDidAnswerList: []
    };

    newmemberdidanswercontent.MemberAllDidAnswerList =
      finishedanswerinfor.ExcerciseAllAnswerContent;

    let excerciseindex = this.ZeamsMemberResultExcercises.findIndex(
      excerciseitem => {
        return excerciseitem.ExcerciseID === finishedanswerinfor.ExcerciseID;
      }
    );

    this.ZeamsMemberResultExcercises[
      excerciseindex
    ].MemberDidExcerciseAllList.unshift(newmemberdidanswercontent);

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  removeMemberDisAnswerItemContent(finishedanswerinfor) {
    let excerciseindex = this.ZeamsMemberResultExcercises.findIndex(
      excerciseitem => {
        return excerciseitem.ExcerciseID === finishedanswerinfor.ExcerciseID;
      }
    );

    let memberdidindex = this.ZeamsMemberResultExcercises[
      excerciseindex
    ].MemberDidExcerciseAllList.findIndex(memberdiditem => {
      return memberdiditem.MemberID === finishedanswerinfor.MemberID;
    });

    this.ZeamsMemberResultExcercises[
      excerciseindex
    ].MemberDidExcerciseAllList.splice(memberdidindex, 1);

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberDidAnswerContent(finishedanswerinfor) {
    let checkCreateNewFinishedExcerciseAnswer = this.checkCreateNewFinishedExcerciseAnswerContent(
      finishedanswerinfor
    );

    let checkNewMemberDidAnswer = this.checkNewMemberDidAnswerContent(
      finishedanswerinfor
    );

    if (!checkCreateNewFinishedExcerciseAnswer) {
      this.createNewFinishedExcerciseAnswerContent(finishedanswerinfor);
    }

    let memberDidExcerciseTimes = this.getMemberDidExcerciseTimes(
      finishedanswerinfor
    );

    if (checkNewMemberDidAnswer) {
      let memberscore = this.countResultScoreOfMemberDidExcercise(
        finishedanswerinfor
      );

      let membercurrenthighestscore = this.getTheHighestScoreOfMember(
        finishedanswerinfor
      );

      if (memberscore >= membercurrenthighestscore) {
        this.removeMemberDisAnswerItemContent(finishedanswerinfor);

        this.createNewMemberDidAnswerItemContent(
          finishedanswerinfor,
          memberDidExcerciseTimes
        );
      }
    } else {
      this.createNewMemberDidAnswerItemContent(
        finishedanswerinfor,
        memberDidExcerciseTimes
      );
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkNewMemberDidAnswerContent(finishedanswerinfor) {
    let excerciseindex = this.ZeamsMemberResultExcercises.findIndex(
      excerciseitem => {
        return excerciseitem.ExcerciseID === finishedanswerinfor.ExcerciseID;
      }
    );
    if (excerciseindex >= 0) {
      let memberdidindex = this.ZeamsMemberResultExcercises[
        excerciseindex
      ].MemberDidExcerciseAllList.findIndex(memberdiditem => {
        return memberdiditem.MemberID === finishedanswerinfor.MemberID;
      });

      if (memberdidindex >= 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  getTheHighestScoreOfMember(finishedanswerinfor) {
    let excerciseindex = this.ZeamsMemberResultExcercises.findIndex(
      excerciseitem => {
        return excerciseitem.ExcerciseID === finishedanswerinfor.ExcerciseID;
      }
    );

    let memberdidindex = this.ZeamsMemberResultExcercises[
      excerciseindex
    ].MemberDidExcerciseAllList.findIndex(memberdiditem => {
      return memberdiditem.MemberID === finishedanswerinfor.MemberID;
    });

    let highestScoreOfMember = this.ZeamsMemberResultExcercises[excerciseindex]
      .MemberDidExcerciseAllList[memberdidindex].MemberHighestScore;

    return highestScoreOfMember;
  }

  //-----------------------------------------------------------------------------------------------------------------

  countResultScoreOfMemberDidExcercise(finishedanswerinfor) {
    let countResultScore = 0;

    finishedanswerinfor.ExcerciseAllAnswerContent.forEach(answeritem => {
      if (
        answeritem.ExcerciseChoiceAnswer === answeritem.ExcerciseCorrectAnswer
      ) {
        countResultScore++;
      }
    });

    return countResultScore;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getMemberDidExcerciseTimes(finishedanswerinfor) {
    let excerciseindex = this.ZeamsMemberResultExcercises.findIndex(
      excerciseitem => {
        return excerciseitem.ExcerciseID === finishedanswerinfor.ExcerciseID;
      }
    );

    let memberDidExcerciseCurrentTimes = 0;

    if (excerciseindex >= 0) {
      let memberdidindex = this.ZeamsMemberResultExcercises[
        excerciseindex
      ].MemberDidExcerciseAllList.findIndex(memberdiditem => {
        return memberdiditem.MemberID === finishedanswerinfor.MemberID;
      });
      if (memberdidindex >= 0) {
        let memberDidExcerciseTimes = this.ZeamsMemberResultExcercises[
          excerciseindex
        ].MemberDidExcerciseAllList[memberdidindex].MemberDidExcerciseTimes;

        memberDidExcerciseCurrentTimes = Number(memberDidExcerciseTimes) + 1;
      } else {
        memberDidExcerciseCurrentTimes = 1;
      }
    }
    return memberDidExcerciseCurrentTimes;
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
  responseFinishedExcericiseChoiceAnswer(finishedanswerinfor) {
    this.createNewMemberDidAnswerContent(finishedanswerinfor);

    let resFinishedExcerciseAnswer = {
      checkValidate: "success-finished-excercise-choice",
      ExcerciseMemberDidResult:
        this.countResultScoreOfMemberDidExcercise(finishedanswerinfor) + ""
    };
    return resFinishedExcerciseAnswer;
  }

  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
}
let zeamsMemberResultExcercises = new ZeamsMemberResultExcercises();

module.exports = zeamsMemberResultExcercises;
