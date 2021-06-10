import React from "react";

export default class TeamNotesContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkRenderDetail: false };
  }

  setChangeRenderDetail = () => {
    if (this.state.checkRenderDetail === false) {
      this.setState({
        checkRenderDetail: true
      });
    } else if (this.state.checkRenderDetail === true) {
      this.setState({
        checkRenderDetail: false
      });
    }
  };

  render() {
    return (
      <div>
        <div className="user-team_team-menu-and-content__content___notes____content_____out-date______content_______out-date-item">
          <div>
            <div>
              <p>{this.props.TeamNoteName}</p>
            </div>
            {this.props.TeamNoteType === "with-excercise" ? (
              <div>
                <div>
                  <i className="material-icons"> {"insert-link"} </i>
                </div>
                <div>
                  <p>Kèm theo Bộ đề - Bài tập</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div>
            <i className="material-icons">
              {this.state.checkRenderDetail ? "expand_more" : "chevron_right"}
            </i>
          </div>
        </div>
      </div>
    );
  }
}
