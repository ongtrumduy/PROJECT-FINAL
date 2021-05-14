import React from "react";
import Modal from "react-modal";

import ExcercisesQAndAContentItem from "./ExcercisesQAndAContentItem";
import ExcercisesQAndAMainInfor from "./ExcerciseQAndAMainInfor";

export default class ExcercisesQAndAContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ExcerciseQAContent: [],
      ExcerciseNthQuestion: "1",

      checkValidatePrevLeft: true,
      checkValidateNextRight: false,
      checkQAContentNextQuest: false,
      overNumberQuestionIsOpen: false,
      checkQAContentNextQuestIsOpen: false,
      checkTrueOrderQuestion: false
    };
  }

  openCheckQAContentNextQuestModal = () => {
    this.setState({
      checkQAContentNextQuestIsOpen: true
    });
  };

  closeCheckQAContentNextQuestModal = () => {
    this.setState({
      checkQAContentNextQuestIsOpen: false
    });
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
    if (!this.state.checkQAContentNextQuest) {
      this.openCheckQAContentNextQuestModal();
    } else {
      if (!this.state.checkValidateNextRight) {
        if (
          parseInt(this.state.ExcerciseNthQuestion) + 1 + "" ===
          this.props.ExcerciseNumberQuestion
        ) {
          this.setState({
            checkValidateNextRight: true
          });
        }

        this.setState({
          ExcerciseNthQuestion:
            parseInt(this.state.ExcerciseNthQuestion) + 1 + "",
          checkValidatePrevLeft: false
        });
      } else {
        this.openOverNumberQuestionModal();
      }
    }
  };

  prevToNthQuestionOnLeft = () => {
    if (!this.state.checkValidatePrevLeft) {
      if (parseInt(this.state.ExcerciseNthQuestion) - 1 + "" === "1") {
        this.setState({
          checkValidatePrevLeft: true
        });
      }

      this.setState({
        ExcerciseNthQuestion:
          parseInt(this.state.ExcerciseNthQuestion) - 1 + "",
        checkValidateNextRight: false
      });
    } else {
      this.openOverNumberQuestionModal();
    }
  };

  getAllQAContentToExcerciseContent = (
    excerciseNthQuestion,
    excerciseQuestionContent,
    excerciseAnswerContentA,
    excerciseAnswerContentB,
    excerciseAnswerContentC,
    excerciseAnswerContentD,
    excerciseCorrectAnswer
  ) => {
    let QAContent = {
      ExcerciseNthQuestion: excerciseNthQuestion,
      ExcerciseQuestionContent: excerciseQuestionContent,
      ExcerciseAnswerContentA: excerciseAnswerContentA,
      ExcerciseAnswerContentB: excerciseAnswerContentB,
      ExcerciseAnswerContentC: excerciseAnswerContentC,
      ExcerciseAnswerContentD: excerciseAnswerContentD,
      ExcerciseCorrectAnswer: excerciseCorrectAnswer
    };
    let nthindex = this.state.ExcerciseQAContent.findIndex(questitem => {
      return questitem.ExcerciseNthQuestion === excerciseNthQuestion;
    });
    if (nthindex >= 0) {
      this.state.ExcerciseQAContent.splice(nthindex, 1, QAContent);
      this.setState({
        ExcerciseQAContent: this.state.ExcerciseQAContent,
        checkQAContentNextQuest: true
      });
    } else {
      this.setState({
        ExcerciseQAContent: [...this.state.ExcerciseQAContent, QAContent],
        checkQAContentNextQuest: true
      });
    }
  };

  excerciseQAndAControl = () => {
    return (
      <div className="user-excercises_create-new__QandA___control">
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
    );
  };

  renderExcercisesQAndAContentItem = () => {
    let nthindex = this.state.ExcerciseQAContent.findIndex(questitem => {
      return questitem.ExcerciseNthQuestion === this.state.ExcerciseNthQuestion;
    });

    if (nthindex >= 0) {
      return (
        <ExcercisesQAndAContentItem
          ExcerciseNthQuestion={this.state.ExcerciseNthQuestion}
          getAllQAContentToExcerciseContent={
            this.getAllQAContentToExcerciseContent
          }
          checkValidatePrevLeft={this.state.checkTrueOrderQuestion}
          ExcerciseQuestionContent={
            this.state.ExcerciseQAContent[nthindex].ExcerciseQuestionContent
          }
          ExcerciseAnswerContentA={
            this.state.ExcerciseQAContent[nthindex].ExcerciseAnswerContentA
          }
          ExcerciseAnswerContentB={
            this.state.ExcerciseQAContent[nthindex].ExcerciseAnswerContentB
          }
          ExcerciseAnswerContentC={
            this.state.ExcerciseQAContent[nthindex].ExcerciseAnswerContentC
          }
          ExcerciseAnswerContentD={
            this.state.ExcerciseQAContent[nthindex].ExcerciseAnswerContentD
          }
          ExcerciseCorrectAnswer={
            this.state.ExcerciseQAContent[nthindex].ExcerciseCorrectAnswer
          }
        />
      );
    } else {
      return (
        <ExcercisesQAndAContentItem
          ExcerciseNthQuestion={this.state.ExcerciseNthQuestion}
          getAllQAContentToExcerciseContent={
            this.getAllQAContentToExcerciseContent
          }
          checkValidatePrevLeft={this.state.checkTrueOrderQuestion}
          ExcerciseQuestionContent=""
          ExcerciseAnswerContentA=""
          ExcerciseAnswerContentB=""
          ExcerciseAnswerContentC=""
          ExcerciseAnswerContentD=""
          ExcerciseCorrectAnswer=""
        />
      );
    }
  };

  createNewExcerciseQAContent = () => {
    return (
      <div className="user-excercises_create-new__QandA">
        <ExcercisesQAndAMainInfor
          MemberID={this.props.MemberID}
          socket={this.props.socket}
          updateRenderExcerciseControl={this.props.updateRenderExcerciseControl}
          updateRenderExcerciseCreateNewControl={
            this.props.updateRenderExcerciseCreateNewControl
          }
          ExcerciseName={this.props.ExcerciseName}
          ExcerciseNumberQuestion={this.props.ExcerciseNumberQuestion}
          ExcerciseType={this.props.ExcerciseType}
          ExcerciseLogo={this.props.ExcerciseLogo}
        />

        {this.renderExcercisesQAndAContentItem()}
        {this.excerciseQAndAControl()}
      </div>
    );
  };

  render() {
    console.log("Ra ExcerciseQAContent", this.state.ExcerciseQAContent);
    return (
      <div>
        {this.createNewExcerciseQAContent()}

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
          isOpen={this.state.checkQAContentNextQuestIsOpen}
          onRequestClose={this.closeCheckQAContentNextQuestModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NHẮc NHỞ</p>
            <p style={{ fontWeight: "bold" }}>
              Bạn phải nhập đầy đủ nội dung của Câu hỏi số
              {this.state.ExcerciseNthQuestion} này đã !!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckQAContentNextQuestModal()}
          >
            Đã hiểu!!!
          </button>
        </Modal>
      </div>
    );
  }
}
