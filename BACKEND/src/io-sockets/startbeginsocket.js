import zeamsTeams from "../models/zeamsTeams";

class BeginSocket {
  getAllSocketOfMember(membersocket, memberID, socketID) {
    // console.log("Vào socketID " + socketID);
    if (membersocket[memberID]) {
      membersocket[memberID].push(socketID);
    } else {
      membersocket[memberID] = [socketID];
    }
    // console.log("Sao lại méo được " + membersocket);
    return membersocket;
  }

  emitAllSocketsOfMember(membersocket, memberID, io, eventEmit, data) {
    if (membersocket[memberID]) {
      membersocket[memberID].forEach(socketid => {
        // console.log("Bắn ra socketid " + socketid);
        return io.sockets.in(socketid).emit(eventEmit, data);
      });
    }
  }

  emitAllSocketsOfMemberTeam(membersocket, teamID, io, eventEmit, data) {
    let teamMemberList = zeamsTeams.getAllMembersOfTeam(teamID);
    // console.log("Tất cả thành viên của nhóm: " + teamMemberList);
    teamMemberList.forEach(memberitem => {
      // console.log("Ra memberid " + memberid);
      this.emitAllSocketsOfMember(
        membersocket,
        memberitem.memberID,
        io,
        eventEmit,
        data
      );
    });
  }

  setRemoveSocket(membersocket, memberID, socketID) {
    if (membersocket[memberID]) {
      membersocket[memberID] = membersocket[memberID].filter(socketid => {
        return socketid !== socketID;
      });
      if (!membersocket[memberID].length) {
        delete membersocket[memberID];
      }
    }
    return membersocket;
  }

  setRemoveDisconnectSocket(membersocket, data, memberOnlineList, socketID) {
    if (data === "transport close") {
      memberOnlineList.forEach(memberid => {
        if (membersocket[memberid]) {
          membersocket[memberid] = membersocket[memberid].filter(sockerid => {
            return sockerid !== socketID;
          });
          if (!membersocket[memberid].length) {
            delete membersocket[memberid];
          }
        }
      });
    }
  }

  // setStartBeginSocket(socket) {
  //   let membersocket = {};
  //   let memberOnlineList = [];

  //   socket.on("sent-online-memberID", data => {
  //     console.log("Nhận được " + data);
  //     membersocket = this.getAllSocketOfMember(
  //       membersocket,
  //       data.MemberID,
  //       socket.id
  //     );
  //     memberOnlineList = Object.keys(membersocket);
  //   });

  //   socket.on("disconnect-logout", data => {
  //     membersocket = this.setRemoveDisconnectSocket(
  //       membersocket,
  //       data.MemberID,
  //       socket.id
  //     );
  //   });

  //   socket.on("disconnect", data => {
  //     this.setRemoveDisconnectSocket(
  //       membersocket,
  //       data,
  //       memberOnlineList,
  //       socket.id
  //     );
  //   });

  //   return membersocket;
  // }
}

let beginSocket = new BeginSocket();

module.exports = beginSocket;
