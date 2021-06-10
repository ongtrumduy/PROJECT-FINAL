import createnewdiscussSocket from "./createnewdiscuss";
import updateteamdicusscontentSocket from "./updateteamdicusscontent";
import setstartvideocallSocket from "./setstartvideocall";
import changeremindertounandfinishedSocket from "./changeremindertounandfinished";
import sendmessagetochatSocket from "./sendmessagetochat";
import updateroomchatlistSocket from "./updateroomchatlist";
import unandbannedmemberchatSocket from "./unandbannedmemberchat";
import updatestatusaddremoveexcerciseitemSocket from "./updatestatusaddremoveexcerciseitem";
import addnewmembercreateteamSocket from "./addnewmembercreateteam";
import addnewmemberjointeamSocket from "./addnewmemberjointeam";
import editanddeleteteamdiscusscommentSocket from "./editanddeleteteamdiscusscomment";
import editanddeleteteamdiscussSocket from "./editanddeleteteamdiscuss";
import editallinforteamSocket from "./editallinforteam";
import updateallinforteamSocket from "./updateallinforteam";
import addandremovememberSocket from "./addandremovemember";
import updateallmemberofchatlistSocket from "./updateallmemberofchatlist";
import changetoseenmemberoflistSocket from "./changetoseenmemberoflist";
import hiddenordeletememberchatoflistSocket from "./hiddenordeletememberchatoflist";
import updateanddeleteteamnotecontentSocket from "./updateanddeleteteamnotecontent";

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

  // --------------------------SendMessageToChat--------------------------------------
  sendmessagetochatSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------UpdateRoomChatList--------------------------------------
  updateroomchatlistSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------UnAndBannedMemberChat--------------------------------------
  unandbannedmemberchatSocket(io);
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

  // --------------------------EditAndDeleteTeamDiscussComment--------------------------------------
  editanddeleteteamdiscusscommentSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------EditAndDeleteTeamDiscuss--------------------------------------
  editanddeleteteamdiscussSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------EditAllInforTeam--------------------------------------
  editallinforteamSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------UpdateAllInforTeam--------------------------------------
  updateallinforteamSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------AddAndRemoveMember--------------------------------------
  addandremovememberSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------UpdateAllMemberOfChatList--------------------------------------
  updateallmemberofchatlistSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------ChangeToSeenMemberOfList--------------------------------------
  changetoseenmemberoflistSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------HiddenOrDeleteMemberChatOfList--------------------------------------
  hiddenordeletememberchatoflistSocket(io);
  //--------------------------------------------------------------------------

  // --------------------------UpdateAndDeleteTeamNoteContent--------------------------------------
  updateanddeleteteamnotecontentSocket(io);
  //--------------------------------------------------------------------------
  //=========================================================================
};

module.exports = AllSockets;
