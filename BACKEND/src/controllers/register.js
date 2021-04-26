import zeamsMembers from "../services/zeamsMembers";

let GetRegisterNewMember = (req, res) => {
  // console.log(req.body);
  let resNewMemberRegister = zeamsMembers.resNewMemberRegister(req.body);
  res.send(resNewMemberRegister);
};

module.exports = GetRegisterNewMember;
