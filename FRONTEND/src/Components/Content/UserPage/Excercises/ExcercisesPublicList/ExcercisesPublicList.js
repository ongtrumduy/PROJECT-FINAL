import React from "react";

import ExcercisesPublicListContent from "./ExcercisesPublicListContent";
import ExcercisesPublicDetailItem from "./ExcercisesPublicDetailItem";

export default class ExcercisesPublicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setExcercisePublicRender: "publiclist", ExcerciseID: "" };
  }

  updateRenderExcercisePublicControl = excercisepublic => {
    this.setState({
      setExcercisePublicRender: excercisepublic
    });
  };

  getExcercisePublicIDMemberChoice = excerciseID => {
    this.setState({
      ExcerciseID: excerciseID
    });
  };

  renderAllExcercisePublicOptionList = () => {
    switch (this.state.setExcercisePublicRender) {
      case "publiclist":
        return (
          <ExcercisesPublicListContent
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderExcercisePublicControl={
              this.updateRenderExcercisePublicControl
            }
          />
        );
      case "publicitem":
        return (
          <ExcercisesPublicDetailItem
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderExcercisePublicControl={
              this.updateRenderExcercisePublicControl
            }
            ExcerciseID={this.state.ExcerciseID}
          />
        );
      default:
        return (
          <ExcercisesPublicListContent
            MemberID={this.props.MemberID}
            socket={this.props.socket}
            updateRenderExcercisePublicControl={
              this.updateRenderExcercisePublicControl
            }
          />
        );
    }
  };

  render() {
    return (
      <div className="user-excercises_all-list__public-list">
        {this.renderAllExcercisePublicOptionList()}
      </div>
    );
  }
}
