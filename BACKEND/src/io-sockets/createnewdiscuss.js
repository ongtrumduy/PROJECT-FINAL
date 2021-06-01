import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeamsDiscuss from "../services/zeamsTeamsDiscuss";

let CreateNewDiscuss = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("create-new-discuss", data => {
      zeamsTeamsDiscuss.createNewMemberDiscuss(data);

      StartBeginSocket.emitAllSocketsOfMemberTeam(
        membersocket,
        data,
        io,
        "send-to-update-team-discuss-content",
        {
          TeamID: data.TeamID
        }
      );
    });

    //====================================================================================================

    // socket.on("create-new-discuss-comment", data => {
    //   zeamsTeamsDiscuss.createNewMemberComment(data);

    //   let resTeamDiscussContent = zeamsTeamsDiscuss.responseTeamDiscussContent(
    //     data
    //   );

    //   StartBeginSocket.emitAllSocketsOfMemberTeam(
    //     membersocket,
    //     data,
    //     io,
    //     "update-team-discuss-content",
    //     resTeamDiscussContent
    //   );

    //   let resUpdateTeamDiscussComment = {
    //     TeamDiscussID: data.TeamDiscussID
    //   };

    //   StartBeginSocket.emitAllSocketsOfMember(
    //     membersocket,
    //     data.MemberID,
    //     io,
    //     "update-team-discuss-comment-content",
    //     resUpdateTeamDiscussComment
    //   );
    // });

    //====================================================================================================
  });
};

module.exports = CreateNewDiscuss;
