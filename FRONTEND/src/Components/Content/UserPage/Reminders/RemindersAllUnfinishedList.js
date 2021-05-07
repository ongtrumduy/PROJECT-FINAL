import React from "react";
import RemindersItem from "./RemindersItem";

export default class RemindersAllUnfinishedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-reminders_all__list___unfinished">
        {this.props.AllReminderList.map((reminderitem, reminderindex) => (
          <RemindersItem
            key={reminderindex}
            ReminderID={reminderitem.ReminderID}
            ReminderWarning={reminderitem.ReminderWarning}
            ReminderName={reminderitem.ReminderName}
            ReminderDescription={reminderitem.ReminderDescription}
            ReminderEndDate={reminderitem.ReminderEndDate}
            ReminderCreateDate={reminderitem.ReminderCreateDate}
          />
        ))}
      </div>
    );
  }
}
