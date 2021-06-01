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

  checkCreateNewExcerciseListContent() {
    let getlength = this.ZeamsExcerciseLists.length;
    if (getlength <= 0) {
      return false;
    } else {
      return true;
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewExcercisesListItemContent(excerciseinfor) {
    let checkcreatenew = this.checkCreateNewExcerciseListContent();
    if (checkcreatenew) {
      if (excerciseinfor.ExcerciseType === "public") {
        this.ZeamsExcerciseLists[0].ExcercisePubliclist.push(excerciseinfor);
      } else if (excerciseinfor.ExcerciseType === "private") {
        this.ZeamsExcerciseLists[0].ExcercisePrivateList.push(excerciseinfor);
      }
    } else {
      this.createNewExcerciseListContent();
      if (excerciseinfor.ExcerciseType === "public") {
        this.ZeamsExcerciseLists[0].ExcercisePubliclist.push(excerciseinfor);
      } else if (excerciseinfor.ExcerciseType === "private") {
        this.ZeamsExcerciseLists[0].ExcercisePrivateList.push(excerciseinfor);
      }
    }
    this.addNewExcerciseOwnedItemContent(excerciseinfor);

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  addNewExcerciseOwnedItemContent(excerciseinfor) {
    let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
      memberexcerciseitem => {
        return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
      }
    );

    let excerciseinforcontent = {
      ExcerciseID: excerciseinfor.ExcerciseID,
      ExcerciseName: excerciseinfor.ExcerciseName,
      ExcerciseType: excerciseinfor.ExcerciseType,
      ExcerciseDescription: excerciseinfor.ExcerciseDescription,
      ExcerciseLogo: excerciseinfor.ExcerciseLogo,
      ExcerciseNumberQuestion: excerciseinfor.ExcerciseNumberQuestion
    };

    if (memberExcerciseIndex < 0) {
      let memberexcerciseinfor = {
        MemberID: excerciseinfor.MemberID,
        ExcerciseMemberAllOwnedList: []
      };
      memberexcerciseinfor.ExcerciseMemberAllOwnedList.push(
        excerciseinforcontent
      );

      this.ZeamsExcerciseLists[0].ExcerciseOwnedList.push(memberexcerciseinfor);
    } else {
      this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
        memberExcerciseIndex
      ].ExcerciseMemberAllOwnedList.push(excerciseinforcontent);
    }

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  removeCreateExcerciseFromList(excerciseinfor) {
    if (excerciseinfor.ExcerciseType === "public") {
      let excerciseidindex = this.ZeamsExcerciseLists[0].ExcercisePubliclist.findIndex(
        excerciseitem => {
          return excerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
        }
      );
      this.ZeamsExcerciseLists[0].ExcercisePubliclist.splice(
        excerciseidindex,
        1
      );
    } else if (excerciseinfor.ExcerciseType === "private") {
      let excerciseidindex = this.ZeamsExcerciseLists[0].ExcercisePrivateList.findIndex(
        excerciseitem => {
          return excerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
        }
      );
      this.ZeamsExcerciseLists[0].ExcercisePubliclist.splice(
        excerciseidindex,
        1
      );
    }
    this.removeExcerciseOwnedItemContent(excerciseinfor);
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

  getCurrentExcerciseChoicePublicPageOnList(excerciseinfor) {
    let currentIndexExcercisePage = Number(
      excerciseinfor.CurrentIndexExcercisePage
    );
    let numberExcerciseOnPage = Number(excerciseinfor.NumberExcerciseOnPage);

    let indexOfLastExcercise =
      currentIndexExcercisePage * numberExcerciseOnPage;

    let indexOfFirstExcercise = indexOfLastExcercise - numberExcerciseOnPage;

    let currentChoiceIndexExcerciseList = [];

    currentChoiceIndexExcerciseList = this.state.AllExcercisePublicList.slice(
      indexOfFirstExcercise,
      indexOfLastExcercise
    );

    return currentChoiceIndexExcerciseList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getCurrentExcerciseChoiceOwnedPageOnList(excerciseinfor) {
    let currentIndexExcercisePage = Number(
      excerciseinfor.CurrentIndexExcercisePage
    );
    let numberExcerciseOnPage = Number(excerciseinfor.NumberExcerciseOnPage);

    let indexOfLastExcercise =
      currentIndexExcercisePage * numberExcerciseOnPage;

    let indexOfFirstExcercise = indexOfLastExcercise - numberExcerciseOnPage;

    let currentChoiceIndexExcerciseList = [];

    let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
      memberexcerciseitem => {
        return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
      }
    );

    currentChoiceIndexExcerciseList = this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
      memberExcerciseIndex
    ].ExcerciseMemberAllOwnedList.slice(
      indexOfFirstExcercise,
      indexOfLastExcercise
    );

    return currentChoiceIndexExcerciseList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseMemberChoiceIndexExcercisePublicListContent(excerciseinfor) {
    let resMemberChoiceExcercise = {};

    resMemberChoiceExcercise = {
      AllNumberExcercise: this.ZeamsExcerciseLists[0].ExcercisePubliclist
        .length,
      CurrentExcercisePublicPageOnList: this.getCurrentExcerciseChoicePublicPageOnList(
        excerciseinfor
      )
    };

    return resMemberChoiceExcercise;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseMemberChoiceIndexExcerciseOwnedListContent(excerciseinfor) {
    let checkcreatenew = this.checkCreateNewExcerciseListContent();
    let resMemberChoiceExcercise = {};

    if (!checkcreatenew) {
      this.createNewExcerciseListContent();
    }

    let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
      memberexcerciseitem => {
        return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
      }
    );

    if (memberExcerciseIndex >= 0) {
      resMemberChoiceExcercise = {
        AllNumberExcercise: this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
          memberExcerciseIndex
        ].ExcerciseMemberAllOwnedList.length,
        CurrentExcerciseChoiceOwnedList: this.getCurrentExcerciseChoiceOwnedPageOnList(
          excerciseinfor
        ),
        MemberID: excerciseinfor.MemberID
      };
    } else {
      resMemberChoiceExcercise = {
        AllNumberExcercise: 0,
        CurrentExcerciseChoiceOwnedList: [],
        MemberID: excerciseinfor.MemberID
      };
    }

    return resMemberChoiceExcercise;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseMemberChoiceExcerciseOwnedItemContent(excerciseinfor) {
    let resMemberChoiceExcerciseItem = {};

    let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
      memberexcerciseitem => {
        return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
      }
    );

    let excercisechoiceindex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
      memberExcerciseIndex
    ].ExcerciseMemberAllOwnedList.findIndex(excerciseitem => {
      return excerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
    });

    resMemberChoiceExcerciseItem = this.ZeamsExcerciseLists[0]
      .ExcerciseOwnedList[memberExcerciseIndex].ExcerciseMemberAllOwnedList[
      excercisechoiceindex
    ];

    return resMemberChoiceExcerciseItem;
  }

  //-----------------------------------------------------------------------------------------------------------------

  addNewExcerciseItemToMemberOwnedList(excerciseinfor) {
    let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
      memberexcerciseitem => {
        return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
      }
    );

    let checkmemberexcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
      memberExcerciseIndex
    ].ExcerciseMemberAllOwnedList.findIndex(excerciseitem => {
      return excerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
    });

    if (checkmemberexcerciseIndex < 0) {
      if (excerciseinfor.ExcerciseType === "public") {
        let excerciseidindex = this.ZeamsExcerciseLists[0].ExcercisePubliclist.findIndex(
          excerciseitem => {
            return excerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
          }
        );

        let excerciseiteminfor = this.ZeamsExcerciseLists[0]
          .ExcercisePubliclist[excerciseidindex];

        let excerciseaddinfor = {
          ExcerciseID: excerciseiteminfor.ExcerciseID,
          ExcerciseName: excerciseiteminfor.ExcerciseName,
          ExcerciseType: excerciseiteminfor.ExcerciseType,
          ExcerciseDescription: excerciseiteminfor.ExcerciseDescription,
          ExcerciseLogo: excerciseiteminfor.ExcerciseLogo,
          ExcerciseNumberQuestion: excerciseiteminfor.ExcerciseNumberQuestion
        };

        this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
          memberExcerciseIndex
        ].ExcerciseMemberAllOwnedList.push(excerciseaddinfor);
      } else if (excerciseinfor.ExcerciseType === "private") {
        let excerciseidindex = this.ZeamsExcerciseLists[0].ExcercisePrivateList.findIndex(
          excerciseitem => {
            return excerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
          }
        );

        let excerciseiteminfor = this.ZeamsExcerciseLists[0]
          .ExcercisePrivateList[excerciseidindex];

        let excerciseaddinfor = {
          ExcerciseID: excerciseiteminfor.ExcerciseID,
          ExcerciseName: excerciseiteminfor.ExcerciseName,
          ExcerciseType: excerciseiteminfor.ExcerciseType,
          ExcerciseDescription: excerciseiteminfor.ExcerciseDescription,
          ExcerciseLogo: excerciseiteminfor.ExcerciseLogo,
          ExcerciseNumberQuestion: excerciseiteminfor.ExcerciseNumberQuestion
        };

        this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
          memberExcerciseIndex
        ].ExcerciseMemberAllOwnedList.push(excerciseaddinfor);
      }
    }

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  removeNewExcerciseItemToMemberOwnedList(excerciseinfor) {
    let memberExcerciseIndex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList.findIndex(
      memberexcerciseitem => {
        return memberexcerciseitem.MemberID === excerciseinfor.MemberID;
      }
    );

    let excerciseidindex = this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
      memberExcerciseIndex
    ].ExcerciseMemberAllOwnedList.findIndex(excerciseitem => {
      return excerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
    });

    if (excerciseidindex >= 0) {
      this.ZeamsExcerciseLists[0].ExcerciseOwnedList[
        memberExcerciseIndex
      ].ExcerciseMemberAllOwnedList.splice(excerciseidindex, 1);
    }

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseAddNewExcerciseItemToMemberOwnedList(excerciseinfor) {
    this.addNewExcerciseItemToMemberOwnedList(excerciseinfor);

    let resAddNewExcerciseItem = {
      checkValidate: "add-success"
    };

    return resAddNewExcerciseItem;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseRemoveNewExcerciseItemToMemberOwnedList(excerciseinfor) {
    this.removeNewExcerciseItemToMemberOwnedList(excerciseinfor);

    let resRemoveNewExcerciseItem = {
      checkValidate: "remove-success"
    };

    return resRemoveNewExcerciseItem;
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
}

let zeamsExcerciseLists = new ZeamsExcerciseLists();

module.exports = zeamsExcerciseLists;
