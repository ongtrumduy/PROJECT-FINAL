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

  // emitAllSocketOfMemberOfTeam = (membersocket, teamID) => {
  //   // let teammemberidlist =
  // };

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
}

let beginSocket = new BeginSocket();

module.exports = beginSocket;
