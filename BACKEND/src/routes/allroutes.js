import registerRoutes from "./register";
import loginRoutes from "./login";
import getfullnameRoutes from "./getfullname";
import createnewteamRoutes from "./createnewteam";
import getteamlistRoutes from "./getteamlist";
import getteaminforRoutes from "./getteaminfor";
import searchtojointeamRoutes from "./searchtojointeam";
import getteamdiscussRoutes from "./getteamdiscuss";
import getreminderlistRoutes from "./getreminderlist";
import createnewreminderRoutes from "./createnewreminder";
import createnewexcercisecontentRoutes from "./createnewexcercisecontent";
import createnewexcerciseQAcontentRoutes from "./createnewexcerciseQAcontent";
import getExcerciseOwnedListRoutes from "./getexcerciseownedlist";

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

  // // --------------------------UpdateImage---------------------------------------
  // updateimageRoutes(app, corsOptions);
  // //-----------------------------------------------------------------------

  // // --------------------------WaitFriendList---------------------------------------
  // // waitfriendRoutes(app, corsOptions);
  // //-----------------------------------------------------------------------

  // // --------------------------IndexFriendList---------------------------------------
  // indexfriendRoutes(app, corsOptions);
  // //-----------------------------------------------------------------------

  // // --------------------------ChangeInfor---------------------------------------
  // changeinforRoutes(app, corsOptions);
  // //-----------------------------------------------------------------------

  // // --------------------------ChangePass---------------------------------------
  // changepassRoutes(app, corsOptions);
  // //-----------------------------------------------------------------------

  // //=========================================================================
};

module.exports = AllRoutes;
