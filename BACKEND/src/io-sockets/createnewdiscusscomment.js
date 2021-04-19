import StartConnectSocket from "../io-sockets/startconnectsocket";
import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeamsDiscuss from "../models/zeamsTeamsDiscuss";

let CreateNewDiscussComment = io => {
  io.on("connection", socket => {
    let membersocket = {};

    //====================================================================================================
    membersocket = StartBeginSocket.setStartBeginSocket(socket);
    //====================================================================================================

    console.log(membersocket);

    socket.on("create-new-discuss-comment", data => {
      console.log(data);
      zeamsTeamsDiscuss.createNewMemberComment(data);

      let resTeamDiscussContent = zeamsTeamsDiscuss.responseTeamDiscussCommentContent(
        data
      );

      StartBeginSocket.emitAllSocketOfMemberTeam(
        membersocket,
        data.TeamID,
        io,
        "update-discuss-comment-content",
        resTeamDiscussContent
      );
    });
    //====================================================================================================
  });
};

module.exports = CreateNewDiscussComment;
