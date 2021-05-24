import zeamsExcerciseLists from "../services/zeamsExcerciseLists";

let GetExcerciseOwnedList = async (req, res) => {
  //   console.log("VÀo đây trước", req.body);
  let getExcerciseOwnedList = await zeamsExcerciseLists.responseMemberChoiceExcerciseOwnedListContent(
    req.body
  );
  // console.log("VÀo đây ngay", getReminderList);
  res.send(getExcerciseOwnedList);
};

module.exports = GetExcerciseOwnedList;
