import zeamsTeams from "../models/zeamsTeams";

let GetAllTeamList = (req, res, next) => {
  // console.log(req.body);
  let getAllTeamList = zeamsTeams.getAllTeamList(req.body);
  // console.log(getAllTeamList);
  res.send(getAllTeamList);
};

module.exports = GetAllTeamList;
