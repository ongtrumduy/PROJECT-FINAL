import React from "react";
import RemindersItemDetailContent from "./RemindersItemDetailContent";

export default class RemindersItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setRenderDetail: false };
  }

  setChangeRenderDetail = reminderID => {
    if (
      this.props.ReminderID === reminderID &&
      this.state.setRenderDetail === false
    ) {
      this.setState({
        setRenderDetail: true
      });
    } else {
      this.setState({
        setRenderDetail: false
      });
    }
  };

  renderReminderItemDetailContent = () => {
    if (this.state.setRenderDetail) {
      return (
        <RemindersItemDetailContent
          ReminderCreateDate={this.props.ReminderCreateDate}
          ReminderDescription={this.props.ReminderDescription}
          ReminderEndDate={this.props.ReminderEndDate}
        />
      );
    }
  };

  render() {
    return (
      <div
        className="user-reminders_all__list___un-finished____reminder-item"
        onClick={() => this.setChangeRenderDetail(this.props.ReminderID)}
      >
        <div className="user-reminders_all__list___un-finished____reminder-item_____content">
          <div>
            <i className="material-icons">
              {(this.state.setRenderDetail && "radio_button_checked") ||
                "radio_button_unchecked"}
            </i>
          </div>
          <div>
            <img alt="reminder-warning" src={this.props.ReminderWarning} />
          </div>
          <div>
            <p>{this.props.ReminderName}</p>
          </div>
          <div>
            <i className="material-icons">
              {(this.state.setRenderDetail && "expand_more") || "chevron_right"}
            </i>
          </div>
        </div>
        {this.renderReminderItemDetailContent()}
      </div>
    );
  }
}
