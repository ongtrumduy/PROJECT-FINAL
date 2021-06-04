import zeamsRoomChats from "../services/zeamsRoomChats";

let GetTeamMemberChatList = async (req, res) => {
  // console.log(req.body);
  let resMemberRoomChatList = zeamsRoomChats.responseMemberChatContent(
    req.body
  );

  res.send(resMemberRoomChatList);
};

module.exports = GetTeamMemberChatList;
