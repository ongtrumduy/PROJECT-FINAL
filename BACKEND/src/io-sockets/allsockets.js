import createnewdiscussSocket from "./createnewdiscuss";
import setstartvideocallSocket from "./setstartvideocall";
import changeremindertounandfinishedSocket from "./changeremindertounandfinished";
import getteammemberchatlistSocket from "./getteammemberchatlist";
import updatestatusaddremoveexcerciseitemSocket from "./updatestatusaddremoveexcerciseitem";
// import waituserSocket from "./waituserlist";
// import friendlistSocket from "./userfriendlist";
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

  // --------------------------CreateNewDiscussComment--------------------------------------
  // createnewdiscusscommentSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------SetVideoCall--------------------------------------
  setstartvideocallSocket(io);
  //--------------------------------------------------------------------------

  //--------------------------ChangeReminderToUnAndFinished--------------------------------------
  changeremindertounandfinishedSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------GetTeamMemberChatList--------------------------------------
  getteammemberchatlistSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------UpdateStatusAddRemoveExcerciseItem--------------------------------------
  updatestatusaddremoveexcerciseitemSocket(io);
  //--------------------------------------------------------------------------

  // // --------------------------WaitUserList--------------------------------------
  // waituserSocket(io);
  // //--------------------------------------------------------------------------

  // // --------------------------UserFriendList--------------------------------------
  // friendlistSocket(io);
  // //--------------------------------------------------------------------------

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
