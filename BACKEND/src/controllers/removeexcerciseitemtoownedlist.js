import zeamsExcercisesLists from "../services/zeamsExcercisesLists";

let RemoveExcerciseItem = async (req, res) => {
  let resRemoveExcerciseItem = await zeamsExcercisesLists.responseRemoveNewExcerciseItemToMemberOwnedList(
    req.body
  );
  // console.log(resCancelCreateNewExcerciseContent);
  res.send(resRemoveExcerciseItem);
};

module.exports = RemoveExcerciseItem;
