import zeamsMembers from "../models/zeamsMembers";

let GetFullnameMember = (req, res, next) => {
  // console.log(req.body);
  let resMemberLogin = zeamsMembers.getLoginMemberFullname(req.body);
  // console.log(resMemberLogin);
  res.send(resMemberLogin);
};

module.exports = GetFullnameMember;
