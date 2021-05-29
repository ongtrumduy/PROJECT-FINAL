import zeamsExcerciseLists from "../services/zeamsExcerciseLists";

let RemoveExcerciseItem = async (req, res) => {
  let resRemoveExcerciseItem = await zeamsExcerciseLists.responseRemoveNewExcerciseItemToMemberOwnedList(
    req.body
  );
  // console.log(resCancelCreateNewExcerciseContent);
  res.send(resRemoveExcerciseItem);
};

module.exports = RemoveExcerciseItem;
