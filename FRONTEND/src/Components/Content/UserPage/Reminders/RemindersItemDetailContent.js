import React from "react";

export default class RemindersItemDetailContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-reminders_all__list___un-finished____reminder-item_____detail">
        <div>
          <div>
            <p>{this.props.ReminderCreateDate}</p>
          </div>
          <div>
            <p>{this.props.ReminderDescription}</p>
          </div>
        </div>
        <div>
          <p>{this.props.ReminderEndDate}</p>
        </div>
      </div>
    );
  }
}
