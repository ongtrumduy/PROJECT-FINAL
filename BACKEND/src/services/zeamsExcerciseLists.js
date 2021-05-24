import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class ZeamsExcerciseLists {
  constructor() {
    let excerciselists = fs.readFileSync(
      "../BACKEND/src/databases/zeamsExcerciseLists.json"
    );
    // console.log("Ra cái excerciselists", excerciselists.length);
    if (excerciselists.length > 0) {
      this.ZeamsExcerciseLists = JSON.parse(excerciselists);
    } else {
      this.ZeamsExcerciseLists = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/src/databases/zeamsExcerciseLists.json",
      JSON.stringify(this.ZeamsExcerciseLists),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewExcerciseListContent() {
    let excerciselistcontent = {
      ExcercisePubliclist: [],
      ExcercisePrivateList: [],
      ExcerciseOwnedList: []
    };

    this.ZeamsExcerciseLists.push(excerciselistcontent);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewExcercisesListItemContent(excerciseinfor) {
    if (excerciseinfor.ExcerciseType === "public") {
      this.ZeamsExcerciseLists[0].ExcercisePubliclist.push(excerciseinfor);
    } else if (excerciseinfor.ExcerciseType === "private") {
      this.ZeamsExcerciseLists[0].ExcercisePrivateList.push(excerciseinfor);
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  addNewExcerciseOwnedItemContent(excerciseinfor) {
    let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
      memberexcerciseitem => {
        return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
      }
    );

    if (memberExcerciseIndex < 0) {
      let memberexcerciseinfor = {
        MemberID: excerciseinfor.MemberID,
        ExcerciseMemberAllOwnedList: [
          {
            ExcerciseID: excerciseinfor.ExcerciseID,
            ExcerciseName: excerciseinfor.ExcerciseName,
            ExcerciseLogo: excerciseinfor.ExcerciseLogo,
            ExcerciseType: excerciseinfor.ExcerciseType,
            ExcerciseDescription: excerciseinfor.ExcerciseDescription,
            ExcerciseNumberQuestion: excerciseinfor.ExcerciseNumberQuestion
          }
        ]
      };
      this.ZeamsExcerciseLists[0].ExcerciseOwnedList.push(memberexcerciseinfor);
    } else {
      let memberexcerciseinfor = {
        ExcerciseID: excerciseinfor.ExcerciseID,
        ExcerciseName: excerciseinfor.ExcerciseName,
        ExcerciseLogo: excerciseinfor.ExcerciseLogo,
        ExcerciseType: excerciseinfor.ExcerciseType,
        ExcerciseDescription: excerciseinfor.ExcerciseDescription,
        ExcerciseNumberQuestion: excerciseinfor.ExcerciseNumberQuestion
      };
      this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
        memberExcerciseIndex
      ].ExcerciseMemberAllOwnedList.push(memberexcerciseinfor);
    }
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  removeExcerciseOwnedItemContent(excerciseinfor) {
    let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
      memberexcerciseitem => {
        return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
      }
    );
    let memberExcerciseItemIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
      memberExcerciseIndex
    ].ExcerciseMemberAllOwnedList.findIndex(memberexcerciseitem => {
      return memberexcerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
    });

    this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
      memberExcerciseIndex
    ].ExcerciseMemberAllOwnedList.splice(memberExcerciseItemIndex, 1);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  getCurrentExcercisePublicPageOnList(excerciseinfor) {
    let currentIndexExcercisePage = Number(
      excerciseinfor.CurrentIndexExcercisePage
    );
    let numberExcerciseOnPage = Number(excerciseinfor.NumberExcerciseOnPage);

    let indexOfLastExcercise =
      currentIndexExcercisePage * numberExcerciseOnPage;

    let indexOfFirstExcercise = indexOfLastExcercise - numberExcerciseOnPage;

    let currentChoiceIndexExcerciseList = this.state.AllExcercisePublicList.slice(
      indexOfFirstExcercise,
      indexOfLastExcercise
    );

    // let currentChoiceIndexExcerciseList = [];

    // currentChoiceIndexExcerciseList = this.ZeamsExcerciseLists[0].ExcercisePubliclist.slice(
    //   indexOfFirstExcerciseList,
    //   indexOfLastExcerciseList
    // );

    // return currentChoiceIndexExcerciseList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getCurrentExcerciseOwnedPageOnList(excerciseinfor) {
    let currentIndexExcercisePage = Number(
      excerciseinfor.CurrentIndexExcercisePage
    );
    let numberExcerciseOnPage = Number(excerciseinfor.NumberExcerciseOnPage);

    let indexOfLastExcercise =
      currentIndexExcercisePage * numberExcerciseOnPage;

    let indexOfFirstExcercise = indexOfLastExcercise - numberExcerciseOnPage;

    let currentChoiceIndexExcerciseList = this.state.AllExcercisePublicList.slice(
      indexOfFirstExcercise,
      indexOfLastExcercise
    );

    // let currentChoiceIndexExcerciseList = [];

    // let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
    //   memberexcerciseitem => {
    //     return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
    //   }
    // );

    // currentChoiceIndexExcerciseList = this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
    //   memberExcerciseIndex
    // ].ExcerciseMemberAllOwnedList.slice(
    //   indexOfFirstExcerciseList,
    //   indexOfLastExcerciseList
    // );

    // return currentChoiceIndexExcerciseList;
  }

  // //-----------------------------------------------------------------------------------------------------------------

  // responseMemberChoiceExcercisePublicListContent(excerciseinfor) {
  //   let resMemberChoiceExcercise = {};

  //   resMemberChoiceExcercise = {
  //     AllNumberExcercise: this.ZeamsExcerciseLists[0].ExcercisePubliclist
  //       .length,
  //     CurrentExcercisePublicPageOnList: this.getCurrentExcercisePublicPageOnList(
  //       excerciseinfor
  //     )
  //   };

  //   return resMemberChoiceExcercise;
  // }

  // //-----------------------------------------------------------------------------------------------------------------

  // responseMemberChoiceExcerciseOwnedListContent(excerciseinfor) {
  //   let resMemberChoiceExcercise = {};

  //   let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
  //     memberexcerciseitem => {
  //       return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
  //     }
  //   );

  //   resMemberChoiceExcercise = {
  //     AllNumberExcercise: this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
  //       memberExcerciseIndex
  //     ].ExcerciseMemberAllOwnedList.length,
  //     CurrentExcerciseOwnedPageOnList: this.getCurrentExcerciseOwnedPageOnList(
  //       excerciseinfor
  //     )
  //   };

  //   return resMemberChoiceExcercise;
  // }

  //-----------------------------------------------------------------------------------------------------------------
}

let zeamsExcerciseLists = new ZeamsExcerciseLists();

module.exports = zeamsExcerciseLists;
