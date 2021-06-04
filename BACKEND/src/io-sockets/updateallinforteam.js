import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsTeams from "../services/zeamsTeams";

let UpdateAllInforTeam = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("receive-to-update-team-infor", data => {
      let getTeamInfor = zeamsTeams.responseChoiceJoinedTeamInfor(data);

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "update-team-infor",
        getTeamInfor
      );
    });

    //====================================================================================================
  });
};

module.exports = UpdateAllInforTeam;
