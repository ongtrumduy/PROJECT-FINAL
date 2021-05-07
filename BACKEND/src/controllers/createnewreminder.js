import zeamsReminders from "../services/zeamsReminders";

let CreateNewReminder = async (req, res) => {
  //   console.log("Có vào đây không ạ ", req.body);
  let resCreateNewReminder = await zeamsReminders.responseCreateNewReminder(
    req.body
  );
  // console.log(resCreateNewTeam);
  res.send(resCreateNewReminder);
};

module.exports = CreateNewReminder;
