import React from "react";
import RemindersItem from "./RemindersItem";

export default class RemindersAllUnfinishedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ReminderChoiceID: ""
    };
  }

  setChooseReminderToChangeIcon = reminderChoiceID => {
    this.setState({
      ReminderChoiceID: reminderChoiceID
    });
  };

  render() {
    return (
      <div className="user-reminders_all__list___unfinished">
        <p style={{ fontWeight: "bold" }}> Chưa hoàn thành </p>
        {this.props.AllReminderUnfinishedList.map(
          (reminderitem, reminderindex) => (
            <RemindersItem
              key={reminderindex}
              ReminderID={reminderitem.ReminderID}
              ReminderChoiceID={this.state.ReminderChoiceID}
              ReminderType={reminderitem.ReminderType}
              ReminderWarning={reminderitem.ReminderWarning}
              ReminderName={reminderitem.ReminderName}
              ReminderDescription={reminderitem.ReminderDescription}
              ReminderEndDate={reminderitem.ReminderEndDate}
              ReminderCreateDate={reminderitem.ReminderCreateDate}
              setChooseReminderToChange={this.props.setChooseReminderToChange}
              setChooseReminderToChangeIcon={this.setChooseReminderToChangeIcon}
            />
          )
        )}
      </div>
    );
  }
}
