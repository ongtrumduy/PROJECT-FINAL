import zeamsTeamsDiscuss from "../models/zeamsTeamsDiscuss";

let GetTeamDiscuss = (req, res, next) => {
  // console.log(req.body);
  let resTeamDiscuss = zeamsTeamsDiscuss.responseTeamDiscussContent(req.body);
  // console.log(resTeamDiscuss);
  res.send(resTeamDiscuss);
};

module.exports = GetTeamDiscuss;
