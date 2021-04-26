import zeamsTeamsDiscuss from "../services/zeamsTeamsDiscuss";

let GetTeamDiscuss = (req, res) => {
  // console.log(req.body);
  let resTeamDiscuss = zeamsTeamsDiscuss.responseTeamDiscussContent(req.body);
  // console.log(resTeamDiscuss);
  res.send(resTeamDiscuss);
};

module.exports = GetTeamDiscuss;
