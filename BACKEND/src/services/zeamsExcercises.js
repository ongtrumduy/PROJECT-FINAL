import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class ZeamsExcercises {
  constructor() {
    let excercises = fs.readFileSync(
      "../BACKEND/src/databases/zeamsExcercises.json"
    );
    if (excercises.length > 0) {
      this.ZeamsExcercises = JSON.parse(excercises);
    } else {
      this.ZeamsExcercises = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/src/databases/zeamsExcercises.json",
      JSON.stringify(this.ZeamsExcercises),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewExcercisesContent(excerciseinfor) {
    let ExcerciseID = uuidv4();
    let newexcercisecontent = {
      ExcerciseID: ExcerciseID,
      ExcerciseName: excerciseinfor.ExcerciseName,
      ExcerciseType: excerciseinfor.ExcerciseType,
      ExcerciseDescription: excerciseinfor.ExcerciseDescription,
      ExcerciseLogo: excerciseinfor.ExcerciseLogo,
      ExcerciseNumberQuestion: excerciseinfor.ExcerciseNumberQuestion,
      ExcerciseCreateDate: moment().format("HH:mm DD-MM-YYYY"),
      ExcerciseQAContent: []
    };

    this.ZeamsExcercises.push(newexcercisecontent);
    this.saveDataJSON();

    return ExcerciseID;
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkCreateNewExcercisesContent(excerciseinfor) {
    let checkcreatenewexcercise = false;
    let excerciseindex = this.ZeamsExcercises.findIndex(excerciseitem => {
      return excerciseitem.ExcerciseName === excerciseinfor.ExcerciseName;
    });

    if (excerciseindex >= 0) {
      checkcreatenewexcercise = true;
    }
    return checkcreatenewexcercise;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseCheckCreateNewExcerciseContent(excerciseinfor) {
    let resCheckCreateNewExcercise;

    let checkcreatenewexcercise = this.checkCreateNewExcercisesContent(
      excerciseinfor
    );
    if (checkcreatenewexcercise) {
      resCheckCreateNewExcercise = {
        checkValidate: "havedexistedexcercisename"
      };
    } else if (Object.keys(excerciseinfor.ExcerciseName).length === 0) {
      resCheckCreateNewExcercise = {
        checkValidate: "excercisename"
      };
    } else {
      let ExcerciseID = this.createNewExcercisesContent(excerciseinfor);
      resCheckCreateNewExcercise = {
        checkValidate: "success-create-excercise",
        ExcerciseID: ExcerciseID
      };
    }
    return resCheckCreateNewExcercise;
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewExcerciseQAContent(excerciseinfor) {
    let excerciseidindex = this.ZeamsExcercises.findIndex(excerciseitem => {
      return excerciseitem.ExcerciseID === excerciseinfor.ExcerciseID;
    });

    let ExcerciseQAContent = excerciseinfor.ExcerciseQAContent;

    this.ZeamsExcercises[
      excerciseidindex
    ].ExcerciseQAContent = ExcerciseQAContent;

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseCreateNewExcerciseQAContent(excerciseinfor) {
    this.createNewExcerciseQAContent(excerciseinfor);
    let resCreateNewExcerciseQAContent = {
      checkValidate: "success-create-excercise-QA-content"
    };
    return resCreateNewExcerciseQAContent;
  }

  //-----------------------------------------------------------------------------------------------------------------
}
let zeamsExcercises = new ZeamsExcercises();

module.exports = zeamsExcercises;
