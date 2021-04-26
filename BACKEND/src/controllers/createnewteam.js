import zeamsTeams from "../services/zeamsTeams";

let CreateNewTeam = (req, res) => {
  // console.log(req.body);
  let resCreateNewTeam = zeamsTeams.responseCreateNewTeam(req.body);
  // console.log(resCreateNewTeam);
  res.send(resCreateNewTeam);
};

module.exports = CreateNewTeam;
