import zeamsTeams from "../services/zeamsTeams";

let SearchTeamCodeToJoinTeam = async (req, res) => {
  // console.log(req.body);
  let resSearchTeamInforToJoin = await zeamsTeams.responseSearchTeamToJoinTeam(
    req.body
  );
  res.send(resSearchTeamInforToJoin);
};

module.exports = SearchTeamCodeToJoinTeam;
