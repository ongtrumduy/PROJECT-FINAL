import zeamsTeams from "../services/zeamsTeams";

let GetTeamInfor = (req, res) => {
  // console.log(req.body);
  let getTeamInfor = zeamsTeams.getChoiceJoinedTeamInfor(req.body);
  // console.log(getTeamInfor);
  res.send(getTeamInfor);
};

module.exports = GetTeamInfor;
