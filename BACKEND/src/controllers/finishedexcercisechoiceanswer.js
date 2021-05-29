import zeamsMemberResultExcercises from "../services/zeamsMemberResultExcercises";

let FinishedExcerciseChoiceAnswer = async (req, res) => {
  let finishedExcerciseChoiceAnswer = await zeamsMemberResultExcercises.responseFinishedExcericiseChoiceAnswer(
    req.body
  );
  res.send(finishedExcerciseChoiceAnswer);
};

module.exports = FinishedExcerciseChoiceAnswer;
