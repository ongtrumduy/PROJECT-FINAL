import zeamsMembers from "./../models/zeamsMembers";

let GetLoginMember = (req, res, next) => {
  console.log(req.body);
  let checkMemberLogin = zeamsMembers.resMemberLogin(req.body);

  res.send(checkMemberLogin);
};

module.exports = GetLoginMember;
