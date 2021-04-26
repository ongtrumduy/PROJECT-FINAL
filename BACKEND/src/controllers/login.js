import zeamsMembers from "../services/zeamsMembers";

let GetLoginMember = (req, res) => {
  // console.log(req.body);
  let resMemberLogin = zeamsMembers.resMemberLogin(req.body);
  // console.log(resMemberLogin);
  res.send(resMemberLogin);
};

module.exports = GetLoginMember;
