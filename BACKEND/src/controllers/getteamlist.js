import zeamsTeams from "../services/zeamsTeams";

let GetAllTeamList = (req, res) => {
  // console.log(req.body);
  let getAllTeamList = zeamsTeams.getAllTeamList(req.body);
  // console.log(getAllTeamList);
  res.send(getAllTeamList);
};

module.exports = GetAllTeamList;
