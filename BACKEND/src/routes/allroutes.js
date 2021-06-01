import registerRoutes from "./register";
import loginRoutes from "./login";
import getfullnameRoutes from "./getfullname";
import createnewteamRoutes from "./createnewteam";
import getteamlistRoutes from "./getteamlist";
import getteaminforRoutes from "./getteaminfor";
import searchtojointeamRoutes from "./searchtojointeam";
import getteamdiscussRoutes from "./getteamdiscuss";
import getteammemberchatlistRoutes from "./getteammemberchatlist";
import getreminderlistRoutes from "./getreminderlist";
import createnewreminderRoutes from "./createnewreminder";
import createnewexcercisecontentRoutes from "./createnewexcercisecontent";
import createnewexcerciseQAcontentRoutes from "./createnewexcerciseQAcontent";
import getExcerciseOwnedListRoutes from "./getexcerciseownedlist";
import cancelCreateNewExcerciseRoutes from "./cancelcreatenewexcercise";
import getexcerciseowneddetailitemRoutes from "./getexcerciseowneddetailitem";
import addexcerciseitemtoownedlistRoutes from "./addexcerciseitemtoownedlist";
import removeexcerciseitemtoownedlistRoutes from "./removeexcerciseitemtoownedlist";
import getallquestionanswercontentRoutes from "./getallquestionanswercontent";
import finishedexcercisechoiceanswerRoutes from "./finishedexcercisechoiceanswer";

let AllRoutes = (app, corsOptions) => {
  //========================Routes=========================================

  // -----------------------Register---------------------------------------
  registerRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // -----------------------Login---------------------------------------
  loginRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // -----------------------GetFullname---------------------------------------
  getfullnameRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------CreateNewTeam---------------------------------------
  createnewteamRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------GetTeamList---------------------------------------
  getteamlistRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------TeamInfor---------------------------------------
  getteaminforRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------SearchToJoinTeam---------------------------------------
  searchtojointeamRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------GetTeamDiscuss---------------------------------------
  getteamdiscussRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------GetTeamMemberChatList---------------------------------------
  getteammemberchatlistRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------CreateNewReminder---------------------------------------
  createnewreminderRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------GetReminderList---------------------------------------
  getreminderlistRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------CreateNewExcerciseContent---------------------------------------
  createnewexcercisecontentRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------CreateNewExcerciseQAContent---------------------------------------
  createnewexcerciseQAcontentRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------GetExcerciseOwnedList---------------------------------------
  getExcerciseOwnedListRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------CancelCreateNewExcericse---------------------------------------
  cancelCreateNewExcerciseRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------GetExcerciseOwnedDetailItem---------------------------------------
  getexcerciseowneddetailitemRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------AddExcerciseItemToOwnedList---------------------------------------
  addexcerciseitemtoownedlistRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------RemoveExcerciseItemToOwnedList---------------------------------------
  removeexcerciseitemtoownedlistRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------GetAllQuestionAnswerContent---------------------------------------
  getallquestionanswercontentRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  // --------------------------FinishedExcerciseChoiceAnswer---------------------------------------
  finishedexcercisechoiceanswerRoutes(app, corsOptions);
  //-----------------------------------------------------------------------

  //=========================================================================
};

module.exports = AllRoutes;
