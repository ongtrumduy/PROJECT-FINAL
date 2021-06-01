import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeamsDiscuss from "../services/zeamsTeamsDiscuss";

let CreateNewDiscuss = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("receive-to-update-team-discuss-content", data => {
      let resTeamDiscussContent = zeamsTeamsDiscuss.responseTeamDiscussContent(
        data
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "update-team-discuss-content",
        resTeamDiscussContent
      );
    });

    //====================================================================================================
  });
};

module.exports = CreateNewDiscuss;
