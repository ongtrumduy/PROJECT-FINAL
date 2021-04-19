import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeamsDiscuss from "../models/zeamsTeamsDiscuss";

let CreateNewDiscuss = io => {
  io.on("connection", socket => {
    let membersocket = {};

    //====================================================================================================
    // membersocket = StartBeginSocket.setStartBeginSocket(socket);
    let memberOnlineList = [];

    socket.on("sent-online-memberID", data => {
      console.log("Nhận được " + data);
      membersocket = this.getAllSocketOfMember(
        membersocket,
        data.MemberID,
        socket.id
      );
      memberOnlineList = Object.keys(membersocket);
    });

    socket.on("disconnect-logout", data => {
      membersocket = this.setRemoveDisconnectSocket(
        membersocket,
        data.MemberID,
        socket.id
      );
    });

    socket.on("disconnect", data => {
      this.setRemoveDisconnectSocket(
        membersocket,
        data,
        memberOnlineList,
        socket.id
      );
    });
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
