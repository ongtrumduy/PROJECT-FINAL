import zeamsMembers from "./../models/zeamsMembers";

let GetLoginMember = (req, res, next) => {
  // console.log(req.body);
  let resMemberLogin = zeamsMembers.resMemberLogin(req.body);
  // console.log(resMemberLogin);
  res.send(resMemberLogin);
};

module.exports = GetLoginMember;
