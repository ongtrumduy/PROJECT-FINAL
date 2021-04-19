import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeamsDiscuss from "../models/zeamsTeamsDiscuss";
import zeamsTeams from "../models/zeamsTeams";

let CreateNewDiscuss = io => {
  let membersocket = {};
  let memberIDOnlineList = [];
  let memberSocketOnlineList = [];

  io.on("connection", socket => {
    //====================================================================================================
    // membersocket = StartBeginSocket.setStartBeginSocket(socket);

    socket.on("sent-online-memberID", data => {
      // console.log("Nhận được MemberID" + data.MemberID);
      // console.log("Nhận được socketID " + socket.id);

      membersocket = StartBeginSocket.getAllSocketOfMember(
        membersocket,
        data.MemberID,
        socket.id
      );
      memberIDOnlineList = Object.keys(membersocket);
      memberSocketOnlineList = Object.values(membersocket);
      // console.log("Bắt được rồi ");
      // console.log(memberSocketOnlineList);
    });

    socket.on("disconnect-logout", data => {
      membersocket = StartBeginSocket.setRemoveSocket(
        membersocket,
        data.MemberID,
        socket.id
      );
      // console.log("Đăng xuất rồi ");
      memberIDOnlineList = Object.keys(membersocket);
      memberSocketOnlineList = Object.values(membersocket);

      // console.log(memberSocketOnlineList);
    });

    socket.on("disconnect", data => {
      StartBeginSocket.setRemoveDisconnectSocket(
        membersocket,
        data,
        memberIDOnlineList,
        socket.id
      );
      // console.log("Mất kết nối rồi ");
      memberIDOnlineList = Object.keys(membersocket);
      memberSocketOnlineList = Object.values(membersocket);

      // console.log(memberSocketOnlineList);
    });
    //====================================================================================================

    socket.on("create-new-discuss", data => {
      // console.log("Nhận discuss" + data);
      zeamsTeamsDiscuss.createNewMemberDiscuss(data);

      let resTeamDiscussContent = zeamsTeamsDiscuss.responseTeamDiscussContent(
        data
      );

      // console.log("Ra danh sách " + resTeamDiscussContent);

      // io.sockets
      //   .in(socket.id)
      //   .emit("update-discuss-content", resTeamDiscussContent);
      // StartBeginSocket.emitAllSocketsOfMember(
      //   membersocket,
      //   data.MemberID,
      //   io,
      //   "update-discuss-content",
      //   resTeamDiscussContent
      // );

      let teamMemberIDList = zeamsTeams.getAllMemberIDsOfTeam(data);
      console.log("Tất cả thành viên của nhóm: " + teamMemberIDList);
      teamMemberIDList.forEach(memberid => {
        // console.log("Ra memberid " + memberid);
        StartBeginSocket.emitAllSocketsOfMember(
          membersocket,
          memberid.MemberID,
          io,
          "update-discuss-content",
          resTeamDiscussContent
        );
      });

      // StartBeginSocket.emitAllSocketsOfMemberTeam(
      //   membersocket,
      //   data,
      //   io,
      //   "update-discuss-content",
      //   resTeamDiscussContent
      // );
    });
    //====================================================================================================
  });
};

module.exports = CreateNewDiscuss;
