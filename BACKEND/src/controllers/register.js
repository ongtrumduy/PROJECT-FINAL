import zeamsMembers from "./../models/zeamsMembers";

let GetRegisterNewMember = (req, res, next) => {
  // console.log(req.body);
  let resNewMemberRegister = zeamsMembers.resNewMemberRegister(req.body);
  res.send(resNewMemberRegister);
};

module.exports = GetRegisterNewMember;
