import zeamsRoomChats from "../services/zeamsRoomChats";

let GetTeamMemberChatList = async (req, res) => {
  // console.log(req.body);
  let resMemberRoomChatList = zeamsRoomChats.responseMemberRoomChat(req.body);

  res.send(resMemberRoomChatList);
};

module.exports = GetTeamMemberChatList;
