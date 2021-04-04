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

  updateRenderMain = () => {
    switch (this.state.updateLog) {
      case "Admin":
        return (
          <AdminDashBoard
            updateRenderLogPage={this.updateRenderLogPage}
            socket={this.socket}
          />
        );
      case "User":
        return (
          <UserDashBoard
            updateRenderLogPage={this.updateRenderLogPage}
            socket={this.socket}
          />
        );
      case "Log":
        return (
          <LogPage
            updateRenderLogPage={this.updateRenderLogPage}
            socket={this.socket}
          />
        );
      default:
        return (
          <LogPage
            updateRenderLogPage={this.updateRenderLogPage}
            socket={this.socket}
          />
        );
    }
  };

  componentDidMount = () => {
    const linklocalbackend = "http://localhost:8081";
    this.socket = ioclient(linklocalbackend, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
  };

  updateRenderLogPage = state => {
    this.setState({
      updateLog: state
    });
  };

  render() {
    return <div>{this.updateRenderMain()}</div>;
  }
}
