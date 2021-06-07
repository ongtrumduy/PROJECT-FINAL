import StartBeginSocket from "./startbeginsocket";
import zeamsRoomChats from "../services/zeamsRoomChats";
import zeamsRoomChatsContent from "../services/zeamsRoomChatsContents";

let HiddenOrDeleteMemberChat = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("send-to-hidden-member-chat", data => {
      // console.log("dữ liệu send-to-hidden-member-chat gửi về đây", data);

      zeamsRoomChats.hiddenedMemberOfAllMemberChatRoomList(data);

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "send-to-update-all-member-of-chat-list",
        {
          MemberChatID: data.MemberChatID,
          MemberID: data.MemberID
        }
      );
    });

    //====================================================================================================

    socket.on("send-to-delete-member-chat", data => {
      // console.log("dữ liệu send-to-delete-member-chat gửi về đây", data);
      zeamsRoomChats.removeMemberOfAllMemberChatRoomList(data);

      zeamsRoomChatsContent.deleteMemberChatContent(data);

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "send-to-update-all-member-of-chat-list",
        {
          MemberChatID: data.MemberChatID,
          MemberID: data.MemberID
        }
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "send-to-update-room-chat-list",
        {
          MemberChatID: data.MemberChatID,
          MemberID: data.MemberID
        }
      );
    });
    //====================================================================================================
  });
};

module.exports = HiddenOrDeleteMemberChat;
