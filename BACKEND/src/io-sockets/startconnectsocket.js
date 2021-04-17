import BeginSocket from "../io-sockets/startbeginsocket";

let StartBeginSocket = socket => {
  let membersocket = {};
  let memberOnlineList = [];

  socket.on("sent-and-get-memberID", data => {
    membersocket = BeginSocket.getAllSocketOfMember(
      membersocket,
      data.MemberID,
      socket.id
    );
    memberOnlineList = Object.keys(membersocket);
  });

  socket.on("disconnect-logout", data => {
    membersocket = BeginSocket.setRemoveDisconnectSocket(
      membersocket,
      data.MemberID,
      socket.id
    );
  });

  socket.on("disconnect", data => {
    BeginSocket.setRemoveDisconnectSocket(
      membersocket,
      data,
      memberOnlineList,
      socket.id
    );
  });
};

module.exports = StartBeginSocket;
