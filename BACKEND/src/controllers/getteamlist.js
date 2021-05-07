import zeamsTeams from "../services/zeamsTeams";

let GetAllTeamList = async (req, res) => {
  // console.log(req.body);
  let getAllTeamList = await zeamsTeams.getAllTeamList(req.body);
  // console.log(getAllTeamList);
  res.send(getAllTeamList);
};

module.exports = GetAllTeamList;
