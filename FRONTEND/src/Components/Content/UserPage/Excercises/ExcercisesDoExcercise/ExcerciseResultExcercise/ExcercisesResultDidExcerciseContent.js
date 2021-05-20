import React from "react";
import Modal from "react-modal";
import axios from "axios";

import ExcercisesResultDidExcerciseContentItem from "./ExcercisesResultDidExcerciseContentItem";
import ExcerciseResultDidExcerciseMainInfor from "./ExcerciseResultDidExcerciseMainInfor

export default class ExcercisesDoExcerciseContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ExcerciseAllAnswerContent: [],
      ExcerciseNthQuestion: "1",
      checkValidatePrevLeft: true,
      checkValidateNextRight: false,
      overNumberQuestionIsOpen: false
    };
  }

  componentDidMount = () => {
    axios.post("./getexcercisedidresult", {});
  };

  openOverNumberQuestionModal = () => {
    this.setState({
      overNumberQuestionIsOpen: true
    });
  };

  closeOverNumberQuestionModal = () => {
    this.setState({
      overNumberQuestionIsOpen: false
    });
  };

  nextToNthQuestionOnRight = () => {
    if (this.state.checkDidAnswerQuest) {
      this.openCheckDidAnswerQuestModal();
    } else {
      if (!this.state.checkValidateNextRight) {
        if (
          Number(this.state.ExcerciseNthQuestion) + 1 + "" ===
          this.props.ExcerciseNumberQuestion
        ) {
          this.setState({
            checkValidateNextRight: true
          });
        }

        this.setState({
          ExcerciseNthQuestion:
            Number(this.state.ExcerciseNthQuestion) + 1 + "",
          checkValidatePrevLeft: false
        });
      } else {
        this.openOverNumberQuestionModal();
      }
    }
  };

  prevToNthQuestionOnLeft = () => {
    if (this.state.checkDidAnswerQuest) {
      this.openCheckDidAnswerQuestModal();
    } else {
      if (!this.state.checkValidatePrevLeft) {
        if (Number(this.state.ExcerciseNthQuestion) - 1 + "" === "1") {
          this.setState({
            checkValidatePrevLeft: true
          });
        }

        this.setState({
          ExcerciseNthQuestion:
            Number(this.state.ExcerciseNthQuestion) - 1 + "",
          checkValidateNextRight: false
        });
      } else {
        this.openOverNumberQuestionModal();
      }
    }
  };

  excerciseDoExcerciseControl = () => {
    return (
      <div className="user-excercises_do-excercise__QandA___control">
        <div>
          <i
            style={
              this.state.checkValidatePrevLeft
                ? { color: "gray" }
                : { color: "blue" }
            }
            onClick={() => this.prevToNthQuestionOnLeft()}
            className="material-icons"
          >
            &#xe5c4;
          </i>
        </div>
        <div>
          <i
            style={
              this.state.checkValidateNextRight
                ? { color: "gray" }
                : { color: "blue" }
            }
            onClick={() => this.nextToNthQuestionOnRight()}
            className="material-icons"
          >
            &#xe5c8;
          </i>
        </div>
      </div>
    );
  };

  renderExcercisesResultDidExcerciseContentItem = () => {
    let nthindex = this.props.ExcerciseAllQAContent.findIndex(questansitem => {
      return (
        questansitem.ExcerciseNthQuestion === this.state.ExcerciseNthQuestion
      );
    });

    let nthanswerindex = this.state.ExcerciseAllAnswerContent.findIndex(
      questansitem => {
        return (
          questansitem.ExcerciseNthQuestion === this.state.ExcerciseNthQuestion
        );
      }
    );

    if (this.state.ExcerciseAllAnswerContent[nthanswerindex]) {
      return (
        <ExcercisesResultDidExcerciseContentItem
          ExcerciseNthQuestion={this.state.ExcerciseNthQuestion}
          ExcerciseCorrectAnswer={
            this.props.ExcerciseAllQAContent[nthindex].ExcerciseCorrectAnswer
          }
          ExcerciseQuestionContent={
            this.props.ExcerciseAllQAContent[nthindex].ExcerciseQuestionContent
          }
          ExcerciseAnswerContentA={
            this.props.ExcerciseAllQAContent[nthindex].ExcerciseAnswerContentA
          }
          ExcerciseAnswerContentB={
            this.props.ExcerciseAllQAContent[nthindex].ExcerciseAnswerContentB
          }
          ExcerciseAnswerContentC={
            this.props.ExcerciseAllQAContent[nthindex].ExcerciseAnswerContentC
          }
          ExcerciseAnswerContentD={
            this.props.ExcerciseAllQAContent[nthindex].ExcerciseAnswerContentD
          }
          ExcerciseChoiceAnswer={
            this.state.ExcerciseAllAnswerContent[nthanswerindex]
              .ExcerciseChoiceAnswer
          }
        />
      );
    }
  };

  excerciseDoExcerciseContent = () => {
    return (
      <div className="user-excercises_do-excercise__QandA">
        <ExcerciseResultDidExcerciseMainInfor
          MemberID={this.props.MemberID}
          socket={this.props.socket}
          updateRenderExcerciseControl={this.props.updateRenderExcerciseControl}
          ExcerciseName={this.props.ExcerciseName}
          ExcerciseNumberQuestion={this.props.ExcerciseNumberQuestion}
          ExcerciseType={this.props.ExcerciseType}
          ExcerciseLogo={this.props.ExcerciseLogo}
        />

        {this.renderExcercisesResultDidExcerciseContentItem()}
        {this.excerciseDoExcerciseControl()}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.excerciseDoExcerciseContent()}
        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.overNumberQuestionIsOpen}
          onRequestClose={this.closeOverNumberQuestionModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NHẮc NHỞ</p>
            <p style={{ fontWeight: "bold" }}>
              Không thể vượt quá số lượng câu hỏi của Bộ đề - Bài tập !!!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeOverNumberQuestionModal()}
          >
            Đã hiểu!!!
          </button>
        </Modal>
        {/*================================================================================= */}
      </div>
    );
  }
}
