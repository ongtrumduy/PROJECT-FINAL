import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class ZeamsExcercises {
  constructor() {
    let excercises = fs.readFileSync(
      "../BACKEND/src/databases/zeamsExcercises.json"
    );
    if (excercises) {
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
    let newexcercisecontent = {
      ExcerciseID: uuidv4(),
      ExcerciseName: excerciseinfor.ExcerciseName,
      ExcerciseType: excerciseinfor.ExcerciseType,
      ExcerciseDescription: excerciseinfor.ExcerciseDescription,
      ExcerciseLogo: excerciseinfor.ExcerciseLogo,
      ExcerciseCreateDate: moment().format("HH:mm DD-MM-YYYY"),
      ExcerciseQAContent: []
    };

    this.ZeamsExcercises.push(newexcercisecontent);
    this.saveDataJSON();
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
      resCheckCreateNewExcercise = {
        checkValidate: "success-create-excercise"
      };
    }
    return resCheckCreateNewExcercise;
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
}
let zeamsExcercises = new ZeamsExcercises();

module.exports = zeamsExcercises;
