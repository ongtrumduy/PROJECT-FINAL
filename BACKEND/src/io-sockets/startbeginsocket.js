import zeamsTeams from "../models/zeamsTeams";

class BeginSocket {
  getAllSocketOfMember(membersocket, memberID, socketID) {
    if (membersocket[memberID]) {
      membersocket[memberID].push(socketID);
    } else {
      membersocket[memberID] = [socketID];
    }
    return membersocket;
  }

  emitAllSocketOfMember(membersocket, memberID, io, eventEmit, data) {
    if (membersocket[memberID]) {
      membersocket[memberID].forEach(socketid => {
        return io.sockets.in(socketid).emit(eventEmit, data);
      });
    }
  }

  emitAllSocketOfMemberTeam(membersocket, teamID, io, eventEmit, data) {
    let teamMemberList = zeamsTeams.getAllMemberOfTeam(teamID);
    teamMemberList.forEach(memberid => {
      this.emitAllSocketOfMember(membersocket, memberid, io, eventEmit, data);
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

  setStartBeginSocket(socket) {
    let membersocket = {};
    let memberOnlineList = [];

    socket.on("sent-online-memberID", data => {
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

    return membersocket;
  }
}

let beginSocket = new BeginSocket();

module.exports = beginSocket;
