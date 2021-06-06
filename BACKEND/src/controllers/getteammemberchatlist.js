import zeamsRoomChatsContents from "../services/zeamsRoomChatsContents";

let GetTeamMemberChatList = async (req, res) => {
  // console.log(req.body);
  let resMemberRoomChatList = zeamsRoomChatsContents.responseMemberChatContent(
    req.body
  );
  // console.log("dữ liệu gửi về", resMemberRoomChatList);

  res.send(resMemberRoomChatList);
};

module.exports = GetTeamMemberChatList;
