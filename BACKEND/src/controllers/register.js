import zeamsMembers from "./../models/zeamsMembers";

let GetRegisterNewMember = (req, res, next) => {
  console.log(req.body);
  let checkNewMemberRegister = zeamsMembers.resNewMemberRegister(req.body);
  res.send(checkNewMemberRegister);
};

module.exports = GetRegisterNewMember;
