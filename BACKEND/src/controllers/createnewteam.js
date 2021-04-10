import zeamsTeams from "./../models/zeamsTeams";

let CreateNewTeam = (req, res, next) => {
  // console.log(req.body);
  let resCreateNewTeam = zeamsTeams.responseCreateNewTeam(req.body);
  // console.log(resCreateNewTeam);
  res.send(resCreateNewTeam);
};

module.exports = CreateNewTeam;
