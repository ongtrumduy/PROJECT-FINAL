import StartBeginSocket from "./startbeginsocket";
import zeamsRoomChatsContents from "../services/zeamsRoomChatsContents";

let GetTeamMemberChatList = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("send-message-to-member-chat", data => {
      // console.log("Ra người dùng đã chọn send-message-to-member-chat", data);

      zeamsRoomChatsContents.addNewMessageToMemberAndMemberChat(data);

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

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberChatID,
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

module.exports = GetTeamMemberChatList;
