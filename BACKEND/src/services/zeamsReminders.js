import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class ZeamsReminders {
  constructor() {
    let reminders = fs.readFileSync(
      "../BACKEND/src/databases/zeamsReminders.json"
    );
    if (reminders) {
      this.ZeamsReminders = JSON.parse(reminders);
    } else {
      this.ZeamsReminders = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/src/databases/zeamsReminders.json",
      JSON.stringify(this.ZeamsReminders),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewReminderList(reminderinfor) {
    let newreminderlist = {
      MemberID: reminderinfor.MemberID,
      MemberReminderUnfinishedList: [],
      MemberReminderFinishedList: []
    };

    this.ZeamsReminders.push(newreminderlist);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewReminder(reminderinfor) {
    let reminderindex = this.ZeamsReminders.findIndex(reminderitem => {
      return reminderitem.MemberID === reminderinfor.MemberID;
    });

    // console.log("Bắn ra cái ", reminderindex);

    let newreminder = {
      ReminderID: uuidv4(),
      ReminderName: reminderinfor.ReminderName,
      ReminderDescription: reminderinfor.ReminderDescription,
      ReminderWarning: reminderinfor.ReminderWarning,
      ReminderCreateDate: moment().format("HH:mm DD-MM-YYYY"),
      ReminderEndDate: moment(reminderinfor.ReminderEndDate).format(
        "DD-MM-YYYY"
      )
    };

    this.ZeamsReminders[reminderindex].MemberReminderUnfinishedList.unshift(
      newreminder
    );
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkCreateEndDate(reminderinfor) {
    let checkEndDate = false;
    // console.log("Xem trong nó là year", moment(moment(), "DD/MM/YYYY").year());
    // console.log(
    //   "Xem trong nó là month",
    //   moment(moment(), "DD/MM/YYYY").month()
    // );
    // console.log("Xem trong nó là date", moment(moment(), "DD/MM/YYYY").date());
    // console.log("=======================================================");
    // console.log(
    //   "Xem trong nó là year",
    //   moment(reminderinfor.ReminderEndDate, "YYYY/MM/DD").year()
    // );
    // console.log(
    //   "Xem trong nó là month",
    //   moment(reminderinfor.ReminderEndDate, "YYYY/MM/DD").month()
    // );
    // console.log(
    //   "Xem trong nó là date",
    //   moment(reminderinfor.ReminderEndDate, "YYYY/MM/DD").date()
    // );
    if (
      moment(reminderinfor.ReminderEndDate, "YYYY/MM/DD").year() >
      moment(moment(), "DD/MM/YYYY").year()
    ) {
      checkEndDate = true;
    } else if (
      moment(reminderinfor.ReminderEndDate, "YYYY/MM/DD").year() ===
      moment(moment(), "DD/MM/YYYY").year()
    ) {
      if (
        moment(reminderinfor.ReminderEndDate, "YYYY/MM/DD").month() >
        moment(moment(), "DD/MM/YYYY").month()
      ) {
        checkEndDate = true;
      } else if (
        moment(reminderinfor.ReminderEndDate, "YYYY/MM/DD").month() ===
        moment(moment(), "DD/MM/YYYY").month()
      ) {
        if (
          moment(reminderinfor.ReminderEndDate, "YYYY/MM/DD").date() >=
          moment(moment(), "DD/MM/YYYY").date()
        ) {
          checkEndDate = true;
        }
      }
    }
    return checkEndDate;
  }

  //-----------------------------------------------------------------------------------------------------------------
  responseMemberReminderList(reminderinfor) {
    let resmemberreminderlist;
    let reminderindex = this.ZeamsReminders.findIndex(reminderindex => {
      return reminderindex.MemberID === reminderinfor.MemberID;
    });
    // console.log("LLaays ra index ", reminderindex);
    if (reminderindex < 0) {
      this.createNewReminderList(reminderinfor);
      resmemberreminderlist = {
        MemberID: reminderinfor.MemberID,
        MemberReminderUnfinishedList: [],
        MemberReminderFinishedList: []
      };
    } else {
      resmemberreminderlist = this.ZeamsReminders[reminderindex];
    }

    return resmemberreminderlist;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseCreateNewReminder(reminderinfor) {
    let resCreateNewReminder;
    if (Object.keys(reminderinfor.ReminderName).length === 0) {
      resCreateNewReminder = {
        checkValidate: "remindername"
      };
    } else if (Object.keys(reminderinfor.ReminderEndDate).length === 0) {
      resCreateNewReminder = {
        checkValidate: "reminderenddate"
      };
    } else if (!this.checkCreateEndDate(reminderinfor)) {
      resCreateNewReminder = {
        checkValidate: "non-pass-end-date"
      };
    } else {
      this.createNewReminder(reminderinfor);
      resCreateNewReminder = {
        checkValidate: "success-create-reminder"
      };
    }
    return resCreateNewReminder;
  }

  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
}
let zeamsReminders = new ZeamsReminders();

module.exports = zeamsReminders;
