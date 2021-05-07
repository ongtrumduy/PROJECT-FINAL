import zeamsTeamsDiscuss from "../services/zeamsTeamsDiscuss";

let GetTeamDiscuss = async (req, res) => {
  // console.log(req.body);
  let resTeamDiscuss = await zeamsTeamsDiscuss.responseTeamDiscussContent(
    req.body
  );
  // console.log(resTeamDiscuss);
  res.send(resTeamDiscuss);
};

module.exports = GetTeamDiscuss;
