import zeamsTeams from "./../models/zeamsTeams";

let SearchTeamCodeToJoinTeam = (req, res, next) => {
  console.log(req.body);
  let resSearchTeamInforToJoin = zeamsTeams.responseSearchTeamToJoinTeam(
    req.body
  );
  res.send(resSearchTeamInforToJoin);
};

module.exports = SearchTeamCodeToJoinTeam;
