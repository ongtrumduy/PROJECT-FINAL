import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeamsDiscuss from "../models/zeamsTeamsDiscuss";

let CreateNewDiscuss = io => {
  io.on("connection", socket => {
    let membersocket = {};

    //====================================================================================================
    membersocket = StartBeginSocket.setStartBeginSocket(socket);
    //====================================================================================================

    console.log(membersocket);

    socket.on("create-new-discuss", data => {
      // console.log(data);
      zeamsTeamsDiscuss.createNewMemberDiscuss(data);

      let resTeamDiscussContent = zeamsTeamsDiscuss.responseTeamDiscussContent(
        data
      );

      StartBeginSocket.emitAllSocketOfMemberTeam(
        membersocket,
        data.TeamID,
        io,
        "update-discuss-content",
        resTeamDiscussContent
      );
    });
    //====================================================================================================
  });
};

module.exports = CreateNewDiscuss;
