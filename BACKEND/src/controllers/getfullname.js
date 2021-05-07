import zeamsMembers from "../services/zeamsMembers";

let GetFullnameMember = async (req, res) => {
  // console.log(req.body);
  let resMemberLogin = await zeamsMembers.getLoginMemberFullname(req.body);
  // console.log(resMemberLogin);
  res.send(resMemberLogin);
};

module.exports = GetFullnameMember;
