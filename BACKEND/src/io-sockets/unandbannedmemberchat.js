import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsRoomChatsContents from "../services/zeamsRoomChatsContents";

let UnAndBannedMemberChat = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("send-to-unbanned-of-member", data => {
      zeamsRoomChatsContents.changeUnbannedOfRoomChatMember(data);

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "send-to-update-room-chat-list",
        {
          MemberChatID: data.MemberChatID,
          TeamID: data.TeamID,
          MemberID: data.MemberID
        }
      );
    });

    //====================================================================================================
  });
};

module.exports = UnAndBannedMemberChat;
