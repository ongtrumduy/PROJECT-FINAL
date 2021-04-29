import StartBeginSocket from "./startbeginsocket";
import zeamsTeamsDiscuss from "../services/zeamsTeamsDiscuss";

let SetStartVideoCall = io => {
  let membersocket = {};
  let membercallsocket = {};
  let allteamcall = {};
  let count = 0;

  let sleep = ms => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

  io.on("connection", socket => {
    let checkconnect = "";

    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("start-begin-call-video", data => {
      console.log("==========================================================");
      let checkjoinedcall = StartBeginSocket.checkJoinedMemberCall(
        membercallsocket,
        data.MemberID
      );

      allteamcall = StartBeginSocket.getAllTeamStartCall(
        allteamcall,
        membercallsocket,
        data.TeamID,
        data.MemberID
      );

      membercallsocket = StartBeginSocket.getAllMemberStartCall(
        membercallsocket,
        data.MemberID,
        socket.id
      );

      // let MemberJoinedCallCount = {
      //   MemberPeerCount: allteamcall[data.TeamID].length
      // };
      if (!checkjoinedcall) {
        StartBeginSocket.emitAllSocketsOfMemberTeam(
          membersocket,
          data,
          io,
          "connection-call-success",
          "MemberJoinedCallCount"
        );

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
      }

      console.log("membercallsocket", membercallsocket);
      console.log("allteamcall", allteamcall);
    });

    //====================================================================================================

    socket.on("online-call-peer-members", data => {
      // console.log("data gửi đến online-call-peer-members");
      // console.log(data);
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

    //====================================================================================================

    socket.on("offer-to-connect-team-call", data => {
      console.log("data gửi đến offer-to-connect-team-call");
      console.log(data);
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

    //====================================================================================================

    socket.on("answer-to-connect-team-call", data => {
      console.log("data gửi đến answer-to-connect-team-call");
      console.log(data);

      let resToConnectAnswer = {
        SDPAnswerConnect: data.SDPAnswerConnect,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      // async function sentAnswerToConnect() {
      //   for (let i = 0; i < 100; i++) {
      //     await sleep(2);
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "answer-for-connect-team-call",
        resToConnectAnswer
      );
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "answer-for-connect-team-call",
        resToConnectAnswer
      );
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "answer-for-connect-team-call",
        resToConnectAnswer
      );
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "answer-for-connect-team-call",
        resToConnectAnswer
      );
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "answer-for-connect-team-call",
        resToConnectAnswer
      );
      //   }
      // }
      // sentAnswerToConnect();
      checkconnect = "Sentde";
    });

    //====================================================================================================

    socket.on("set-candidate-to-connect", data => {
      console.log("data gửi đến set-candidate-to-connect");
      console.log(data);
      let resToConnectCandidate = {
        CandidateConnect: data.CandidateConnect,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      // async function sentCandidateToConnect() {
      //   for (let i = 0; i < 200; i++) {
      //     await sleep(3);
      if (checkconnect === "Sentde") {
        StartBeginSocket.emitAllSocketsOfMember(
          membercallsocket,
          data.RemoteMemberID,
          io,
          "get-candidate-for-connect",
          resToConnectCandidate
        );
        StartBeginSocket.emitAllSocketsOfMember(
          membercallsocket,
          data.RemoteMemberID,
          io,
          "get-candidate-for-connect",
          resToConnectCandidate
        );
        StartBeginSocket.emitAllSocketsOfMember(
          membercallsocket,
          data.RemoteMemberID,
          io,
          "get-candidate-for-connect",
          resToConnectCandidate
        );
        StartBeginSocket.emitAllSocketsOfMember(
          membercallsocket,
          data.RemoteMemberID,
          io,
          "get-candidate-for-connect",
          resToConnectCandidate
        );
        StartBeginSocket.emitAllSocketsOfMember(
          membercallsocket,
          data.RemoteMemberID,
          io,
          "get-candidate-for-connect",
          resToConnectCandidate
        );
        StartBeginSocket.emitAllSocketsOfMember(
          membercallsocket,
          data.RemoteMemberID,
          io,
          "get-candidate-for-connect",
          resToConnectCandidate
        );
        StartBeginSocket.emitAllSocketsOfMember(
          membercallsocket,
          data.RemoteMemberID,
          io,
          "get-candidate-for-connect",
          resToConnectCandidate
        );
      }

      //   }
      // }
      // sentCandidateToConnect();
    });

    //====================================================================================================

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

    //====================================================================================================

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

    //====================================================================================================

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
        {
          RemoteMemberID: ChooseMemberID,
          RemoteMemberSocketID: socket.id
        }
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
