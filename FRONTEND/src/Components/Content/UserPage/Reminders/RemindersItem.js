import React from "react";
import RemindersItemDetailContent from "./RemindersItemDetailContent";

export default class RemindersItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { setRenderDetail: false };
  }

  setChangeRenderDetail = (reminderID, reminderType) => {
    this.props.setChooseReminderToChangeIcon(reminderID);

    // if (
    //   this.props.ReminderChoiceID === reminderID &&
    //   this.state.setRenderDetail === false
    // ) {
    //   this.setState({
    //     setRenderDetail: true
    //   });
    //   this.props.setChooseReminderToChange(reminderID, reminderType);
    // } else {
    //   this.setState({
    //     setRenderDetail: false
    //   });

    //   this.props.setChooseReminderToChange("", "");
    // }
  };

  // componentWillReceiveProps = nextProps => {
  //   if (nextProps.ReminderChoiceID !== this.props.ReminderChoiceID) {
  //     this.setState({
  //       setRenderDetail: false
  //     });
  //   }
  // };

  renderReminderItemDetailContent = reminderID => {
    if (
      // this.state.setRenderDetail &&
      this.props.ReminderChoiceID === reminderID
    ) {
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
    // console.log("check setRenderDetail ", this.state.setRenderDetail);
    // console.log("check ReminderChoiceID ", this.props.ReminderChoiceID);
    // console.log("check ReminderID ", this.props.ReminderID);
    // console.log("==============================================");
    return (
      <div
        className="user-reminders_all__list___un-finished____reminder-item"
        onClick={() =>
          this.setChangeRenderDetail(
            this.props.ReminderID,
            this.props.ReminderType
          )
        }
      >
        <div className="user-reminders_all__list___un-finished____reminder-item_____content">
          <div>
            <i className="material-icons">
              {/* {this.state.setRenderDetail === true && */}
              {this.props.ReminderChoiceID === this.props.ReminderID
                ? "radio_button_checked"
                : "radio_button_unchecked"}
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
              {/* {this.state.setRenderDetail === true && */}
              {this.props.ReminderChoiceID === this.props.ReminderID
                ? "expand_more"
                : "chevron_right"}
            </i>
          </div>
        </div>
        {this.renderReminderItemDetailContent(this.props.ReminderID)}
      </div>
    );
  }
}
