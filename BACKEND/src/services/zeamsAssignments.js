import fs from "fs";
import { v1 as uuidv1 } from "uuid";

class ZeamsAssignments {
  constructor() {
    let assignments = fs.readFileSync(
      "../BACKEND/src/databases/zeamsAssignments.json"
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
      "../BACKEND/src/databases/zeamsAssignments.json",
      JSON.stringify(this.ZeamsAssignments),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
}
let zeamsAssignments = new ZeamsAssignments();

module.exports = zeamsAssignments;
