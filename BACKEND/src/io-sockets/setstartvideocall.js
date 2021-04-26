import StartBeginSocket from "./startbeginsocket";
import zeamsTeamsDiscuss from "../services/zeamsTeamsDiscuss";

let SetStartVideoCall = io => {
  let membersocket = {};
  let membercallsocket = {};
  let allteamcall = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("start-begin-call-video", data => {
      console.log("==========================================================");

      membercallsocket = StartBeginSocket.getAllMemberStartCall(
        membercallsocket,
        data.MemberID,
        socket.id
      );

      allteamcall = StartBeginSocket.getAllTeamStartCall(
        allteamcall,
        data.TeamID,
        data.MemberID
      );

      let MemberJoinedCallCount = {
        MemberPeerCount: allteamcall[data.TeamID].length
      };

      StartBeginSocket.emitAllSocketsOfMemberTeam(
        membersocket,
        data,
        io,
        "connection-call-success",
        MemberJoinedCallCount
      );

      // console.log("membercallsocket", membercallsocket);
      // console.log("allteamcall", allteamcall);

      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.MemberID,
        io,
        "confirm-joined-call-team",
        {
          MemberID: data.MemberID,
          MemberSocketID: socket.id,
          TeamCallID: data.TeamID
        }
      );
    });

    socket.on("online-call-peer-members", data => {
      let resAsRemoteMember = {
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      StartBeginSocket.emitAllOtherMemberJoinedCallOfTeam(
        allteamcall,
        membercallsocket,
        data.TeamID,
        data.LocalMemberID,
        io,
        "connect-all-member-call",
        resAsRemoteMember
      );
    });

    socket.on("offer-to-connect-team-call", data => {
      // console.log("data gửi đến");
      // console.log(data);
      let resToConnectOffer = {
        SDPOfferConnect: data.SDPOfferConnect,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "offer-for-connect-team-call",
        resToConnectOffer
      );
    });

    socket.on("answer-to-connect-team-call", data => {
      console.log("data gửi đến");
      console.log(data);

      let resToConnectAnswer = {
        SDPAnswerConnect: data.SDPAnswerConnect,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "answer-for-connect-team-call",
        resToConnectAnswer
      );
    });

    socket.on("set-candidate-to-connect", data => {
      let resToConnectCandidate = {
        CandidateConnect: data.CandidateConnect,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "get-candidate-for-connect",
        resToConnectCandidate
      );
    });

    socket.on("disconnected-call-team", data => {
      // console.log("data gửi đến");
      // console.log(data);
      StartBeginSocket.emitAllOtherMemberJoinedCallOfTeam(
        allteamcall,
        membercallsocket,
        data.TeamID,
        data.MemberID,
        io,
        "peer-member-call-disconnected",
        {
          RemoteMemberID: data.MemberID,
          RemoteMemberSocketID: data.MemberSocketID
        }
      );

      membercallsocket = StartBeginSocket.setRemoveSocket(
        membercallsocket,
        data.MemberID,
        data.MemberSocketID
      );

      allteamcall = StartBeginSocket.setRemoveSocket(
        allteamcall,
        data.TeamCallID,
        data.MemberID
      );

      // console.log("membercallsocket", membercallsocket);
      // console.log("allteamcall", allteamcall);
    });

    //Do có thể đăng nhập cùng 1 nick nhiều chỗ phải check call đúng cái đang call
    socket.on("disconnected-call-team-logout", data => {
      // console.log("data gửi đến để mà logout ra");
      // console.log(data);
      StartBeginSocket.emitAllOtherMemberJoinedCallOfTeam(
        allteamcall,
        membercallsocket,
        data.TeamID,
        data.MemberID,
        io,
        "peer-member-call-disconnected",
        {
          RemoteMemberID: data.MemberID,
          RemoteMemberSocketID: data.MemberSocketID
        }
      );

      membercallsocket = StartBeginSocket.setRemoveSocket(
        membercallsocket,
        data.MemberID,
        data.MemberSocketID
      );

      allteamcall = StartBeginSocket.setRemoveSocket(
        allteamcall,
        data.TeamCallID,
        data.MemberID
      );
    });

    socket.on("disconnect", data => {
      // console.log("data gửi đến do disconnect ra");
      // console.log(socket.id);
      let ChooseMemberID = "";
      let ChooseTeamID = "";

      let membercallsocketIDList = Object.keys(membercallsocket);
      let allteamcallIDList = Object.keys(allteamcall);

      membercallsocketIDList.forEach(memberid => {
        membercallsocket[memberid].forEach(socketid => {
          if (socketid === socket.id) {
            ChooseMemberID = memberid;
          }
        });
      });

      allteamcallIDList.forEach(teamid => {
        allteamcall[teamid].forEach(memberid => {
          if (memberid === ChooseMemberID) {
            ChooseTeamID = teamid;
          }
        });
      });

      StartBeginSocket.emitAllOtherMemberJoinedCallOfTeam(
        allteamcall,
        membercallsocket,
        ChooseTeamID,
        ChooseMemberID,
        io,
        "peer-member-call-disconnected",
        { RemoteMemberID: ChooseMemberID, RemoteMemberSocketID: socket.id }
      );

      // console.log("ChooseMemberID " + ChooseMemberID);

      membercallsocket = StartBeginSocket.setRemoveDisconnectSocket(
        membercallsocket,
        data,
        socket.id
      );

      allteamcall = StartBeginSocket.setRemoveDisconnectSocket(
        allteamcall,
        data,
        ChooseMemberID
      );
      // console.log("membercallsocket", membercallsocket);
      // console.log("allteamcall", allteamcall);
    });
    //====================================================================================================
  });
};

module.exports = SetStartVideoCall;
