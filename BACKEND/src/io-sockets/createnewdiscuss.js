import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeamsDiscuss from "../services/zeamsTeamsDiscuss";

let CreateNewDiscuss = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("create-new-discuss", data => {
      let memberIDOnlineList = [];
      memberIDOnlineList = Object.keys(membersocket);
      // console.log("ra cái membersocket ");
      // console.log(memberIDOnlineList);
      zeamsTeamsDiscuss.createNewMemberDiscuss(data);

      let resTeamDiscussContent = zeamsTeamsDiscuss.responseTeamDiscussContent(
        data
      );

      StartBeginSocket.emitAllSocketsOfMemberTeam(
        membersocket,
        data,
        io,
        "update-discuss-content",
        resTeamDiscussContent
      );
    });
    //====================================================================================================
  });
};

module.exports = CreateNewDiscuss;
