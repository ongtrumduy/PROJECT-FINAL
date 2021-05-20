import React from "react";
import Modal from "react-modal";

export default class ExcercisesResultDidExcerciseContentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  openNonValueCheckModal = () => {
    this.setState({
      checkNonValueIsOpen: true
    });
  };

  closeNonValueCheckModal = () => {
    this.setState({
      checkNonValueIsOpen: false
    });
  };

  renderResultChoiceExcerciseQAContent = () => {
    return (
      <div className="user-excercises_do-excercise__QandA___content">
        <div className="user-excercises_do-excercise__QandA___content___question">
          <p>Câu hỏi số {this.props.ExcerciseNthQuestion}: </p>
          <span> {this.props.ExcerciseQuestionContent}</span>
        </div>
        <div className="user-excercises_do-excercise__QandA___content____answer">
          <div className="user-excercises_do-excercise__QandA___content____answer_____A">
            <div className="user-excercises_do-excercise__QandA___content____answer_____A______choose">
              <input
                type="radio"
                name="ExcerciseChoiceAnswer"
                value="A"
                checked={this.props.ExcerciseChoiceAnswer === "A"}
              />
            </div>
            <div className="user-excercises_do-excercise__QandA___content____answer_____A______answer-content">
              <span>Đáp án A: </span>
              <span
                style={
                  this.props.ExcerciseCorrectAnswer === "A"
                    ? { color: "red" }
                    : this.props.ExcerciseChoiceAnswer === "A"
                    ? { color: "green" }
                    : { color: "black" }
                }
              >
                {this.props.ExcerciseAnswerContentA}
              </span>
            </div>
          </div>
          <div className="user-excercises_do-excercise__QandA___content____answer_____B">
            <div className="user-excercises_do-excercise__QandA___content____answer_____B______choose">
              <input
                type="radio"
                name="ExcerciseChoiceAnswer"
                value="B"
                checked={this.props.ExcerciseChoiceAnswer === "B"}
              />
            </div>
            <div className="user-excercises_do-excercise__QandA___content____answer_____B______answer-content">
              <span>Đáp án B: </span>
              <span
                style={
                  this.props.ExcerciseCorrectAnswer === "B"
                    ? { color: "red" }
                    : this.props.ExcerciseChoiceAnswer === "B"
                    ? { color: "green" }
                    : { color: "black" }
                }
              >
                {this.props.ExcerciseAnswerContentB}
              </span>
            </div>
          </div>
          <div className="user-excercises_do-excercise__QandA___content____answer_____C">
            <div className="user-excercises_do-excercise__QandA___content____answer_____C______choose">
              <input
                type="radio"
                name="ExcerciseChoiceAnswer"
                value="C"
                checked={this.props.ExcerciseChoiceAnswer === "C"}
              />
            </div>
            <div className="user-excercises_do-excercise__QandA___content____answer_____C______answer-content">
              <span>Đáp án C: </span>
              <span
                style={
                  this.props.ExcerciseCorrectAnswer === "C"
                    ? { color: "red" }
                    : this.props.ExcerciseChoiceAnswer === "C"
                    ? { color: "green" }
                    : { color: "black" }
                }
              >
                {this.props.ExcerciseAnswerContentC}
              </span>
            </div>
          </div>
          <div className="user-excercises_do-excercise__QandA___content____answer_____D">
            <div className="user-excercises_do-excercise__QandA___content____answer_____D______choose">
              <input
                type="radio"
                name="ExcerciseChoiceAnswer"
                value="D"
                checked={this.props.ExcerciseChoiceAnswer === "D"}
              />
            </div>
            <div className="user-excercises_do-excercise__QandA___content____answer_____D______answer-content">
              <span>Đáp án D: </span>
              <span
                style={
                  this.props.ExcerciseCorrectAnswer === "D"
                    ? { color: "red" }
                    : this.props.ExcerciseChoiceAnswer === "D"
                    ? { color: "green" }
                    : { color: "black" }
                }
              >
                {this.props.ExcerciseAnswerContentD}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderResultChoiceExcerciseQAContent()}</div>;
  }
}
