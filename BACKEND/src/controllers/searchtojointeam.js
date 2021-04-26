import zeamsTeams from "../services/zeamsTeams";

let SearchTeamCodeToJoinTeam = (req, res) => {
  // console.log(req.body);
  let resSearchTeamInforToJoin = zeamsTeams.responseSearchTeamToJoinTeam(
    req.body
  );
  res.send(resSearchTeamInforToJoin);
};

module.exports = SearchTeamCodeToJoinTeam;
