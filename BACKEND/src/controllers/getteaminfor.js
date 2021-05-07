import zeamsTeams from "../services/zeamsTeams";

let GetTeamInfor = async (req, res) => {
  // console.log(req.body);
  let getTeamInfor = await zeamsTeams.getChoiceJoinedTeamInfor(req.body);
  // console.log(getTeamInfor);
  res.send(getTeamInfor);
};

module.exports = GetTeamInfor;
