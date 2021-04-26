import zeamsMembers from "../services/zeamsMembers";

let GetFullnameMember = (req, res) => {
  // console.log(req.body);
  let resMemberLogin = zeamsMembers.getLoginMemberFullname(req.body);
  // console.log(resMemberLogin);
  res.send(resMemberLogin);
};

module.exports = GetFullnameMember;
