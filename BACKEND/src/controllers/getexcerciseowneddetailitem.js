import zeamsExcerciseLists from "../services/zeamsExcerciseLists";

let GetExcerciseOwnedDetailItem = async (req, res) => {
  let getExcerciseOwnedDetailItem = await zeamsExcerciseLists.responseMemberChoiceExcerciseOwnedItemContent(
    req.body
  );
  res.send(getExcerciseOwnedDetailItem);
};

module.exports = GetExcerciseOwnedDetailItem;
