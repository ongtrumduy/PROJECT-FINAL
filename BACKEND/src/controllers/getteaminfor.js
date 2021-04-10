import zeamsTeams from "../models/zeamsTeams";

let GetTeamInfor = (req, res, next) => {
  // console.log(req.body);
  let getTeamInfor = zeamsTeams.getChoiceJoinedTeamInfor(req.body);
  // console.log(getTeamInfor);
  res.send(getTeamInfor);
};

module.exports = GetTeamInfor;
