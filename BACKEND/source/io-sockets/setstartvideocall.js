import StartBeginSocket from "./startBeginSocket";
import zeamsTeamsDiscuss from "../services/zeamsTeams/zeamsTeamsDiscuss";

let SetStartVideoCall = async io => {
  let membersocket = {};
  let membercallsocket = {};
  let allteamcall = {};
  let count = 0;

  let sleep = ms => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

  await io.on("connection", async socket => {
    // let checkconnect = "";

    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    await socket.on("start-begin-call-video", data => {
      console.log(
        "====================start-begin-call-video======================================"
      );
      // let checkjoinedcall = StartBeginSocket.checkJoinedMemberCall(
      //   membercallsocket,
      //   data.MemberID
      // );

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
      // if (!checkjoinedcall) {
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
      // }

      // console.log("membercallsocket", membercallsocket);
      // console.log("allteamcall", allteamcall);
    });

    //====================================================================================================

    await socket.on("online-call-peer-members", data => {
      // console.log("data g???i ?????n online-call-peer-members");
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

    await socket.on("offer-to-connect-team-call", data => {
      // console.log("data g???i ?????n offer-to-connect-team-call");
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
      // checkconnect = "SentAnswer";
    });

    //====================================================================================================

    await socket.on("answer-to-connect-team-call", data => {
      // console.log("data g???i ?????n answer-to-connect-team-call");
      // console.log(data);

      let resToConnectAnswer = {
        SDPAnswerConnect: data.SDPAnswerConnect,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      // async function sentAnswerToConnect() {
      //   for (let i = 0; i < 100; i++) {
      //     await sleep(2);
      // if (checkconnect === "SentAnswer") {
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "answer-for-connect-team-call",
        resToConnectAnswer
      );
      // checkconnect = "SentCandidate";
      // }

      //   }
      // }
      // sentAnswerToConnect();
    });

    //====================================================================================================

    await socket.on("set-candidate-to-connect", data => {
      // console.log("data g???i ?????n set-candidate-to-connect");
      // console.log(data);
      let resToConnectCandidate = {
        CandidateConnect: data.CandidateConnect,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      // async function sentCandidateToConnect() {
      //   for (let i = 0; i < 200; i++) {
      //     await sleep(3);
      // if (checkconnect === "SentCandidate") {
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "get-candidate-for-connect",
        resToConnectCandidate
      );
      // }

      //   }
      // }
      // sentCandidateToConnect();
    });

    //====================================================================================================

    await socket.on("disconnected-call-team", data => {
      // console.log("data g???i ?????n");
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

    //Do c?? th??? ????ng nh???p c??ng 1 nick nhi???u ch??? ph???i check call ????ng c??i ??ang call
    await socket.on("disconnected-call-team-logout", data => {
      // console.log("data g???i ?????n ????? m?? logout ra");
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

    await socket.on("disconnect", data => {
      // console.log("data g???i ?????n do disconnect ra");
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

    await socket.on("send-to-reconnect-again", data => {
      console.log("B??? l???i r???i: ", data.ErrorType);
      let resLocalToRemoveErrorConnect = {
        LocalMemberID: data.LocalMemberID,
        LocalMemberSocketID: data.LocalMemberSocketID,
        RemoteMemberID: data.RemoteMemberID,
        RemoteMemberSocketID: data.RemoteMemberSocketID
      };
      let resRemoveToRemoveErrorConnect = {
        LocalMemberID: data.RemoteMemberID,
        LocalMemberSocketID: data.RemoteMemberSocketID,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.LocalMemberID,
        io,
        "reconnect-to-call-when-error",
        resLocalToRemoveErrorConnect
      );
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "reconnect-to-call-when-error",
        resRemoveToRemoveErrorConnect
      );
    });

    //====================================================================================================
    await socket.on("reconnect-call-peer-members", data => {
      let resLocalToReconnectCall = {
        LocalMemberID: data.LocalMemberID,
        LocalMemberSocketID: data.LocalMemberSocketID,
        RemoteMemberID: data.RemoteMemberID,
        RemoteMemberSocketID: data.RemoteMemberSocketID
      };
      let resRemoteToReconnectCall = {
        LocalMemberID: data.RemoteMemberID,
        LocalMemberSocketID: data.RemoteMemberSocketID,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.LocalMemberID,
        io,
        "remove-error-peer-connection",
        resLocalToReconnectCall
      );
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "remove-error-peer-connection",
        resRemoteToReconnectCall
      );
    });
    //====================================================================================================

    socket.on("reconnect-error-peer-connection", data => {
      let resLocalToReconnectConnection = {
        LocalMemberID: data.LocalMemberID,
        LocalMemberSocketID: data.LocalMemberSocketID,
        RemoteMemberID: data.RemoteMemberID,
        RemoteMemberSocketID: data.RemoteMemberSocketID
      };
      let resRemoteToReconnecConnection = {
        LocalMemberID: data.RemoteMemberID,
        LocalMemberSocketID: data.RemoteMemberSocketID,
        RemoteMemberID: data.LocalMemberID,
        RemoteMemberSocketID: data.LocalMemberSocketID
      };

      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.LocalMemberID,
        io,
        "connect-all-member-call",
        resLocalToReconnectConnection
      );
      StartBeginSocket.emitAllSocketsOfMember(
        membercallsocket,
        data.RemoteMemberID,
        io,
        "connect-all-member-call",
        resRemoteToReconnecConnection
      );
    });

    // //====================================================================================================

    // socket.on("send-to-set-candidate-again", data => {
    //   let resToConnectCandidate = {
    //     CandidateConnect: data.CandidateConnect,
    //     RemoteMemberID: data.RemoteMemberID,
    //     RemoteMemberSocketID: data.RemoteMemberSocketID
    //   };

    //   StartBeginSocket.emitAllSocketsOfMember(
    //     membercallsocket,
    //     data.LocalMemberID,
    //     io,
    //     "get-candidate-for-connect",
    //     resToConnectCandidate
    //   );
    // });
    // //====================================================================================================
  });
};

module.exports = SetStartVideoCall;
