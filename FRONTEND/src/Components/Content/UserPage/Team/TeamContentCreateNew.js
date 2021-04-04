import React from "react";
import TeamContentCreateNewInput from "./TeamContentCreateNewInput";

export default class TeamContentCreateNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setInputStatus: false };
  }

  handleSetInputStatus = () => {
    this.setState({
      setInputStatus: true
    });
  };

  renderInputBoxToCreate = () => {
    if (this.state.setInputStatus) {
      return <TeamContentCreateNewInput />;
    } else {
      return (
        <button onClick={() => this.handleSetInputStatus()}>
          Cuộc thảo luận mới
        </button>
      );
    }
  };

  render() {
    return (
      <div className="user-team_content__createnew">
        {this.renderInputBoxToCreate()}
      </div>
    );
  }
}
