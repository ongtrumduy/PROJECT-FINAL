import React from "react";

export default class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setColor: "" };
  }

  updateRenderContent = state => {
    this.setState({
      setColor: state
    });
    this.props.updateContentState(state);
  };

  render() {
    return (
      <div className="user-dashboard_container__menu">
        <div className="user-dashboard_container__menu___icon">
          <i
            class="material-icons"
            style={{
              fontSize: "48px",
              cursor: "pointer",
              color:
                (this.state.setColor === "activities" && "green") || "black"
            }}
            onClick={() => {
              this.updateRenderContent("activities");
            }}
          >
            {(this.state.setColor === "activities" && "notifications_active") ||
              "notifications_none"}
          </i>
        </div>
        <div className="user-dashboard_container__menu___icon">
          <i
            class="material-icons"
            style={{
              fontSize: "48px",
              cursor: "pointer",
              color: (this.state.setColor === "chats" && "green") || "black"
            }}
            onClick={() => {
              this.updateRenderContent("chats");
            }}
          >
            {(this.state.setColor === "chats" && "chat_bubble") ||
              "chat_bubble_outline"}
          </i>
        </div>
        <div className="user-dashboard_container__menu___icon">
          <span
            class="material-icons"
            style={{
              fontSize: "48px",
              cursor: "pointer",
              color: (this.state.setColor === "teams" && "green") || "black"
            }}
            onClick={() => {
              this.updateRenderContent("teams");
            }}
          >
            &#xe7ef;
          </span>
        </div>
        <div className="user-dashboard_container__menu___icon">
          <i
            class="material-icons"
            style={{
              fontSize: "48px",
              cursor: "pointer",
              color:
                (this.state.setColor === "assignments" && "green") || "black"
            }}
            onClick={() => {
              this.updateRenderContent("assignments");
            }}
          >
            &#xe85d;
          </i>
        </div>
        <div className="user-dashboard_container__menu___icon">
          <i
            class="material-icons"
            style={{
              fontSize: "48px",
              cursor: "pointer",
              color:
                (this.state.setColor === "excercises" && "green") || "black"
            }}
            onClick={() => {
              this.updateRenderContent("excercises");
            }}
          >
            &#xe614;
          </i>
        </div>
      </div>
    );
  }
}
