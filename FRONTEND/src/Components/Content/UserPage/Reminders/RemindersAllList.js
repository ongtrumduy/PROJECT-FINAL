import React from "react";
import axios from "axios";
import RemindersAllFinishedList from "./RemindersAllFinishedList";
import RemindersAllUnfinishedList from "./RemindersAllUnfinishedList";
import RemindersControlItem from "./RemindersControlItem";

export default class RemindersAllList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllReminderUnfinishedList: [],
      AllReminderFinishedList: [],
      ReminderChoiceID: "",
      ReminderChoiceType: ""
    };
  }

  componentDidMount = () => {
    axios
      .post("/getreminderlist", {
        MemberID: this.props.MemberID
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          AllReminderUnfinishedList: res.data.MemberReminderUnfinishedList,
          AllReminderFinishedList: res.data.MemberReminderFinishedList
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  setChooseReminderToChange = (reminderID, reminderType) => {
    this.setState({
      ReminderChoiceID: reminderID,
      ReminderChoiceType: reminderType
    });
  };

  render() {
    return (
      <div className="user-reminders_all__list">
        <RemindersAllUnfinishedList
          AllReminderList={this.state.AllReminderList}
          MemberID={this.props.MemberID}
          setChooseReminderToChange={this.setChooseReminderToChange}
          socket={this.props.socket}
        />
        <RemindersControlItem
          ReminderID={this.state.ReminderChoiceID}
          ReminderType={this.state.ReminderChoiceType}
          MemberID={this.props.MemberID}
          socket={this.props.socket}
        />
        <RemindersAllFinishedList
          AllReminderList={this.state.AllReminderList}
          MemberID={this.props.MemberID}
          setChooseReminderToChange={this.setChooseReminderToChange}
          socket={this.props.socket}
        />
      </div>
    );
  }
}
