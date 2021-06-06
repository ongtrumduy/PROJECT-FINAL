import zeamsRoomChats from "../services/zeamsRoomChats";

let GetAllMemberChatRoomList = async (req, res) => {
  console.log(req.body);
  let resGetAllMemberChatRoom = await zeamsRoomChats.responseAllMemberChatRoomList(
    req.body
  );
  console.log(resGetAllMemberChatRoom);
  res.send(resGetAllMemberChatRoom);
};

module.exports = GetAllMemberChatRoomList;
