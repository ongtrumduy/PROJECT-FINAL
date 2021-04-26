import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeamsDiscuss from "../services/zeamsTeamsDiscuss";

let CreateNewDiscussComment = io => {
  let membersocket = {};
  let memberOnlineList = [];

  io.on("connection", socket => {
    //====================================================================================================
    // membersocket = StartBeginSocket.setStartBeginSocket(socket);

    socket.on("sent-online-memberID", data => {
      // console.log("Nhận được memberID" + data.MemberID);
      membersocket = StartBeginSocket.getAllSocketOfMember(
        membersocket,
        data.MemberID,
        socket.id
      );
      memberOnlineList = Object.keys(membersocket);
    });

    socket.on("disconnect-logout", data => {
      membersocket = StartBeginSocket.setRemoveDisconnectSocket(
        membersocket,
        data.MemberID,
        socket.id
      );
    });

    socket.on("disconnect", data => {
      StartBeginSocket.setRemoveDisconnectSocket(
        membersocket,
        data,
        memberOnlineList,
        socket.id
      );
    });
    //====================================================================================================

    console.log(membersocket);

    socket.on("create-new-discuss-comment", data => {
      // console.log("Nhận discuss comment" + data);
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
