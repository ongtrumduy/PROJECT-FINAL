import React from "react";

export default class RemindersControllItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setChoiceReminderToFinished = () => {};

  setChoiceReminderToUnFinished = () => {};

  render() {
    return (
      <div className="user-reminders_all__list___control-item">
        <div onClick={() => this.setChoiceReminderToFinished()}>
          <i className="material-icons">&#xe5cc;</i>
        </div>
        <div onClick={() => this.setChoiceReminderToUnFinished()}>
          <i className="material-icons">&#xe5cb;</i>
        </div>
      </div>
    );
  }
}
