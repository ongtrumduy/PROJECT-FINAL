import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class ZeamsMemberResultExcercise {
  constructor() {
    let memberresultexcercises = fs.readFileSync(
      "../BACKEND/src/databases/zeamsMemberResultExcercises.json"
    );
    if (memberresultexcercises) {
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

  //-----------------------------------------------------------------------------------------------------------------
}
let zeamsMemberResultExcercise = new ZeamsMemberResultExcercise();

module.exports = zeamsMemberResultExcercise;
