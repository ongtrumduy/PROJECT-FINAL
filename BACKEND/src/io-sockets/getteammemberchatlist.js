import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsRoomChats from "../services/zeamsRoomChats";

let GetTeamMemberChatList = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("get-team-member-chat-list", data => {
      let resMemberRoomChatList = zeamsRoomChats.responseMemberRoomChat(data);

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "response-room-chat-list",
        resMemberRoomChatList
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberChatID,
        io,
        "response-room-chat-list",
        resMemberRoomChatList
      );
    });

    //====================================================================================================

    socket.on("sent-message-to-team-member-chat", data => {
      console.log("Ra người dùng đã chọn ", data);
      zeamsRoomChats.createNewMessageToRooomChat(data);
      let resMemberRoomChatList = zeamsRoomChats.responseMemberRoomChat(data);

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "update-room-chat-list",
        resMemberRoomChatList
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberChatID,
        io,
        "update-room-chat-list",
        resMemberRoomChatList
      );
    });

    //====================================================================================================
  });
};

module.exports = GetTeamMemberChatList;
