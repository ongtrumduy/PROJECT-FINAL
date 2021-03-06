import React from "react";
import ioclient from "socket.io-client";
import AdminDashBoard from "../Main/DashBoard/AdminDashBoard/AdminDashBoard";
import UserDashBoard from "../Main/DashBoard/UserDashBoard/UserDashBoard";
import LogPage from "./Log/LogPage";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateLog: "Log"
    };
  }

  updateMain = () => {
    switch (this.state.updateLog) {
      case "Admin":
        return (
          <AdminDashBoard
            updateLogPage={this.updateLogPage}
            socket={this.socket}
          />
        );
      case "User":
        return (
          <UserDashBoard
            updateLogPage={this.updateLogPage}
            socket={this.socket}
          />
        );
      default:
        return (
          <LogPage
            updateUserDashBoard={this.updateUserDashBoard}
            updateAdminDashBoard={this.updateAdminDashBoard}
            socket={this.socket}
          />
        );
    }
  };

  componentWillMount = () => {
    this.socket = ioclient("http://localhost:8081");
  };

  updateLogPage = () => {
    this.setState({
      updateLog: "Log"
    });
  };

  updateAdminDashBoard = () => {
    this.setState({
      updateLog: "Admin"
    });
  };

  updateUserDashBoard = () => {
    this.setState({
      updateLog: "User"
    });
  };

  render() {
    return <div>{this.updateMain()}</div>;
  }
}
