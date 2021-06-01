import createnewdiscussSocket from "./createnewdiscuss";
import updateteamdicusscontentSocket from "./updateteamdicusscontent";
import setstartvideocallSocket from "./setstartvideocall";
import changeremindertounandfinishedSocket from "./changeremindertounandfinished";
import updateteammemberchatlistSocket from "./updateteammemberchatlist";
import updatestatusaddremoveexcerciseitemSocket from "./updatestatusaddremoveexcerciseitem";
import addnewmembercreateteamSocket from "./addnewmembercreateteam";
import addnewmemberjointeamSocket from "./addnewmemberjointeam";
// import adminstatisticSocket from "./adminstatistic";
// import totaluserSocket from "./totaluser";
// import buttonnextSocket from "./buttonnext";
// import buttonpreSocket from "./buttonpre";
// import indexfriendSocket from "./updateindexfriend";
// import changeinforSocket from "./changeinfor";
// import adminseeonlineSocket from "./adminseefriendonline";

let AllSockets = io => {
  //============================Socket======================================

  // --------------------------CreateNewDisCuss--------------------------------------
  createnewdiscussSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------UpdateTeamDiscussContent--------------------------------------
  updateteamdicusscontentSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------SetVideoCall--------------------------------------
  setstartvideocallSocket(io);
  //--------------------------------------------------------------------------

  //--------------------------ChangeReminderToUnAndFinished--------------------------------------
  changeremindertounandfinishedSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------GetTeamMemberChatList--------------------------------------
  updateteammemberchatlistSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------UpdateStatusAddRemoveExcerciseItem--------------------------------------
  updatestatusaddremoveexcerciseitemSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------AddNewMemberCreateTeam--------------------------------------
  addnewmembercreateteamSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------AddNewMemberJoinTeam--------------------------------------
  addnewmemberjointeamSocket(io);
  //--------------------------------------------------------------------------

  // // --------------------------AdminStatistic--------------------------------------
  // adminstatisticSocket(io);
  // //--------------------------------------------------------------------------

  // // --------------------------AdminStatistic--------------------------------------
  // adminstatisticSocket(io);
  // //--------------------------------------------------------------------------

  // // --------------------------TotalUserList--------------------------------------
  // totaluserSocket(io);
  // //--------------------------------------------------------------------------

  // // --------------------------NextButon--------------------------------------
  // buttonnextSocket(io);
  // //--------------------------------------------------------------------------

  // // --------------------------PreButon--------------------------------------
  // buttonpreSocket(io);
  // //--------------------------------------------------------------------------

  // // --------------------------UpdateIndexFriend--------------------------------------
  // indexfriendSocket(io);
  // //--------------------------------------------------------------------------

  // // --------------------------ChangeInfor--------------------------------------
  // changeinforSocket(io);
  // //--------------------------------------------------------------------------

  // // --------------------------AdminSeeOnline--------------------------------------
  // adminseeonlineSocket(io);
  // //--------------------------------------------------------------------------

  //=========================================================================
};

module.exports = AllSockets;
