import zeamsRoomChatsContents from "../services/zeamsRoomChatsContents";

let GetMemberChatContent = async (req, res) => {
  //   console.log(req.body);
  let resGetMemberChatContent = await zeamsRoomChatsContents.responseMemberChatContent(
    req.body
  );
//   console.log(resGetMemberChatContent);
  res.send(resGetMemberChatContent);
};

module.exports = GetMemberChatContent;
